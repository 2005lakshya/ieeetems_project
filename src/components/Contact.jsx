import React from "react";
import "./Section.css";
import momos from "../assets/momos.svg";
import airplanedown from "../assets/airplanedown.svg"
import juice from "../assets/juice.svg";
import "./Contact.css";

const Contact = () => (
  <section className="section contact-section left-align">
    <div className="section-content">
      <h2>Get In Touch</h2>
      <p className="contact-description"
        style={{
            fontFamily: "'Alexandria-Regular', Helvetica, sans-serif",
            fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
            color: "#623fb5",
            lineHeight: "1.6",
            maxWidth: "800px",
            marginBottom: "4rem"
          }}
        >
        Have a question, suggestion, or found a great restaurant we missed? We'd love to hear from you! 
        Help us make FoodFinder even better for the VIT community.
      </p>
    
    {/* Contact Methods */}
    <div className="contact-methods">
      <div className="contact-card">
        <div className="contact-icon">
          <img src={momos} alt="Email" className="contact-image" />
        </div>
        <h3>📧 Email Us</h3>
        <p>Drop us a line anytime</p>
        <span className="contact-info">foodfinder@vit.edu</span>
      </div>
      
      <div className="contact-card">
        <div className="contact-icon">
          <img src={airplanedown} alt="Feedback" className="contact-image" />
        </div>
        <h3>💡 Send Feedback</h3>
        <p>Share your ideas and suggestions</p>
        <span className="contact-info">feedback@foodfinder.com</span>
      </div>
      
      <div className="contact-card">
        <div className="contact-icon">
          <img src={juice} alt="Support" className="contact-image" />
        </div>
        <h3>🆘 Need Help?</h3>
        <p>We're here to assist you</p>
        <span className="contact-info">support@foodfinder.com</span>
      </div>
    </div>
    </div>
  </section>
);

export default Contact;
