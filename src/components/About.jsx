import React from "react";
import "./Section.css";
import "./About.css";

function About() {
  return (
    <section className="section about-section left-align">
      <div className="section-content">
        {/* Marquee Effect */}
        <div className="marquee-container">
          <div className="marquee">
            <span>🍕 BEST FOOD REVIEWS 🍔 TRUSTED BY VIT STUDENTS 🌮 AUTHENTIC RATINGS 🍰 QUICK NAVIGATION 🥗 BUDGET FRIENDLY 🍜 </span>
          </div>
        </div>

        <h2>Why Choose FoodFinder?</h2>
        
        <p className="text-content" 
          style={{
            fontFamily: "'Alexandria-Regular', Helvetica, sans-serif",
            fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
            color: "#623fb5",
            lineHeight: "1.6",
            maxWidth: "900px",
            marginBottom: "4rem"
          }}
        >
          Discover VIT's best dining spots with our student-powered platform! Get authentic reviews, real-time ratings, 
          and insider tips from your campus community. From quick snacks between classes to perfect dinner spots, 
          we help you find exactly what you're craving with built-in navigation and crowd favorites highlighted.
        </p>

      {/* Benefits Showcase */}
      <div className="benefits-showcase">
        <div className="benefit-card">
          <div className="benefit-icon">
            <span className="icon-emoji">⭐</span>
          </div>
          <h3>Authentic Reviews</h3>
          <p>Real reviews from VIT students who actually dined there. No fake ratings, just honest experiences from your campus community!</p>
          <div className="benefit-accent"></div>
        </div>
        
        <div className="benefit-card">
          <div className="benefit-icon">
            <span className="icon-emoji">🗺️</span>
          </div>
          <h3>Easy Navigation</h3>
          <p>Built-in maps and directions to get you to your favorite restaurants quickly and efficiently. Never get lost finding food again!</p>
          <div className="benefit-accent"></div>
        </div>
        
        <div className="benefit-card">
          <div className="benefit-icon">
            <span className="icon-emoji">�</span>
          </div>
          <h3>Budget Friendly</h3>
          <p>Find the best deals and budget-friendly options perfect for student wallets. Eat great food without breaking the bank!</p>
          <div className="benefit-accent"></div>
        </div>
      </div>

      {/* Second Marquee Effect */}
      <div className="marquee-container reverse">
        <div className="marquee reverse">
          <span>⭐ 5-STAR RATINGS ⭐ VIT APPROVED ⭐ STUDENT FAVORITES ⭐ TRENDING NOW ⭐ MUST TRY DISHES ⭐ </span>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="stats-section">
        <div className="stat-item">
          <div className="stat-number">500+</div>
          <div className="stat-label">Restaurants Listed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">2000+</div>
          <div className="stat-label">Student Reviews</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">95%</div>
          <div className="stat-label">Satisfaction Rate</div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default About;

