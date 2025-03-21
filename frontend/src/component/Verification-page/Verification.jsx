import React, { useState, useEffect } from 'react';
import './Verification.css';
import { useNavigate } from 'react-router-dom'; // useNavigate for redirection
import { useAuthStore } from '../../store/authStore';




const Verification = () => {
  const [otp, setOtp] = useState(''); // OTP input state
  const [timer, setTimer] = useState(60); // Timer for OTP expiration (in seconds)
  const [isResendEnabled, setIsResendEnabled] = useState(false); // For enabling resend OTP button
  const [showPopup, setShowPopup] = useState(false); // State for showing popup
  const [errorMessage, setErrorMessage] = useState(''); // State for showing error messages
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Destructure necessary values from useAuthStore
  const { isLoading, verifyEmail } = useAuthStore();

  // Timer logic for OTP expiration
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendEnabled(true); // Enable Resend OTP after timer reaches 0
    }
  }, [timer]);

  // Handle OTP input changes, allowing only digits
  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Allow only digits
    if (value.length <= 6) setOtp(value); // Limit to 6 digits
  };

  // Handle OTP form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Verify email using the OTP entered by the user
      await verifyEmail(otp); // Pass OTP directly to verifyEmail
      navigate('/home'); // Redirect to the home page if OTP is correct
    } catch (error) {
      setErrorMessage('Invalid OTP. Please try again.'); // Show error message if OTP is incorrect
      console.log(error);
    }
  };

  // Resend OTP handler
  const handleResendOtp = () => {
    if (isResendEnabled) {
      setTimer(300); // Reset timer to 5 minutes for the new OTP
      setIsResendEnabled(false); // Disable the resend button temporarily
      console.log('OTP Resent!');
      // Add OTP resend logic here, e.g., call API to send new OTP
    }
  };

  // Format the timer (mm:ss)
  const formatTimer = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="verification-container">
      <div className="verification-form">
        <h2>Verify OTP</h2>
        <p>Enter the 6-digit OTP sent to your registered email or phone.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={otp}
            onChange={handleOtpChange}
            maxLength={6}
            placeholder="Enter OTP"
            className="otp-input"
            required
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Show error message */}
          <div className="timer">
            <span>Time Remaining: {formatTimer()}</span>
          </div>
          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? 'Verifying...' : 'Submit'}
          </button>
        </form>
        <div className="resend-section">
          <button
            onClick={handleResendOtp}
            className={`resend-btn ${isResendEnabled ? '' : 'disabled'}`}
            disabled={!isResendEnabled}
          >
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verification;
