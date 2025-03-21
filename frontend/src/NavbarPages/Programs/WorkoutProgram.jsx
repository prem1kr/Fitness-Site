import React, { useState } from "react";
import "./WorkoutProgram.css";

const WorkoutProgram = () => {
  const programs = {
    option1: [
      {
        title: "FB Kickstart: 30 Day Team Strength and Cardio Program",
        description: "Five New Progressively Challenging Workouts Each Week",
        duration: "37 Min/Day • 4 Weeks",
        price: "$14.39",
        originalPrice: "$17.99",
        tag: "FB Plus",
      },
      {
        title: "FB Remixed: 2 Weeks of Strength, Cardio, and Mobility",
        description: "3 workouts per week and remixes of 2 of your favorite workouts",
        duration: "27 Min/Day • 2 Weeks",
        price: "$9.59",
        originalPrice: "$11.99",
        tag: "FB Plus",
      },

      {
        title: "10-Day Challenge Trainer Series: Strength and Cardio with Brian",
        description: "Strength training with a twist of cardio",
        duration: "39 Min/Day • 2 Weeks",
        price: "$9.59",
        originalPrice: "$11.99",
        tag: "FB Plus",
      },
      {
        title: "10-Day Challenge Trainer Series: Powerful with Tasha",
        description: "Lifting and power training for improved strength and speed",
        duration: "41 Min/Day • 2 Weeks",
        price: "$9.59",
        originalPrice: "$11.99",
        tag: "FB Plus",
      },

      {
        title: "10-Day Challenge Trainer Series: Strength and Cardio with Brian",
        description: "Strength training with a twist of cardio",
        duration: "39 Min/Day • 2 Weeks",
        price: "$9.59",
        originalPrice: "$11.99",
        tag: "FB Plus",
      },
      {
        title: "10-Day Challenge Trainer Series: Powerful with Tasha",
        description: "Lifting and power training for improved strength and speed",
        duration: "41 Min/Day • 2 Weeks",
        price: "$9.59",
        originalPrice: "$11.99",
        tag: "FB Plus",
      },

      {
        title: "10-Day Challenge Trainer Series: Strength and Cardio with Brian",
        description: "Strength training with a twist of cardio",
        duration: "39 Min/Day • 2 Weeks",
        price: "$9.59",
        originalPrice: "$11.99",
        tag: "FB Plus",
      },
      {
        title: "10-Day Challenge Trainer Series: Powerful with Tasha",
        description: "Lifting and power training for improved strength and speed",
        duration: "41 Min/Day • 2 Weeks",
        price: "$9.59",
        originalPrice: "$11.99",
        tag: "FB Plus",
      },

      {
        title: "10-Day Challenge Trainer Series: Strength and Cardio with Brian",
        description: "Strength training with a twist of cardio",
        duration: "39 Min/Day • 2 Weeks",
        price: "$9.59",
        originalPrice: "$11.99",
        tag: "FB Plus",
      },
      {
        title: "10-Day Challenge Trainer Series: Powerful with Tasha",
        description: "Lifting and power training for improved strength and speed",
        duration: "41 Min/Day • 2 Weeks",
        price: "$9.59",
        originalPrice: "$11.99",
        tag: "FB Plus",
      },
      // Additional programs...
    ],
    option2: [
      {
        title: "10-Day Challenge Trainer Series: Strength and Cardio with Brian",
        description: "Strength training with a twist of cardio",
        duration: "39 Min/Day • 2 Weeks",
        price: "$9.59",
        originalPrice: "$11.99",
        tag: "FB Plus",
      },
      {
        title: "10-Day Challenge Trainer Series: Powerful with Tasha",
        description: "Lifting and power training for improved strength and speed",
        duration: "41 Min/Day • 2 Weeks",
        price: "$9.59",
        originalPrice: "$11.99",
        tag: "FB Plus",
      },

      {
        title: "10-Day Challenge Trainer Series: Strength and Cardio with Brian",
        description: "Strength training with a twist of cardio",
        duration: "39 Min/Day • 2 Weeks",
        price: "$9.59",
        originalPrice: "$11.99",
        tag: "FB Plus",
      },
      {
        title: "10-Day Challenge Trainer Series: Powerful with Tasha",
        description: "Lifting and power training for improved strength and speed",
        duration: "41 Min/Day • 2 Weeks",
        price: "$9.59",
        originalPrice: "$11.99",
        tag: "FB Plus",
      },

      {
        title: "10-Day Challenge Trainer Series: Strength and Cardio with Brian",
        description: "Strength training with a twist of cardio",
        duration: "39 Min/Day • 2 Weeks",
        price: "$9.59",
        originalPrice: "$11.99",
        tag: "FB Plus",
      },
      {
        title: "10-Day Challenge Trainer Series: Powerful with Tasha",
        description: "Lifting and power training for improved strength and speed",
        duration: "41 Min/Day • 2 Weeks",
        price: "$9.59",
        originalPrice: "$11.99",
        tag: "FB Plus",
      },

      {
        title: "10-Day Challenge Trainer Series: Strength and Cardio with Brian",
        description: "Strength training with a twist of cardio",
        duration: "39 Min/Day • 2 Weeks",
        price: "$9.59",
        originalPrice: "$11.99",
        tag: "FB Plus",
      },
      {
        title: "10-Day Challenge Trainer Series: Powerful with Tasha",
        description: "Lifting and power training for improved strength and speed",
        duration: "41 Min/Day • 2 Weeks",
        price: "$9.59",
        originalPrice: "$11.99",
        tag: "FB Plus",
      },

      {
        title: "10-Day Challenge Trainer Series: Strength and Cardio with Brian",
        description: "Strength training with a twist of cardio",
        duration: "39 Min/Day • 2 Weeks",
        price: "$9.59",
        originalPrice: "$11.99",
        tag: "FB Plus",
      },
      {
        title: "10-Day Challenge Trainer Series: Powerful with Tasha",
        description: "Lifting and power training for improved strength and speed",
        duration: "41 Min/Day • 2 Weeks",
        price: "$9.59",
        originalPrice: "$11.99",
        tag: "FB Plus",
      },

      {
        title: "10-Day Challenge Trainer Series: Strength and Cardio with Brian",
        description: "Strength training with a twist of cardio",
        duration: "39 Min/Day • 2 Weeks",
        price: "$9.59",
        originalPrice: "$11.99",
        tag: "FB Plus",
      },
      {
        title: "10-Day Challenge Trainer Series: Powerful with Tasha",
        description: "Lifting and power training for improved strength and speed",
        duration: "41 Min/Day • 2 Weeks",
        price: "$9.59",
        originalPrice: "$11.99",
        tag: "FB Plus",
      },
      // Additional programs...
    ],
  };

  const [selectedOption, setSelectedOption] = useState("option1");

  const handleClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="workout-program">
      <div className="program-content">
        <aside className="sidebar">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
          <div className="filter-section">
            <ul>
              <div onClick={() => handleClick("option1")} className="sidebar-item">
                Option 1
              </div>
              <div onClick={() => handleClick("option2")} className="sidebar-item">
                Option 2
              </div>

              <div onClick={() => handleClick("option3")} className="sidebar-item">
                Option 3
              </div>

              <div onClick={() => handleClick("option4")} className="sidebar-item">
                Option 4
              </div>

              <div onClick={() => handleClick("option5")} className="sidebar-item">
                Option 5
              </div>
            </ul>
          </div>
        </aside>
        <div className="program-grid">
          {programs[selectedOption]?.map((program, index) => (
            <div className="program-card" key={index}>
              <div className="program-thumbnail">
                <div className="program-tag">{program.tag}</div>
              </div>
              <h3 className="program-title">{program.title}</h3>
              <p className="program-description">{program.description}</p>
              <div className="program-info">
                <span>{program.duration}</span>
              </div>
              <div className="program-pricing">
                <span className="price">{program.price}</span>
                <span className="original-price">{program.originalPrice}</span>
              </div>
              <button className="add-to-bag-btn">Add to Bag</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutProgram;
