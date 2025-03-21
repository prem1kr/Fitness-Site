import React from "react";
import "./Carrer.css";

const Career = () => {
  const opportunities = [
    { role: "Software Engineer", location: "San Francisco, CA", description: "Build and optimize cutting-edge software solutions." },
    { role: "UX Designer", location: "Remote", description: "Design intuitive and engaging user interfaces." },
    { role: "Product Manager", location: "New York, NY", description: "Lead product development from concept to launch." },
  ];

  return (
    <div className="career-page">
      <h1 className="career-title">Join Our Team</h1>
      <div className="opportunities-container">
        {opportunities.map((opportunity, index) => (
          <div key={index} className="opportunity-card">
            <h2 className="role-title">{opportunity.role}</h2>
            <p className="role-location">{opportunity.location}</p>
            <p className="role-description">{opportunity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
