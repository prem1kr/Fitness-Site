import React from 'react';
import './Second.css';

const testimonials = [
  {
    name: 'Jodi U',
    text: 'I am seriously the very best physically AND mentally. With over 1000s to choose from, world class and scientifically proven effective workouts.',
  },
  {
    name: 'Kay W',
    text: 'Absolutely brilliant. Excellent workouts - so many ways to challenge yourself, whatever your ability. Les Mills+ works perfectly and Les Mills is great.',
  },
  {
    name: 'Amy C',
    text: "I don't know why I waited so long to get MILLS+! It is home workouts 1000s of professional trainers at your fingertips. If you need to leave the house you need to leave the house.",
  },
  {
    name: 'Jodi U',
    text: 'I am seriously the very best physically AND mentally. With over 1000s to choose from, world class and scientifically proven effective workouts.',
  },
  {
    name: 'Kay W',
    text: 'Absolutely brilliant. Excellent workouts - so many ways to challenge yourself, whatever your ability. Les Mills+ works perfectly and Les Mills is great.',
  },
  {
    name: 'Amy C',
    text: "I don't know why I waited so long to get MILLS+! It is home workouts 1000s of professional trainers at your fingertips. If you need to leave the house you need to leave the house.",
  },
  {
    name: 'Jodi U',
    text: 'I am seriously the very best physically AND mentally. With over 1000s to choose from, world class and scientifically proven effective workouts.',
  },
  {
    name: 'Kay W',
    text: 'Absolutely brilliant. Excellent workouts - so many ways to challenge yourself, whatever your ability. Les Mills+ works perfectly and Les Mills is great.',
  },
  {
    name: 'Amy C',
    text: "I don't know why I waited so long to get MILLS+! It is home workouts 1000s of professional trainers at your fingertips. If you need to leave the house you need to leave the house.",
  },
];

const Second= () => {
  return (
    <div className="container">
      <h1>JOIN OUR 400,000+ STRONG COMMUNITY</h1>
      <div className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div className={`testimonial ${index === 0 ? 'active' : ''}`} key={index}>
            <div className="stars">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p>{testimonial.text}</p>
            <p className="author">- {testimonial.name}</p>
          </div>
        ))}
      </div>
      <div className="slider-controls">
        <button className="prev">‹</button>
        <div className="dots">
          {testimonials.map((_, index) => (
            <span key={index} className={index === 0 ? 'active' : ''} />
          ))}
        </div>
        <button className="next">›</button>
      </div>
    </div>
  );
};

export default Second;