import { apiClient } from "../../../shared/services/api-client";

export const registerApiCall = async (formData) => {
  try {
    const response = await apiClient.post("/register", formData);
    return response;
  } catch (err) {
    console.log("Register api call", err);
    throw err;
  }
};
export const loginApiCall = async (formData) => {
  try {
    const response = await apiClient.post("/login", formData);
    return response;
  } catch (err) {
    console.log("Login api call", err);
    throw err;
  }
};
