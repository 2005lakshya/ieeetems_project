import React from "react";
import airplane from "../assets/airplane.svg";
import donut from "../assets/donut.svg";
import "./Section.css";
import "./About.css";

function About() {
  return (
    <section className="section about-section">
      <img src={airplane} alt="airplane" className="airplane" />
      <img src={donut} alt="donut" className="donut" />
      <h2>About Us</h2>
      <p className="text-content" 
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
        Our platform helps VIT students discover the best nearby restaurants and cafes through honest reviews, ratings,
        and detailed info from the campus community. With popular spots highlighted and built-in navigation, finding and
        reaching great food options is faster and easier than ever.
      </p>
    </section>
  );
}

export default About;

