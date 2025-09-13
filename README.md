# Ai--Resume-Generator
AI Resume Generator

An AI-powered resume generator built with React (frontend) and Spring Boot (backend) that integrates with a locally running AI service (DeepSeekr1 via Ollama) to generate resume content dynamically.

⚠️ Note: The live hosted version may not work fully due to local AI dependencies. API fetching and resume generation currently require the backend and AI service to run locally.

 Features (Working Locally)

> User-friendly interface using DaisyUI components.

> Generates AI-powered resume content (backend + local AI).

> Tested API using Postman.

Tech Stack

> Frontend: React, DaisyUI

> Backend: Spring Boot (Java)

> AI Service: DeepSeekr1 (locally via Ollama)

> API Testing: Postman

                                    Local Setup (Recommended for Full Functionality)

1: Clone the repository:

git clone <your-repo-url>


2: **Frontend Setup:**

cd frontend
npm install
npm start


3: **Backend Setup:**

cd backend
./mvnw clean install
./mvnw spring-boot:run


4: **AI Service:**

Ensure DeepSeekr1 is running locally via Ollama.

Backend requests rely on this local AI service to generate resume content.
Usage

**USAGE**
1: Open the frontend in your browser (http://localhost:3000).

2: Enter your details (name, education, skills, experience, etc.).

3: Click Generate Resume.

Resume content is fetched from the AI service (locally).

❗ Hosted version limitations: The live website does not currently fetch AI-generated content because the AI service runs locally. The project can be demonstrated locally or via Postman API calls.

**API Endpoint (Tested in Postman)**

POST /api/generate-resume – Sends user data to DeepSeekr1 and returns AI-generated resume content.
**Screenshots / Demo**
Front End LocalHost
<img width="1920" height="1080" alt="Screenshot (191)" src="https://github.com/user-attachments/assets/895bdfae-9971-4770-be07-f80578cc57f2" />
<img width="1920" height="1080" alt="Screenshot (194)" src="https://github.com/user-attachments/assets/a14b3990-1d2c-4647-a09d-5bfdb5f9e0d9" />
<img width="1920" height="1080" alt="Screenshot (193)" src="https://github.com/user-attachments/assets/b987dd95-c796-4f42-b77b-92a20b76996f" />
<img width="1920" height="1080" alt="Screenshot (192)" src="https://github.com/user-attachments/assets/34b37a41-280d-46c4-9cc0-d734a3e033cd" />
**Backend**
<img width="1920" height="1080" alt="Screenshot (196)" src="https://github.com/user-attachments/assets/1e5ff2ba-9475-4d4c-90d7-d68f76dbcb80" />
<img width="1920" height="1080" alt="Screenshot (195)" src="https://github.com/user-attachments/assets/a5e3c8f8-7e86-4f55-8551-e4f46fd56d5c" />
**Tested in Postman**
<img width="1920" height="1080" alt="Screenshot (185)" src="https://github.com/user-attachments/assets/bbea5145-620f-4c80-8260-01d05d556834" />



