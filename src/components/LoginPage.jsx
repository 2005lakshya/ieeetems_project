// src/pages/LoginPage.jsx
import './LoginPage.css';
import LoginForm from './LoginForm';
import SocialLoginButtons from './SocialLoginButtons';
import loginBg from "../assets/login-bg.jpg";

const LoginPage = () => {
  return (
    <div className="container-fluid login-container">
      <div className="row g-0">
        <div className="col-lg-6 login-form-section d-flex">
          <div className="login-content">
            <h1 className="login-welcome">Welcome</h1>
            <LoginForm />
            <div className="login-divider">
              <span className="divider-line"></span>
              <span className="divider-text">Or</span>
              <span className="divider-line"></span>
            </div>
            <SocialLoginButtons />
          </div>
        </div>
        <div className="col-lg-6 login-image-section d-none d-lg-flex">
          <img src={loginBg} alt="Background" className="login-bg-image" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
