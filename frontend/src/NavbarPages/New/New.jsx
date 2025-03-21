import React from "react";
import "./New.css";

const New = () => {
  const news = [
    { headline: "Fitness Trends in 2025", summary: "Explore the latest trends in health and fitness for the new year." },
    { headline: "Nutrition Myths", summary: "Uncover the truth about common nutrition myths." },
    { headline: "Mental Health Awareness", summary: "How to promote mental well-being in your community." },
  ];

  return (
    <div className="news-page">
      <h1 className="news-title">Latest News</h1>
      <div className="news-container">
        {news.map((item, index) => (
          <div key={index} className="news-card">
            <h2 className="news-headline">{item.headline}</h2>
            <p className="news-summary">{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default New;
