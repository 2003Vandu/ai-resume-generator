package com.resume.backend.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.ResourceAccessException;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class ResumeServiceImpl implements ResumeService {

    private final RestTemplate restTemplate = new RestTemplate();
    @SuppressWarnings("unused")
	private final ObjectMapper objectMapper = new ObjectMapper();

    // Injects configurable values for the Ollama API URL and model name
    // These values should be defined in your application.properties or application.yml
    @Value("${ollama.api.url:http://localhost:11434/v1}")
    private String ollamaUrl;

    @Value("${ollama.api.model:deepseek-r1:7b}")
    private String ollamaModel;

    @Override
    public Map<String, Object> generateResumeResponse(String userResumeDescription) throws IOException {

        // Loads the prompt template from the resources directory
        String promptString = this.loadPromptFromFile("resume_prompt.txt");
        String promptContent = this.putValuesToTemplate(promptString, Map.of("userDescription", userResumeDescription));

        // Use the standard OpenAI-compatible chat completions endpoint
        String fullOllamaUrl = ollamaUrl + "/chat/completions";

        // Ollama's /chat/completions endpoint expects a 'messages' array, not a single 'prompt'
        Map<String, Object> request = Map.of(
                "model", ollamaModel,
                "messages", List.of(
                        Map.of("role", "user", "content", promptContent)
                ),
                "stream", false
        );

        try {
            // Call the corrected Ollama API endpoint
            Map<String, Object> responseRoot = restTemplate.postForObject(fullOllamaUrl, request, Map.class);
            
            // Safely extract the content from the complex JSON response
            // The response structure is { choices: [ { message: { content: "..." } } ] }
            String content = "";
            if (responseRoot != null && responseRoot.containsKey("choices")) {
                List<Map<String, Object>> choices = (List<Map<String, Object>>) responseRoot.get("choices");
                if (!choices.isEmpty()) {
                    Map<String, Object> message = (Map<String, Object>) choices.get(0).get("message");
                    if (message != null && message.containsKey("content")) {
                        content = (String) message.get("content");
                    }
                }
            }

            // Parse the content for <think> and JSON blocks
            return parseMultipleResponses(content);

        } catch (HttpClientErrorException | HttpServerErrorException e) {
            System.err.println("API call failed with status code " + e.getStatusCode() + ": " + e.getResponseBodyAsString());
            return Map.of("error", "Failed to get a response from the AI service. Details: " + e.getMessage());
        } catch (ResourceAccessException e) {
            System.err.println("Network error: Could not connect to the Ollama server. " + e.getMessage());
            return Map.of("error", "Could not connect to the AI service. Please ensure the server is running.");
        } catch (Exception e) {
            System.err.println("An unexpected error occurred: " + e.getMessage());
            return Map.of("error", "An unexpected error occurred during AI response generation.");
        }
    }

    // Helper method to load prompt text from a file
    String loadPromptFromFile(String filename) throws IOException {
        Path path = new ClassPathResource(filename).getFile().toPath();
        return Files.readString(path);
    }

    // Helper method to replace placeholders in a template string
    String putValuesToTemplate(String template, Map<String, String> values) {
        for (Map.Entry<String, String> entry : values.entrySet()) {
            template = template.replace("{{" + entry.getKey() + "}}", entry.getValue());
        }
        return template;
    }

    /**
     * Parses the LLM's raw response to extract <think> content and a JSON block.
     * Uses regex for a more robust parsing approach.
     */
    public static Map<String, Object> parseMultipleResponses(String response) {
        Map<String, Object> jsonResponse = new HashMap<>();

        // Use regex for a more robust approach to find the <think> block
        Pattern thinkPattern = Pattern.compile("<think>(.*?)</think>", Pattern.DOTALL);
        Matcher thinkMatcher = thinkPattern.matcher(response);
        if (thinkMatcher.find()) {
            jsonResponse.put("think", thinkMatcher.group(1).trim());
        } else {
            jsonResponse.put("think", null);
        }

        // Use regex for JSON extraction from the code block
        Pattern jsonPattern = Pattern.compile("```json\\s*(.*?)\\s*```", Pattern.DOTALL);
        Matcher jsonMatcher = jsonPattern.matcher(response);
        if (jsonMatcher.find()) {
            String jsonContent = jsonMatcher.group(1).trim();
            try {
                ObjectMapper objectMapper = new ObjectMapper();
                Map<String, Object> dataContent = objectMapper.readValue(jsonContent, Map.class);
                jsonResponse.put("data", dataContent);
            } catch (Exception e) {
                jsonResponse.put("data", null);
                System.err.println("Invalid JSON format in the response: " + e.getMessage());
            }
        } else {
            jsonResponse.put("data", null);
        }

        return jsonResponse;
    }
}
