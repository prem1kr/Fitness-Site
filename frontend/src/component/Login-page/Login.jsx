import React, { useState, useRef, useEffect } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

const Login = ({ setNavbarVisible }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useAuthStore();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const errorVideoRef = useRef(null);
  const [showWelcomeVideo, setShowWelcomeVideo] = useState(false);
  const [showErrorVideo, setShowErrorVideo] = useState(false);

  useEffect(() => {
    setNavbarVisible(!(showWelcomeVideo || showErrorVideo)); // Hide navbar when a video is playing
  }, [showWelcomeVideo, showErrorVideo, setNavbarVisible]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setShowErrorVideo(false);

    try {
      await login(email, password); // Attempt login
      setShowWelcomeVideo(true); // Show welcome video on success
    } catch (err) {
      console.error('Login Error:', err);
      setShowErrorVideo(true); // Show error video on failure
    }
  };

  const handleVideoEnd = () => {
    navigate('/home'); // Navigate to home after welcome video ends
  };

  const handleErrorVideoEnd = () => {
    setShowErrorVideo(false); // Hide error video
    setNavbarVisible(true); // Show navbar again
  };

  return (
    <div className="login-container">
      {!showWelcomeVideo && !showErrorVideo && (
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
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
            <div className="forgot-section">
              <Link to="/forgot">Forgot Password?</Link>
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit" className="login-btn" disabled={isLoading}>
              {isLoading ? 'Logging In...' : 'Login'}
            </button>
            <p>
              New user?{' '}
              <Link to="/signup">
                <span>Sign Up</span>
              </Link>
            </p>
          </form>
        </div>
      )}

      <div className="animated-background">
        <div className='background'>
        {/* Background Video */}
        {!showWelcomeVideo && !showErrorVideo && (
          <video
            className="background-video"
            loop
            autoPlay
            muted
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              objectFit: 'cover',
              zIndex: 1,
            }}
            src="https://cdn.pixabay.com/video/2024/07/08/220150_large.mp4"

          >
            
            Your browser does not support the video tag.
          </video>
        )}
        </div>

        {/* Welcome Video */}
        {showWelcomeVideo && (
          <video
            ref={videoRef}
            src="/welcome.mp4"
            type="video/mp4"
            autoPlay
            muted
            onEnded={handleVideoEnd}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              objectFit: 'cover',
              zIndex: 1,
            }}
          />
        )}

        {/* Error Video */}
        {showErrorVideo && (
          <video
            ref={errorVideoRef}
            src="/error.mp4"
            type="video/mp4"
            autoPlay
            muted
            onEnded={handleErrorVideoEnd}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              objectFit: 'cover',
              zIndex: 1,
            }}
          />
          
        )}
        
      </div>
    </div>
  );
};

export default Login;
