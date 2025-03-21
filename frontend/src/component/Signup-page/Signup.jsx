import React, { useState } from 'react'; 
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

const Signup = () => {
  const [name, setName] = useState(''); // State for the full name
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State for error messages
  const navigate = useNavigate(); // useNavigate for programmatic navigation
  const { signup } = useAuthStore();

  const handleSignup = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      // Call the signup function from the store
      await signup(email, password, name);
      navigate("/verification"); // Redirect to verification page
    } catch (error) {
      console.log(error);

      // Check for specific errors from the server
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message;

        // Handle "User already exists" error
        if (errorMessage === 'User already exists') {
          setError('User already exists. Please use a different email or login.');
        } else {
          setError(errorMessage || 'An error occurred while signing up');
        }
      } else {
        setError('An error occurred while signing up. Please try again later.');
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Display error message if any */}
          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        <div className="login-link">
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
      <div className="animated-background">
      <div className="video-container">
  <video
    tabIndex="-1"
    role="application"
    id="vjs_video_3_html5_api"
    className="vjs-tech"
    loop
    autoPlay
    muted
    playsInline
  >
    <source className='videos'
      src="https://cdn.pixabay.com/video/2024/07/08/220150_large.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</div>


      </div>
    </div>
  );
};

export default Signup;
