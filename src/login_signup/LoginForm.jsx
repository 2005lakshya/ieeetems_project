import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", formData);
  };

  return (
    <form className="modern-login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Email Address</label>
        <div className="input-wrapper">
          <Mail size={18} className="input-icon" />
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address" 
            className="form-input" 
            required
          />
        </div>
      </div>
      
      <div className="form-group">
        <label className="form-label">Password</label>
        <div className="input-wrapper">
          <Lock size={18} className="input-icon" />
          <input 
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password" 
            className="form-input" 
            required
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>
      
      <div className="form-options">
        <label className="checkbox-wrapper">
          <input 
            type="checkbox" 
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <span className="checkmark"></span>
          Remember me
        </label>
        <a href="#" className="forgot-password">Forgot Password?</a>
      </div>

      <button type="submit" className="login-button">
        Sign In
      </button>

      <div className="signup-prompt">
        New to VIT FoodFinder?{" "}
        <Link to="/signup" className="signup-link">Create an account</Link>
      </div>
    </form>
  );
};

export default LoginForm;