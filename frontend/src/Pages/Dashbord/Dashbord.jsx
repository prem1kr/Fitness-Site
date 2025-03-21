// src/Pages/Dashboard/Dashboard.jsx

import React from "react";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import "./Dashbord.css";

const Dashboard = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call logout function from the auth store
    navigate("/login"); // Redirect to login page after logging out
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome to your Dashboard</h1>
        <p>Hello, {user ? user.name : "User"}</p>
      </div>
      <div className="dashboard-content">
        <h2>Your Details</h2>
        <div className="user-info">
          <p>Email: {user ? user.email : "Loading..."}</p>
          <p>Status: {user && user.isVerified ? "Verified" : "Not Verified"}</p>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
