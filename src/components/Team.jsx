import React from "react";
import "./Section.css";
import pizza from "../assets/pizza.svg";
import cupcake from "../assets/cupcake.svg";
import momos from "../assets/momos.svg";
import "./Team.css";

const Team = () => (
  <section className="section team-section right-align">
    <div className="section-content">
      <h2>Meet Our Team</h2>
      <p className="team-description"
        style={{
            fontFamily: "'Alexandria-Regular', Helvetica, sans-serif",
            fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
            color: "#623fb5",
            lineHeight: "1.6",
            maxWidth: "900px",
            marginBottom: "4rem"
          }}
      >
        We are passionate VIT students who understand the struggle of finding good food on campus. Our team combines 
        technology expertise with local food knowledge to create the ultimate dining companion for our fellow students.
      </p>
    
    {/* Team Values */}
    <div className="team-values">
      <div className="value-card">
        <div className="value-icon">
          <img src={pizza} alt="Innovation" className="team-icon" />
        </div>
        <h3>Innovation</h3>
        <p>Using cutting-edge technology to solve everyday campus dining challenges</p>
      </div>
      
      <div className="value-card">
        <div className="value-icon">
          <img src={cupcake} alt="Community" className="team-icon" />
        </div>
        <h3>Community</h3>
        <p>Building connections between students through shared dining experiences</p>
      </div>
      
      <div className="value-card">
        <div className="value-icon">
          <img src={momos} alt="Quality" className="team-icon" />
        </div>
        <h3>Quality</h3>
        <p>Ensuring every recommendation leads to an amazing food experience</p>
      </div>
    </div>
    </div>
  </section>
);

export default Team;


