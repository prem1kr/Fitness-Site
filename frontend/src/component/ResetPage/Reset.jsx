import React, { useState } from 'react';
import './Reset.css';
import { useNavigate, useParams } from 'react-router-dom';  
import { useAuthStore } from '../../store/authStore';

const Reset = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const navigate = useNavigate(); // useNavigate for redirection
  const { token } = useParams();  // Ensure token is being passed correctly

  console.log("Reset Token:", token);  // Check the token from the URL

  // Assuming useAuthStore provides a resetPassword function and loading state
  const { resetPassword, isLoading, message } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    setError('');
    console.log('Password changed successfully:', newPassword);

    // Attempt to reset the password using the token
    const success = await resetPassword(token, newPassword); // Make sure token is passed

    if (success) {
      // Show the popup after password is successfully changed
      setShowPopup(true);
      navigate("/login"); // Redirect to login after successful password reset
    } else {
      setError('Failed to reset password. Please try again.');
    }
  };

  const handlePopupClose = () => {
    // Redirect to the home page after clicking OK
    setShowPopup(false);
    navigate('/home'); // Replace with the correct route to your home page
  };

  return (
    <div className="forgot-container">
      <div className="forgot-form">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="change-btn" disabled={isLoading}>
            {isLoading ? "Resetting ..." : "Set New Password"}
          </button>
        </form>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Password Changed Successfully</h3>
            <button onClick={handlePopupClose} className="popup-btn">OK</button>
          </div>
        </div>
      )}

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

export default Reset;
