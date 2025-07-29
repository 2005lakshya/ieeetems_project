import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css"; 

function Header() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/login');
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <h1 className="logo">VIT FOODFINDER</h1>
      <div className="nav-buttons">
        <button className="btn" onClick={handleSignIn}>SIGN IN</button>
        <button className="btn" onClick={handleHome}>HOME</button>
      </div>
    </header>
  );
}

export default Header;
