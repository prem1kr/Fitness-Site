import React from "react";
import "./WorkoutVideos.css";

const WorkoutVideos = () => {
  const videos = [
    {
      title: "Total Body Strength Superset Workout",
      description: "Fun, Sweaty Strength Training",
      image: "workout1.webp",
      duration: "38 Min",
      category: "Total Body",
      tag: "Plus",
    },
    {
      title: "Power Yoga Posture Work-Up: Tripod Headstand",
      description: "Expand Your Inversion Practice",
      image: "workout2.webp",
      duration: "37 Min",
      category: "Core",
      tag: "Plus",
    },
    {
      title: "Lower Body Tri-Sets",
      description: "Foundational Exercises with a Spin",
      image: "workout3.webp",
      duration: "37 Min",
      category: "Lower Body",
      tag: "Plus",
    },
    {
      title: "Bodyweight HIIT and Cardio",
      description: "Progressive Intensity Circuits",
      image: "workout4.webp",
      duration: "28 Min",
      category: "Total Body",
      tag: "Free",
    },
    {
      title: "Breath-Centered Standing Yoga",
      description: "Poses to Elevate and Align the Full Body",
      image: "workout5.webp",
      duration: "33 Min",
      category: "Total Body",
      tag: "Plus",
    },
    {
      title: "Balanced Total Body for Days",
      description: "Energizing Cardio, Strength, and Mobility",
      image: "workout6.webp",
      duration: "30 Min",
      category: "Total Body",
      tag: "Plus",
    },
    {
      title: "Sweaty HIIT for Cardio Conditioning",
      description: "Stress-Relieving Bodyweight Circuit",
      image: "workout7.webp",
      duration: "29 Min",
      category: "Total Body",
      tag: "Plus",
    },
    {
      title: "30-Minute Low Impact Strength and Stability Circuit",
      description: "Workout for All Levels",
      image: "workout8.webp",
      duration: "30 Min",
      category: "Total Body",
      tag: "Plus",
    },
  ];

  return (
    <div className="workout-videos">
      <header className="workout-header">
        <h1>Workout Videos</h1>
        <div className="workout-filters">
          {/* Add filter functionality here */}
        </div>
      </header>
      <div className="video-grid">
        {videos.map((video, index) => (
          <div className="video-card" key={index}>
            <div className="video-thumbnail">
              <img src={video.image} alt={video.title} />
              <div className="video-tag">{video.tag}</div>
            </div>
            <h3 className="video-title">{video.title}</h3>
            <p className="video-description">{video.description}</p>
            <div className="video-info">
              <span>{video.duration}</span>
              <span> • {video.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutVideos;
