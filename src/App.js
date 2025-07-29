import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoginPage from "./login_signup/LoginPage";
import SignupPage from "./login_signup/SignupPage";
import banner from "./assets/banner.svg"
import "./App.css";

// Home Page Component
function HomePage() {
  return (
    <div className="App">
      <div className="banner">
        <img src={banner} alt="Food Banner" className="banner-image" />
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
