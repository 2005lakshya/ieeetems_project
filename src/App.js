import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Pizza, Hamburger, Coffee, IceCream, ArrowRight } from "lucide-react";
import Header from "./components/Header";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoginPage from "./login_signup/LoginPage";
import SignupPage from "./login_signup/SignupPage";
import "./App.css";

// Home Page Component
function HomePage() {
  useEffect(() => {
    // Animate stats on scroll
    const animateStats = () => {
      const stats = document.querySelectorAll('.stat-number');
      if (stats.length === 0) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const finalValue = target.textContent;
            const numericValue = parseInt(finalValue.replace(/\D/g, ''));
            const suffix = finalValue.replace(/\d/g, '');
            
            let currentValue = 0;
            const increment = numericValue / 50;
            
            const timer = setInterval(() => {
              currentValue += increment;
              if (currentValue >= numericValue) {
                target.textContent = finalValue;
                clearInterval(timer);
              } else {
                target.textContent = Math.floor(currentValue) + suffix;
              }
            }, 30);
            
            observer.unobserve(target);
          }
        });
      });

      stats.forEach(stat => observer.observe(stat));
    };

    // Initialize animations after component mounts
    setTimeout(animateStats, 100);
  }, []);

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="App">
      <Header />
      
      {/* Hero Section */}
      <div className="banner">
        <div className="floating-food food-1">
          <Pizza size={32} />
        </div>
        <div className="floating-food food-2">
          <Hamburger size={28} />
        </div>
        <div className="floating-food food-3">
          <Coffee size={30} />
        </div>
        <div className="floating-food food-4">
          <IceCream size={26} />
        </div>
        
        <div className="banner-overlay">
          <h1 className="banner-title">Find Your Perfect Meal</h1>
          <p className="banner-subtitle">
            Discover VIT's best restaurants with authentic student reviews and real-time ratings
          </p>
          <button className="cta-button" onClick={scrollToAbout}>
            <span>Explore Restaurants</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <main>
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;