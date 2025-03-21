import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// Utility functions for token management
const setAxiosAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

// Zustand store
export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,
  // Initialize auth from localStorage
  initializeAuth: () => {
    const authData = localStorage.getItem("authData");
    if (authData) {
      try {
        const parsedData = JSON.parse(authData);
        if (parsedData.token) {
          setAxiosAuthToken(parsedData.token);
          set({
            user: parsedData.user,
            isAuthenticated: true,
            isCheckingAuth: false,
          });
        } else {
          throw new Error("Invalid token in authData");
        }
      } catch (error) {
        console.error("Failed to parse authData:", error);
        localStorage.removeItem("authData");
        set({
          user: null,
          isAuthenticated: false,
          isCheckingAuth: false,
        });
      }
    } else {
      set({
        user: null,
        isAuthenticated: false,
        isCheckingAuth: false,
      });
    }
  },

  // Signup functionality
  signup: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        email,
        password,
        name,
      });
      const { user, token } = response.data;
      set({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
      localStorage.setItem(
        "authData",
        JSON.stringify({ user, isAuthenticated: true, token })
      );
      setAxiosAuthToken(token);
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    }
  },

  // Login functionality
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      const { user, token } = response.data;
      set({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
      localStorage.setItem(
        "authData",
        JSON.stringify({ user, isAuthenticated: true, token })
      );
      setAxiosAuthToken(token);
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error logging in",
        isLoading: false,
      });
      throw error;
    }
  },

  // Email verification functionality
  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/verify-email`, { code });
      const { user, token } = response.data;
      set({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
      localStorage.setItem(
        "authData",
        JSON.stringify({ user, isAuthenticated: true, token })
      );
      setAxiosAuthToken(token);
      return response.data;
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error verifying email",
        isLoading: false,
      });
      throw error;
    }
  },

  // Authentication check functionality
  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/check-auth`, { withCredentials: true });

      set({
        user: response.data.user,
        isAuthenticated: true,
        isCheckingAuth: false,
      });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error during authentication check",
        isAuthenticated: false,
        isCheckingAuth: false,
      });
    }
  },

  // Logout functionality
  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await axios.post(`${API_URL}/logout`);
      set({ user: null, isAuthenticated: false, isLoading: false });
      localStorage.removeItem("authData");
      setAxiosAuthToken(null);
    } catch (error) {
      set({
        error: "Error logging out",
        isLoading: false,
      });
      throw error;
    }
  },

  // Forgot Password functionality
  forgotPassword: async (email) => {
    set({ isLoading: true, error: null, message: null });
    try {
      const response = await axios.post(`${API_URL}/forgot-password`, { email });
      set({ message: response.data.message, isLoading: false });
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.message || "Error sending reset password email",
      });
      throw error;
    }
  },

  // Reset Password functionality
  resetPassword: async (token, password) => {
    set({ isLoading: true, error: null });
    try {
      // Ensure the token is part of the URL correctly
      const response = await axios.post(`${API_URL}/reset-password/${token}`, { password });
      set({ message: response.data.message, isLoading: false });
      return true; // Return true on success
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.message || error.message || "Error resetting password",
      });
      return false; // Return false on failure
    }
  },

  
}));
