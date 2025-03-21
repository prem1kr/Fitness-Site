import React, { useState } from 'react';
import './WorkoutCustom.css';

const data = {
  option1: [
    { id: 1, title: 'Biceps', description: 'A workout plan that alternates biceps and triceps exercises with forearm work for 30-40 minutes. Learn how to perform strict curls, close grip bench press, lying tricep extension and more with specific reps, sets and tempo.', image: 'workout1.webp'  },
    { id: 2, title: 'Biceps', description: 'A workout plan that alternates biceps and triceps exercises with forearm work for 30-40 minutes. Learn how to perform strict curls, close grip bench press, lying tricep extension and more with specific reps, sets and tempo..', image: 'workout2.webp' },
    { id: 3, title: 'Biceps', description: 'A workout plan that alternates biceps and triceps exercises with forearm work for 30-40 minutes. Learn how to perform strict curls, close grip bench press, lying tricep extension and more with specific reps, sets and tempo.', image: 'workout3.webp' },
    { id: 4, title: 'Biceps', description: 'A workout plan that alternates biceps and triceps exercises with forearm work for 30-40 minutes. Learn how to perform strict curls, close grip bench press, lying tricep extension and more with specific reps, sets and tempo..', image: 'workout4.webp' },
    { id: 5, title: 'Biceps', description: 'A workout plan that alternates biceps and triceps exercises with forearm work for 30-40 minutes. Learn how to perform strict curls, close grip bench press, lying tricep extension and more with specific reps, sets and tempo.', image: 'workout5.webp' },
    { id: 6, title: 'Biceps', description: 'A workout plan that alternates biceps and triceps exercises with forearm work for 30-40 minutes. Learn how to perform strict curls, close grip bench press, lying tricep extension and more with specific reps, sets and tempo.', image: 'workout6.webp' },
  ],
  option2: [
    { id: 3, title: 'Card 3', description: 'This is card 3 content.', image: 'workout1.webp' },
    { id: 4, title: 'Card 4', description: 'This is card 4 content.', image: 'workout1.webp' },
  ],
  option3: [
    { id: 5, title: 'Card 5', description: 'This is card 5 content.', image: 'workout1.webp' },
    { id: 6, title: 'Card 6', description: 'This is card 6 content.', image: 'workout1.webp' },
  ],
  option4: [
    { id: 7, title: 'Card 7', description: 'This is card 7 content.', image: 'workout1.webp' },
    { id: 8, title: 'Card 8', description: 'This is card 8 content.', image: 'workout1.webp' },
  ],
  option5: [
    { id: 9, title: 'Card 9', description: 'This is card 9 content.', image: 'workout1.webp' },
    { id: 10, title: 'Card 10', description: 'This is card 10 content.', image: 'workout1.webp' },
  ],
};

const WorkoutCustom = () => {
  const [activeContent, setActiveContent] = useState(data.option1);

  const handleClick = (option) => {
    setActiveContent(data[option]);
  };

  return (
    <div className="layout">
      <div className="sidebar">
        <div onClick={() => handleClick('option1')} className="sidebar-item">
        BICEP
        </div>
        <div onClick={() => handleClick('option2')} className="sidebar-item">
          TRICEP
        </div>
        <div onClick={() => handleClick('option3')} className="sidebar-item">
          SHOLDERS
        </div>
        <div onClick={() => handleClick('option4')} className="sidebar-item">
          CHEST
        </div>
        <div onClick={() => handleClick('option5')} className="sidebar-item">
          LEGS
        </div>
        <div onClick={() => handleClick('option6')} className="sidebar-item">
          BACK
        </div>
      </div>

      <div className="content">
        {activeContent.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} className="card-image" />
            <div className='right'>
            <h3>{card.title}</h3>
            <p >{card.description}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutCustom;
