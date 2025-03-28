import axios from "axios";

// Create an Axios instance
const API = axios.create({
  baseURL: "https://nobel-techie-server.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to set the Authorization token
export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};

// Function to handle login
export const loginUser = async (email, password) => {
  try {
    const response = await API.post("/api/auth/login", { email, password });
    return response.data; // Return response data (e.g., token)
  } catch (error) {
    throw error.response?.data?.message || "Login failed"; // Throw error message
  }
};

export default API;
