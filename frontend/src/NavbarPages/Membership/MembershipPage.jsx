import React from 'react';
import './MembershipPage.css'; // Import the CSS file

function MembershipPage() {
  return (
    <div className="container">
      <h1>Subscription</h1>
      

      <div className="plans">
        <div className="plan">
          <h2>30 Days</h2>
          <h3>$4</h3>
          <p>Enjoy the full 2 months of subscription for full length. At no additional cost.</p>
          <button className="book-now-button">Book Now</button>
        </div>

        <div className="plan">
          <h2>60 Days</h2>
          <h3>$9</h3>
          <p>Enjoy the full 2 months of subscription for full length. At no additional cost.</p>
          <button className="book-now-button">Book Now</button>
        </div>

        <div className="plan">
          <h2>90 Days</h2>
          <h3>$12</h3>
          <p>Enjoy the full 2 months of subscription for full length. At no additional cost.</p>
          <button className="book-now-button">Book Now</button>
        </div>

        <div className="plan">
          <h2>120 Days</h2>
          <h3>$18</h3>
          <p>Enjoy the full 2 months of subscription for full length. At no additional cost.</p>
          <button className="book-now-button">Book Now</button>
        </div>
      </div>

      <div className="testimonials">
        <h2>10.00 developers can't be wrong!</h2>
        <div className="developer-avatars">
          <img src="home-1.png" alt="Developer 1" />
          <img src="home-1.png" alt="Developer 2" />
          <img src="home-1.png" alt="Developer 3" />
          <img src="home-1.png" alt="Developer 4" />
          <img src="home-1.png" alt="Developer 5" />
          <img src="home-1.png" alt="Developer 6" />
          <img src="home-1.png" alt="Developer 7" />
          <img src="home-1.png" alt="Developer 8" />
          <img src="home-1.png" alt="Developer 9" />
          <img src="home-1.png" alt="Developer 10" />
        </div>
        <p>"We love what we do for a living, and we love hearing feedback about it. There is nothing better than standing back looking at a completed pool with our customer, admiring the end result."</p>
        <p>- John Doe</p>
      </div>
    </div>
  );
}

export default MembershipPage;
