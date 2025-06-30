import React from "react";
import "./Section.css";
import pizza from "../assets/pizza.svg";
import cupcake from "../assets/cupcake.svg";
import juice from"../assets/juice.svg";
import "./Team.css";

const Team = () => (
  <section className="section">
    <div className="decorations">
    <img src={pizza} alt="pizza" className="pizza"/>
    <img src={cupcake} alt="cupcake" className="cupcake"/>
    </div>
    <h2>Our Team</h2>
    <p>
      We are a passionate community of students committed to pushing the boundaries of technology and engineering management. At IEEE TEMS VIT,
       we foster innovation, leadership, and collaboration by creating a space where ideas thrive and projects come to life. Through hands-on
        workshops, seminars, and tech competitions, our members gain practical experience and stay ahead in the ever-evolving tech landscape.
    </p>
  </section>
);

export default Team;


