import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Pizza } from 'lucide-react';
import './LoginPage.css';
import LoginForm from './LoginForm';
import SocialLoginButtons from './SocialLoginButtons';
import loginBg from "../assets/login-bg.jpg";

const LoginPage = () => {
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
              <h1 className="welcome-title">Welcome Back</h1>
              <p className="welcome-subtitle">
                Sign in to discover the best food spots around VIT campus
              </p>
            </div>
            
            {/* Login Form */}
            <LoginForm />
            
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
            <h2>Find Your Perfect Meal</h2>
            <p>Join thousands of VIT students discovering amazing food experiences</p>
            <div className="feature-highlights">
              <div className="highlight">Authentic student reviews</div>
              <div className="highlight">Easy campus navigation</div>
              <div className="highlight">Budget-friendly options</div>
            </div>
          </div>
          <img src={loginBg} alt="Delicious Food" className="login-bg-image" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;