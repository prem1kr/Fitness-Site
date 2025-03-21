import React from "react";
import "./PilotPrograms.css";

const PilotPrograms = () => {
  const pilotPrograms = [
    {
      title: "FBStore Plus Passes",
      description: "Passes give you full access to everything FB Plus has to offer, without a long-term subscription.",
      buttonText: "Learn More",
    },
    {
      title: "FB Mental Refresh",
      description: "5-Day Challenge for a Positive Mindset Shift. Simple Techniques for More Gratitude and Self-Compassion.",
      duration: "1 Week",
      price: "$4.79",
    },
    {
      title: "FB Sleep",
      description: "5-Day Wellness Challenge for Better Sleep. Science-backed Strategies and Meditations for Improved Sleep.",
      duration: "1 Week",
      price: "$4.79",
    },
    {
      title: "FB Body Image",
      description: "5-Day Challenge to Boost Body Image. Activities and Resources to Improve Body Image and Self-Compassion.",
      duration: "1 Week",
      price: "$4.79",
    },
    {
      title: "FB Stress Redux",
      description: "2-Week Stress Reduction Challenge. Under 10 min/day.",
      duration: "2 Weeks",
      price: "$9.59",
    },
  ];

  return (
    <div className="pilot-programs-container">
      <div className="header-section">
        <h2>Pilot Programs</h2>
        <div className="filter-controls">
          <p>4 Results</p>
          <button className="sort-button">Newest First</button>
        </div>
      </div>

      <div className="program-cards-container">
        {pilotPrograms.map((program, index) => (
          <div key={index} className="program-card">
            <h3>{program.title}</h3>
            <p>{program.description}</p>
            {program.duration && <p className="duration">{program.duration}</p>}
            {program.price && <p className="price">Available as low as: {program.price}</p>}
            <button className="add-to-bag-btn">Add to Bag</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PilotPrograms;
