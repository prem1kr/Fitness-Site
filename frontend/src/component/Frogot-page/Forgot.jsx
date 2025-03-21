import React, { useState } from 'react';
import './Forgot.css';
import { useAuthStore } from '../../store/authStore';

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isLoading, forgotPassword, error, message } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      setIsSubmitted(true);
      console.log('Forgot link sent to:', email);
    } catch (err) {
      console.error("Error sending reset password email:", err);
    }
  };

  return (
    <div className="reset-container">
    


      <div className="reset-form">
        <h2>Forgot Password</h2>
        
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>  
            <p>Enter your email to receive a password reset link.</p>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <button type="submit" className="reset-btn">
              {isLoading ? (
                <div className="loader"></div> // Assuming loader is a spinner or animated text
              ) : (
                "Send Reset Link"
              )}
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p>{message || "A reset link has been sent to your email."}</p>
            {error && <p className="error-message">{error}</p>}
          </div>
        )}
        
      </div>
      
    </div>
    
  );
};

export default Forgot;
