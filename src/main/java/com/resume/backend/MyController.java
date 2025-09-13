package com.resume.backend;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@Controller
@CrossOrigin(origins = "http://localhost:5173")
public class MyController {

    private final ChatClient chatClient;

    public MyController(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }

    @GetMapping("/")
    @ResponseBody
    public String home() {
        return "Server Running....."
        		+ "ollama Deepseek run locally to get "+"Response......";
        
    }
    
    @PostMapping("/generate-resume")
    @ResponseBody
    public String generateResume(@RequestBody ResumeRequest request) {

        String prompt = "Generate a professional resume summary based on the following description: " + request.userDescription();

        return chatClient.prompt()
                .user(prompt)
                .call()
                .content();
    }
}