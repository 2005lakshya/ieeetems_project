import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <form className="login-form">
      <div className="form-group">
        <label className="form-label" htmlFor="email">Email ID</label>
        <input
          id="email"
          type="email"
          placeholder="Example@gmail.com"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Create a password"
          className="form-input"
        />
      </div>

      <div className="button-container">
        <button type="submit" className="login-button">SIGN UP</button>
      </div>

      <div className="signup-text">
        Already have an account? <Link to="/login" className="signup-link">Sign in</Link>
      </div>
    </form>
  );
};

export default SignupForm;
