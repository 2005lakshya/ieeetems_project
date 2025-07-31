import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SocialLoginButtons = () => {
  const handleGoogleLogin = () => {
    // Handle Google login logic
    console.log("Google login clicked");
  };

  return (
    <div className="social-buttons">
      <button 
        type="button" 
        className="social-button google-button"
        onClick={handleGoogleLogin}
      >
        <FcGoogle className="social-icon" />
        <span className="social-button-text">Continue with Google</span>
      </button>
    </div>
  );
};

export default SocialLoginButtons;