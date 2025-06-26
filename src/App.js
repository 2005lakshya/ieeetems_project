import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import banner from "./assets/banner.svg"
import "./App.css";

function App() {
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

export default App;
