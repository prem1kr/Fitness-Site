import React, { useState } from "react";
import "./MealsPlans.css";

const MealsPlans = () => {
  const programs = {
    option1: [
      {
        title: "FBStore Plus Passes",
        description: "Passes give you full access to everything FB Plus has to offer, without a long-term subscription.",
        buttonText: "Learn More",
      },
      {
        title: "What to Eat While Strength Training",
        description: "Recipes to refuel and recover after strength workouts.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "Strength Building Meal Plan",
        description: "1 Week of High Protein Omnivore Recipes.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "Meals Under 30 Minutes",
        description: "1-Week Omnivore Meal Plan for Busy People.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "Around the World Meal Plan",
        description: "1-Week Omnivore Meal Plan.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "FB Meal Plan",
        description: "Eat Real Food & Feel Great.",
        duration: "4 Weeks",
        price: "$14.39",
      },
      {
        title: "FBStore Plus Passes",
        description: "Passes give you full access to everything FB Plus has to offer, without a long-term subscription.",
        buttonText: "Learn More",
      },
      {
        title: "What to Eat While Strength Training",
        description: "Recipes to refuel and recover after strength workouts.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "Strength Building Meal Plan",
        description: "1 Week of High Protein Omnivore Recipes.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "Meals Under 30 Minutes",
        description: "1-Week Omnivore Meal Plan for Busy People.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "Around the World Meal Plan",
        description: "1-Week Omnivore Meal Plan.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "FB Meal Plan",
        description: "Eat Real Food & Feel Great.",
        duration: "4 Weeks",
        price: "$14.39",
      },

      {
        title: "FBStore Plus Passes",
        description: "Passes give you full access to everything FB Plus has to offer, without a long-term subscription.",
        buttonText: "Learn More",
      },
      {
        title: "What to Eat While Strength Training",
        description: "Recipes to refuel and recover after strength workouts.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "Strength Building Meal Plan",
        description: "1 Week of High Protein Omnivore Recipes.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "Meals Under 30 Minutes",
        description: "1-Week Omnivore Meal Plan for Busy People.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "Around the World Meal Plan",
        description: "1-Week Omnivore Meal Plan.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "FB Meal Plan",
        description: "Eat Real Food & Feel Great.",
        duration: "4 Weeks",
        price: "$14.39",
      },
    ],

    option2: [
      {
        title: "FBStore Plus Passes",
        description: "Passes give you full access to everything FB Plus has to offer, without a long-term subscription.",
        buttonText: "Learn More",
      },
      {
        title: "What to Eat While Strength Training",
        description: "Recipes to refuel and recover after strength workouts.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "Strength Building Meal Plan",
        description: "1 Week of High Protein Omnivore Recipes.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "Meals Under 30 Minutes",
        description: "1-Week Omnivore Meal Plan for Busy People.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "Around the World Meal Plan",
        description: "1-Week Omnivore Meal Plan.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "FB Meal Plan",
        description: "Eat Real Food & Feel Great.",
        duration: "4 Weeks",
        price: "$14.39",
      },
    ],

    option3: [
      {
        title: "FBStore Plus Passes",
        description: "Passes give you full access to everything FB Plus has to offer, without a long-term subscription.",
        buttonText: "Learn More",
      },
      {
        title: "What to Eat While Strength Training",
        description: "Recipes to refuel and recover after strength workouts.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "Strength Building Meal Plan",
        description: "1 Week of High Protein Omnivore Recipes.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "Meals Under 30 Minutes",
        description: "1-Week Omnivore Meal Plan for Busy People.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "Around the World Meal Plan",
        description: "1-Week Omnivore Meal Plan.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "FB Meal Plan",
        description: "Eat Real Food & Feel Great.",
        duration: "4 Weeks",
        price: "$14.39",
      },
    ],

    option4: [
      {
        title: "FBStore Plus Passes",
        description: "Passes give you full access to everything FB Plus has to offer, without a long-term subscription.",
        buttonText: "Learn More",
      },
      {
        title: "What to Eat While Strength Training",
        description: "Recipes to refuel and recover after strength workouts.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "Strength Building Meal Plan",
        description: "1 Week of High Protein Omnivore Recipes.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "Meals Under 30 Minutes",
        description: "1-Week Omnivore Meal Plan for Busy People.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "Around the World Meal Plan",
        description: "1-Week Omnivore Meal Plan.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "FB Meal Plan",
        description: "Eat Real Food & Feel Great.",
        duration: "4 Weeks",
        price: "$14.39",
      },
    ],

    option5: [
      {
        title: "FBStore Plus Passes",
        description: "Passes give you full access to everything FB Plus has to offer, without a long-term subscription.",
        buttonText: "Learn More",
      },
      {
        title: "What to Eat While Strength Training",
        description: "Recipes to refuel and recover after strength workouts.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "Strength Building Meal Plan",
        description: "1 Week of High Protein Omnivore Recipes.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "Meals Under 30 Minutes",
        description: "1-Week Omnivore Meal Plan for Busy People.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "Around the World Meal Plan",
        description: "1-Week Omnivore Meal Plan.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "FB Meal Plan",
        description: "Eat Real Food & Feel Great.",
        duration: "4 Weeks",
        price: "$14.39",
      },
    ],

    option6: [
      {
        title: "FBStore Plus Passes",
        description: "Passes give you full access to everything FB Plus has to offer, without a long-term subscription.",
        buttonText: "Learn More",
      },
      {
        title: "What to Eat While Strength Training",
        description: "Recipes to refuel and recover after strength workouts.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "Strength Building Meal Plan",
        description: "1 Week of High Protein Omnivore Recipes.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "Meals Under 30 Minutes",
        description: "1-Week Omnivore Meal Plan for Busy People.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "Around the World Meal Plan",
        description: "1-Week Omnivore Meal Plan.",
        duration: "1 Week",
        price: "$4.79",
      },
      {
        title: "FB Meal Plan",
        description: "Eat Real Food & Feel Great.",
        duration: "4 Weeks",
        price: "$14.39",
      },
    ],
  };

  const [selectedOption, setSelectedOption] = useState("option1");

  const handleClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="meals-plans">
      <header className="program-header">
        <h1>Meal Plans</h1>
      </header>
      <div className="program-content">
        <aside className="sidebar">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
          <div className="filter-section">
            <h3>Expand All Filters</h3>
            <ul>
              <div onClick={() => handleClick("option1")} className="sidebar-item">
                Body Focus
              </div>
              <div onClick={() => handleClick("option2")} className="sidebar-item">
                Training Type
              </div>
              <div onClick={() => handleClick("option3")} className="sidebar-item">
                Equipment
              </div>
              <div onClick={() => handleClick("option4")} className="sidebar-item">
                Specialty Programs
              </div>
              <div onClick={() => handleClick("option5")} className="sidebar-item">
                Program Creators
              </div>
              <div onClick={() => handleClick("option6")} className="sidebar-item">
                Workout Program Options
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
              {program.duration && (
                <div className="program-info">
                  <span>{program.duration}</span>
                </div>
              )}
              {program.price && (
                <div className="program-pricing">
                  <span className="price">{program.price}</span>
                </div>
              )}
              {program.buttonText && (
                <button className="learn-more-btn">{program.buttonText}</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealsPlans;
