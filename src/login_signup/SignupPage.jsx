import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Pizza } from 'lucide-react';
import './LoginPage.css';
import SignupForm from './SignupForm';
import SocialLoginButtons from './SocialLoginButtons';
import loginBg from "../assets/login-bg.jpg";

const SignupPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="modern-login-container">
      <button className="back-button" onClick={goBack}>
        <ArrowLeft size={20} />
        <span>Home</span>
      </button>

      <div className="login-layout">
        {/* Left Side - Form */}
        <div className="login-form-section">
          <div className="login-content">
            {/* Welcome Text */}
            <div className="welcome-section">
              <h1 className="welcome-title">Join VIT FoodFinder</h1>
              <p className="welcome-subtitle">
                Create your account and start discovering amazing food around campus
              </p>
            </div>
            
            {/* Signup Form */}
            <SignupForm />
            
            {/* Divider */}
            <div className="login-divider">
              <span className="divider-line"></span>
              <span className="divider-text">Or continue with</span>
              <span className="divider-line"></span>
            </div>
            
            {/* Social Login */}
            <SocialLoginButtons />
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="login-image-section">
          <div className="image-overlay">
            <h2>Start Your Food Journey</h2>
            <p>Join thousands of VIT students sharing their favorite food discoveries</p>
            <div className="feature-highlights">
              <div className="highlight">🍕 Discover new restaurants</div>
              <div className="highlight">⭐ Share honest reviews</div>
              <div className="highlight">👥 Connect with food lovers</div>
            </div>
          </div>
          <img src={loginBg} alt="Delicious Food" className="login-bg-image" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;