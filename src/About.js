import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-img about-img-1">
        <img src="/top_about.svg" alt="Top Reveal" className="about-img-inner" />
      </div>

      <div className="about-text">
        <p>
         I’m Amna Arshad, a MERN Stack Developer with a strong passion for crafting visually stunning, high-performance, and animated web experiences. I specialize in building modern, responsive, and interactive websites using MongoDB,<br /> Express.js, React, and Node.js — combining clean code with creative design.<br />

With certified training in Full Stack Web Development,<br /> I’ve developed a deep understanding of both frontend aesthetics and backend architecture,<br /> allowing me to deliver complete, production-ready solutions. Whether it’s developing smooth user interfaces, integrating APIs, or optimizing performance,I bring ideas to life with precision and innovation.

Driven by curiosity and creativity, I constantly explore new tools,<br /> animations, and frameworks to keep my work cutting-edge. My goal is to build web solutions<br /> that not only function flawlessly but leave a lasting impression on every user.
        </p>
      </div>

      <div className="about-img about-img-2">
        <img src="/bottom_about.svg" alt="Bottom Reveal" className="about-img-inner" />
      </div>
    </section>
  );
};

export default About;
