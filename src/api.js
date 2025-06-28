import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


const isDevelopment = import.meta.env.MODE === 'development';

const API = axios.create({
  baseURL: isDevelopment
    ? 'http://localhost:5000/api/auth' // Local backend (proxy target)
    : 'https://nobel-techie-server.onrender.com/api/auth' // Production URL
});


// Function to set the Authorization token
export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("token", token);
  } else {
    delete API.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
  }
};

// Function to handle login
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data; // Return response data (e.g., token)
  } catch (error) {
    throw error.response?.data?.message || "Login failed"; // Throw error message
  }
};

export const logoutUser = async () => {
  try {
    await API.post("/logout");
  } catch (error) {
    console.error("Logout error:", error);
  } finally {
    setAuthToken(null); // Clear token from axios and localStorage
  }
};

export default API;
