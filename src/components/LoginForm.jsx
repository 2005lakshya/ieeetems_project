import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form className="login-form">
      <div className="form-group">
        <label className="form-label">Email ID</label>
        <input 
          type="email" 
          placeholder="Example@gmail.com" 
          className="form-input" 
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Password</label>
        <input 
          type="password" 
          placeholder="Enter the password" 
          className="form-input" 
        />
      </div>
      
      <div className="form-options">
        <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
      </div>

      <div className="button-container">
        <button type="submit" className="login-button">SIGN IN</button>
      </div>

      <div className="signup-text">
        New user? <Link to="/signup" className="signup-link">Sign up</Link>
      </div>
    </form>
  );
};

export default LoginForm;
