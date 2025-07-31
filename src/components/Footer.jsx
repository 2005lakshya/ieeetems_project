import React from "react";
import { Code } from "lucide-react";
import "./Footer.css"; 

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p className="footer-text">
        Made with 
        <Code size={16} className="footer-icon" />
        by TEMS Team
      </p>
    </div>
  </footer>
);

export default Footer;