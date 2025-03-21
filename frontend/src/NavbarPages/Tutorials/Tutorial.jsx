import React from "react";
import "./Tutorial.css";

const Tutorial = () => {
  const tutorials = [
    { title: "React Basics", duration: "2 hours", description: "Learn the fundamentals of React." },
    { title: "CSS Animations", duration: "1.5 hours", description: "Master animations to make your UI more dynamic." },
    { title: "Node.js for Beginners", duration: "3 hours", description: "Explore server-side development with Node.js." },
  ];

  return (
    <div className="tutorial-page">
      <h1 className="tutorial-title">Explore Tutorials</h1>
      <div className="tutorial-container">
        {tutorials.map((tutorial, index) => (
          <div key={index} className="tutorial-card">
            <h2 className="tutorial-heading">{tutorial.title}</h2>
            <p className="tutorial-duration">Duration: {tutorial.duration}</p>
            <p className="tutorial-description">{tutorial.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorial;
