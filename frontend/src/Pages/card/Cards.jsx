import React from 'react';
import './Cards.css';
import { Link } from "react-router-dom";

const cardData = [
  {
    title: 'Join a Free Challenge',
    image: 'freechalanges-Photoroom.png',
    description: 'Fitness Dot\'s Free 2 Week Challenge',
    details: 'Strength Training, Cardio, and Mobility Workouts for a Strong Body and Mind',
    duration: '31 Min/Day | 2 Weeks',
    price: 'Free',
    buttonText: 'Available with a Free Membership',
  },
  {
    title: 'Start With The Basics',
    image: '5days chalanges-Photoroom.png',
    description: '5 Day Challenge Trainer Series: Essentials with Erica',
    details: 'Beginner-Friendly Total Body Strength Training with Cardio',
    duration: '35 Min/Day | 1 Week',
    price: '$5.99',
    buttonText: 'Available with FD Plus as low as:',
  },
  {
    title: 'Get Stronger',
    image: '5days chalanges1-Photoroom.png',
    description: '5 Day Challenge Trainer Series: Level Up with Tasha',
    details: 'Time Under Tension Strength with Cardio for Muscle Growth',
    duration: '42 Min/Day | 1 Week',
    price: '$9.99',
    buttonText: 'Available with FD Plus as low as:',
  },
  {
    title: 'Commit to 4 Weeks',
    image: 'home-2.png',
    description: 'FD Fit Round 4: Strength, HIIT, Cardio, & Mobility',
    details: 'Intense, Lengthy Workouts: Our Most Challenging Program Yet!',
    duration: '48 Min/Day | 4 Weeks',
    price: '$17.99',
    buttonText: 'Available with FD Plus as low as:',
  },
];

const Cards = () => {
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <img className='image' src={card.image} alt={card.title} />
          <div className="card-content">
            <h3>{card.title}</h3>
            <h5>{card.description}</h5>
            <h5 className="details">{card.details}</h5>
            <h5 className="duration">{card.duration}</h5>
            <div className="price-container">
              <h5 className="price">{card.price}</h5>
              <button className="add-to-bag">
                <Link to='/membership'>{card.buttonText}</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;