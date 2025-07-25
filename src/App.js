import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MapPage from "./components/MapPage";
import banner from "./assets/banner.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="banner">
          <img src={banner} alt="Food Banner" className="banner-image" />
        </div>

        <Header />

        <nav style={{ textAlign: "center", margin: "20px" }}>
          {/* Add navigation links */}
          <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
          <Link to="/map">Map Page</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <main>
                  <About />
                  <Team />
                  <Contact />
                </main>
                <Footer />
              </>
            }
          />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
