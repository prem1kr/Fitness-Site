import React, { useState, useRef, useEffect } from 'react';
import './Video-Section.css';

const videos = [
  { title: 'First Slide', src: "https://videos.pexels.com/video-files/3196220/3196220-uhd_2560_1440_25fps.mp4", thumbnail: 'https://images.pexels.com/videos/3196220/free-video-3196220.jpg?auto=compress&cs=tinysrgb&w=800', description: 'Placeholder content for the first slide.' },
  { title: 'Second Slide', src: "https://videos.pexels.com/video-files/3125907/3125907-sd_640_360_25fps.mp4", thumbnail: 'https://images.pexels.com/videos/3125907/free-video-3125907.jpg?auto=compress&cs=tinysrgb&w=800', description: 'Placeholder content for the second slide.' },
  { title: 'Third Slide', src: "https://videos.pexels.com/video-files/3327806/3327806-sd_640_360_24fps.mp4", thumbnail: 'https://images.pexels.com/videos/3327806/free-video-3327806.jpg?auto=compress&cs=tinysrgb&w=800', description: 'Placeholder content for the third slide.' },
  { title: 'Fourth Slide', src: "https://videos.pexels.com/video-files/3195943/3195943-sd_640_360_25fps.mp4", thumbnail: 'https://images.pexels.com/videos/3195943/free-video-3195943.jpg?auto=compress&cs=tinysrgb&w=800', description: 'Placeholder content for the fourth slide.' },
  { title: 'Fifth Slide', src: "https://videos.pexels.com/video-files/3126123/3126123-sd_640_360_25fps.mp4", thumbnail: 'https://images.pexels.com/videos/3126123/free-video-3126123.jpg?auto=compress&cs=tinysrgb&w=800', description: 'Placeholder content for the fifth slide.' },
  { title: 'Sixth Slide', src: "https://videos.pexels.com/video-files/3196220/3196220-uhd_2560_1440_25fps.mp4", thumbnail: 'https://images.pexels.com/videos/5319099/pexels-photo-5319099.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Placeholder content for the sixth slide.' },
  { title: 'Seventh Slide', src: "https://videos.pexels.com/video-files/3191898/3191898-sd_640_360_25fps.mp4", thumbnail: 'https://images.pexels.com/videos/3191898/free-video-3191898.jpg?auto=compress&cs=tinysrgb&w=800', description: 'Placeholder content for the seventh slide.' },
  { title: 'Eighth Slide', src: "https://videos.pexels.com/video-files/4110015/4110015-sd_640_360_25fps.mp4", thumbnail: 'https://images.pexels.com/videos/4110015/pexels-photo-4110015.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Placeholder content for the eighth slide.' },
  { title: 'Ninth Slide', src: "https://videos.pexels.com/video-files/4761763/4761763-sd_960_506_25fps.mp4", thumbnail: 'https://images.pexels.com/videos/4761763/pexels-photo-4761763.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Placeholder content for the ninth slide.' },
];

const VideoSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoListRef = useRef();

  useEffect(() => {
    const videoList = videoListRef.current;
    videoList.addEventListener('scroll', handleScroll);

    return () => {
      videoList.removeEventListener('scroll', handleScroll);
    };
  }, [activeIndex]);

  const handleScroll = () => {
    const videoItems = videoListRef.current.children;
    const carouselCenter = videoListRef.current.offsetWidth / 2;

    let newActiveIndex = activeIndex;

    for (let i = 0; i < videoItems.length; i++) {
      const rect = videoItems[i].getBoundingClientRect();
      const videoCenter = rect.left + rect.width / 2;

      if (Math.abs(carouselCenter - videoCenter) < rect.width / 2) {
        newActiveIndex = i;
        break;
      }
    }

    setActiveIndex(newActiveIndex);

    Array.from(videoItems).forEach((item, index) => {
      const video = item.querySelector('video');
      if (index === newActiveIndex) {
        video.play();
      } else {
        video.pause();
      }
    });
  };

  const scrollToVideo = (index) => {
    const videoItems = videoListRef.current.children;
    if (videoItems[index]) {
      videoListRef.current.scrollTo({
        left: videoItems[index].offsetLeft,
        behavior: 'smooth',
      });
    }
  };

  const handlePrevClick = () => {
    const newIndex = activeIndex === 0 ? videos.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
    scrollToVideo(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = activeIndex === videos.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
    scrollToVideo(newIndex);
  };

  return (
    <div className="Main">
      <div className="video-section">
        <h1>STRENGTH, CARDIO, YOGA, HIIT, DANCE AND MORE</h1>
        <p>Exercise for every mood, every fitness level, and every goal.</p>
        <br />

        <div className="video-gallery">
          <button className="scroll-button left" onClick={handlePrevClick}>
            &lt;
          </button>

          <div className="video-list" ref={videoListRef}>
            {videos.map((video, index) => (
              <div key={index} className={`video-item ${activeIndex === index ? 'active' : ''}`}>
                {activeIndex === index ? (
                  <video muted loop autoPlay>
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={video.thumbnail} alt={video.title} className="thumbnail" />
                )}
                <div className="video-caption">
                  <h5>{video.title}</h5>
                  <p>{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="scroll-button right" onClick={handleNextClick}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
