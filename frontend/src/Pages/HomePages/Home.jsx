import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Home.css';
import FirstPage from '../First-page/First-page.jsx';
import VideoSection from '../Video-Section/Video-Section.jsx';
import Second from '../Second/Second.jsx';
import Footer from '../Footer/Footer.jsx';
import Cards from '../card/Cards.jsx';
import { Link } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  const openChatbot = () => {
    navigate('/chatbot'); // Navigate to Chatbot.jsx
  };

  return (
    <div className="whole">
      <div className="home-container">
        <div className="content fade-in">
          <h1 className="animated-heading">
            Feel Great.<br />
            Body and Mind.
          </h1>
          <div className="details slide-up">
            <div className="name">
              <span>FDPlus</span>
              <div className="free-days">Free Days</div>
            </div>
            <div className="timer">
              <div>
                <span>0</span>
                <span>DAYS</span>
              </div>
              <div>
                <span>20</span>
                <span>HOURS</span>
              </div>
            </div>
          </div>
          <p className="fade-in">
            Now through January 1st 12:00 AM Pacific, free memberships have
            access to everything FD Plus has to offer. Now through January 1st 12:00 AM Pacific, free memberships have
            access to everything FD Plus has to offer. Now through January 1st 12:00 AM Pacific, free memberships have
            access to everything FD Plus has to offer. Now through January 1st 12:00 AM Pacific, free memberships have
            access to everything FD Plus has to offer.
          </p>
          <button className="join-now pulse">
            <Link to='/membership'>Join Now</Link>
          </button>
          <button className="join-now pulse" onClick={openChatbot}>
            Open Chatbot
          </button>
        </div>

        <div className="image-section">
          <div className="circle-images">
            <img src="home-1.png" alt="Person 1" className="zoom-in" />
            <img src="home-1.png" alt="Person 2" className="zoom-in" />
            <img src="home-1.png" alt="Person 3" className="zoom-in" />
            <img src="home-1.png" alt="Person 4" className="zoom-in" />
            <img src="home-1.png" alt="Person 5" className="zoom-in" />
            <img src="home-1.png" alt="Person 6" className="zoom-in" />
          </div>
        </div>
      </div>

      {/* Add the imported components here */}
      <FirstPage />
      <Cards />
      <VideoSection />
      <Second />
      <Footer />
    </div>
  );
};

export default Home;
