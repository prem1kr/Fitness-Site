// Routines.jsx
import React from 'react';
import './Routines.css';

const routines = [
  {
    id: 1,
    title: 'Morning Routine',
    description: 'A perfect way to start your day with light stretches and cardio.',
    duration: '30 minutes',
  },
  {
    id: 2,
    title: 'Strength Training',
    description: 'A high-intensity workout focusing on strength building.',
    duration: '60 minutes',
  },
  {
    id: 3,
    title: 'Yoga Routine',
    description: 'A calming routine to improve flexibility and relieve stress.',
    duration: '45 minutes',
  },
];

const Routines = () => {
  return (
    <div className="routines-container">
      <h1 className="routines-header">Workout Routines</h1>
      <div className="routines-list">
        {routines.map((routine) => (
          <div className="routine-card" key={routine.id}>
            <h2 className="routine-title">{routine.title}</h2>
            <p className="routine-description">{routine.description}</p>
            <p className="routine-duration">Duration: {routine.duration}</p>
            <button className="routine-button">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Routines;
