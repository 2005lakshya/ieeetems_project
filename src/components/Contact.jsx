import React from "react";
import { Mail, MessageSquare, HelpCircle } from "lucide-react";
import "./Section.css";

const Contact = () => (
  <section className="section contact-section">
    <div className="section-content">
      <h2>Get In Touch</h2>
      <p>
        Have a question, suggestion, or found a great restaurant we missed? We'd love to hear from you! 
        Help us make FoodFinder even better for the VIT community.
      </p>
    
      {/* Contact Methods */}
      <div className="contact-methods">
        <div className="contact-card">
          <div className="contact-icon">
            <Mail size={24} className="contact-icon-lucide" />
          </div>
          <h3>Email Us</h3>
          <p>Drop us a line anytime for questions or suggestions</p>
          <span className="contact-info">foodfinder@vit.edu</span>
        </div>
        
        <div className="contact-card">
          <div className="contact-icon">
            <MessageSquare size={24} className="contact-icon-lucide" />
          </div>
          <h3>Send Feedback</h3>
          <p>Share your ideas and help us improve the platform</p>
          <span className="contact-info">feedback@foodfinder.com</span>
        </div>
        
        <div className="contact-card">
          <div className="contact-icon">
            <HelpCircle size={24} className="contact-icon-lucide" />
          </div>
          <h3>Need Help?</h3>
          <p>We're here to assist you with any technical issues</p>
          <span className="contact-info">support@foodfinder.com</span>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;