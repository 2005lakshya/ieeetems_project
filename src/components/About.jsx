import React from "react";
import { Star, MapPin, DollarSign } from "lucide-react";
import "./Section.css";

function About() {
  return (
    <section className="section about-section">
      <div className="section-content">
        <h2>Why Choose FoodFinder?</h2>
        
        <p>
          Discover VIT's best dining spots with our student-powered platform! Get authentic reviews, real-time ratings, 
          and insider tips from your campus community. From quick snacks between classes to perfect dinner spots, 
          we help you find exactly what you're craving.
        </p>

        {/* Benefits Showcase */}
        <div className="benefits-showcase">
          <div className="benefit-card">
            <div className="benefit-icon">
              <Star size={24} className="icon-lucide" />
            </div>
            <h3>Authentic Reviews</h3>
            <p>Real reviews from VIT students who actually dined there. No fake ratings, just honest experiences from your campus community.</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">
              <MapPin size={24} className="icon-lucide" />
            </div>
            <h3>Easy Navigation</h3>
            <p>Built-in maps and directions to get you to your favorite restaurants quickly and efficiently. Never get lost finding food again.</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">
              <DollarSign size={24} className="icon-lucide" />
            </div>
            <h3>Budget Friendly</h3>
            <p>Find the best deals and budget-friendly options perfect for student wallets. Eat great food without breaking the bank.</p>
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