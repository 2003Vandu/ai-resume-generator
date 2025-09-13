import axios from "axios";

export const baseURL = "http://localhost:8080";

export const axiosInstance = axios.create({
  baseURL: baseURL,
});

export const generateResueme = async (description) => {
  const response = await axiosInstance.post("/api/v1/resume/generate", {
    userDescription: description,
  });

  return response.data;
};
