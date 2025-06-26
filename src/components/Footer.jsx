import React from "react";
import "./Footer.css"; 
import temsLogo from "../assets/TemsLogo.svg"
const Footer = () => (
  <footer className="footer">
    <p className="md"> MADE BY:<img src={temsLogo} alt="Logo"className="TemsLogo"/></p>
  </footer>
);

export default Footer;
