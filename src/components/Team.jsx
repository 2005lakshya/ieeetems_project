import React from "react";
import { Lightbulb, Users, Award } from "lucide-react";
import "./Section.css";

const Team = () => (
  <section className="section team-section">
    <div className="section-content">
      <h2>Meet Our Team</h2>
      <p>
        We are passionate VIT students who understand the struggle of finding good food on campus. Our team combines 
        technology expertise with local food knowledge to create the ultimate dining companion for our fellow students.
      </p>
    
      {/* Team Values */}
      <div className="team-values">
        <div className="value-card">
          <div className="value-icon">
            <Lightbulb size={24} className="team-icon-lucide" />
          </div>
          <h3>Innovation</h3>
          <p>Using cutting-edge technology to solve everyday campus dining challenges with modern solutions.</p>
        </div>
        
        <div className="value-card">
          <div className="value-icon">
            <Users size={24} className="team-icon-lucide" />
          </div>
          <h3>Community</h3>
          <p>Building connections between students through shared dining experiences and collaborative reviews.</p>
        </div>
        
        <div className="value-card">
          <div className="value-icon">
            <Award size={24} className="team-icon-lucide" />
          </div>
          <h3>Quality</h3>
          <p>Ensuring every recommendation leads to an amazing food experience that exceeds expectations.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Team;