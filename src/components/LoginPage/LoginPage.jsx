import './LoginPage.css';
import LoginForm from './LoginForm';
import SocialLoginButtons from './SocialLoginButtons';
import loginBg from '../../assets/login-bg.jpg';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-form-section">
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
      <div className="login-image-section">
        <img src={loginBg} alt="Background" className="login-bg-image" />
      </div>
    </div>
  );
};

export default LoginPage;