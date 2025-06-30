import React from "react";
import "./Header.css"; 

function Header() {
  return (
    <header className="header">
      <h1 className="logo">VIT FOODFINDER</h1>
      <div className="nav-buttons">
        <button className="btn">SIGN IN</button>
        <button className="btn">HOME</button>
      </div>
    </header>
  );
}

export default Header;

