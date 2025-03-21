import React from 'react';
import './First-page.css';
import { Link } from "react-router-dom";

const FirstPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="column1">
          <div className="card1">
            <h2>Trainer Series</h2>
            <p>Exercise with your favorite trainer in our new Trainer Series programs..</p>
            <button className='button1'>
              <Link to="/WorkoutProgram">View Series</Link>
            </button>
            <br />
            <img className='Trainer-Series-image' src="trainerseries.png" alt="image" />
            
          </div>
        </div>
        <div className="column2">
          <div className="card2">
            <h2>Earn a Free Plus Membership</h2>
            <p>Share your referral code and every sign up earns rewards to put toward your membership.</p>
            <button className='button2'>
              <Link to='/ReferralProgram'>Learn About Rewards</Link>
            </button>
            <br />
            <img className='App-Qr' src="membership.png" alt="image" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column3">
          <div className="card3">
            <h2>Workout Videos</h2>
            <p>Exercise with certified personal trainers whether you’re at home or on the road.</p>
            <button className='button3'>
              <Link to='/WorkoutVideos'>Find a Workout</Link>
            </button>
            <br />
            <img className='Trainer-Series-image' src="workoutvideos.png" alt="image" />
          </div>
        </div>
        <div className="column4">
          <div className="card4">
            <h2>Supportive Community</h2>
            <p>Stay motivated and engaged with a little help from a supportive community of other members.</p>
            <button className='button4'>
              <Link to='/OurTeam'>View Community</Link>
            </button>
            <br />
            <img className='Community' src="super-Photoroom.png" alt="image" />
          </div>
        </div>
      </div>

      </div>
   
  );
}

export default FirstPage;
