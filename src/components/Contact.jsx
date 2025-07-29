import React from "react";
import "./Section.css";
import momos from"../assets/momos.svg";
import airplanedown from "../assets/airplanedown.svg"
import juice from "../assets/juice.svg";
import "./Contact.css";


const Contact = () => (
  <section className="section">
    <div className="decorations">
        <img src={momos} alt="momos" className="momos"/>
        <img src={airplanedown} alt="airplanedown" className="airplanedown"/>
         <img src={juice } alt="juice " className="juice "/>
        </div>
    <h2>Contact Us</h2>
    <p 
      style={{
          fontFamily: "'Alexandria-Regular', Helvetica, sans-serif",
          fontSize: "clamp(1.8rem, 1.8vw, 1.8rem)",
          color: "#623fb5",
          lineHeight: "1.5",
          textAlign: "center",
          maxWidth: "1000px",
          margin: "0 auto"
        }}
      >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
       in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
  </section>
);

export default Contact;
