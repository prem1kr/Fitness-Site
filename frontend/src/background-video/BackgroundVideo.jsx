import React from "react";
import "./BackgroundVideo.css"; // Import CSS

const BackgroundVideo = () => {
  return (
    <div className="video-container2">
      <video autoPlay loop muted playsInline className="background-video2">
        <source src="https://cdn.pixabay.com/video/2021/08/11/84706-590762071_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content1">
      </div>
    </div>
  );
};

export default BackgroundVideo;
