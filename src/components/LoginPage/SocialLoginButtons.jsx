import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const SocialLoginButtons = () => {
  return (
    <div className="social-buttons">
      <button type="button" className="social-button google-button">
        <span className="social-icon-container">
          <FcGoogle className="social-icon" />
        </span>
        <span className="social-button-text">Sign in with Google</span>
      </button>
      
      <button type="button" className="social-button meta-button">
        <span className="social-icon-container">
          <FaFacebook className="social-icon" />
        </span>
        <span className="social-button-text">Sign in with Meta</span>
      </button>
    </div>
  );
};

export default SocialLoginButtons;