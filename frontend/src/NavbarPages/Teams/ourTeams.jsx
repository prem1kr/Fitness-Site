
import React from "react";
import "./ourTeams.css";

const OutTeams = () => {
  const teams = [
    { name: "Development", description: "Build and maintain our core products." },
    { name: "Marketing", description: "Spread the word about our mission and goals." },
    { name: "Customer Support", description: "Help our customers succeed with our services." },
  ];

  return (
    <div className="teams-page">
      <h1 className="teams-title">Meet Our Teams</h1>
      <div className="teams-container">
        {teams.map((team, index) => (
          <div key={index} className="team-card">
            <h2 className="team-name">{team.name}</h2>
            <p className="team-description">{team.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutTeams;
