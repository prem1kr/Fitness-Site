import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            We provide strength, cardio, yoga, HIIT, dance, and more. Exercises
            for every mood, every fitness level, and every goal.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#programs">Programs</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Fitness Street, Wellness City</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
        <p>
          Follow us:
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
          |
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            Twitter
          </a>
          |
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
