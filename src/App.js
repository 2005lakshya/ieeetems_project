import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  return (
    <div className="App">
      <div className="banner">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Delicious Food Banner" className="banner-image" />
        <div className="banner-overlay">
          <h1 className="banner-title">Find Your Perfect Meal</h1>
          <p className="banner-subtitle">Discover VIT's best restaurants with authentic student reviews</p>
        </div>
      </div>
      <Header />
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
