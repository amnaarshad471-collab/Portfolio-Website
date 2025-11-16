import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import "./HeroSection.css";

const HeroSection = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    background: { color: { value: "#000000" } },
    fpsLimit: 120,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      number: { value: 580, density: { enable: true, area: 800 } },
      color: { value: "#fff" },
      shape: { type: "circle" },
      opacity: { value: 0.4 },
      size: { value: { min: 1, max: 4 } },
      links: { enable: true, distance: 130, color: "#fff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 1.2, direction: "none", outModes: "bounce" },
    },
    detectRetina: true,
  };

  return (
    <section className="hero-section">
      {init && (
        <Particles id="tsparticles" options={particlesOptions} />
      )}

      <div className="gradient-overlay"></div>

      <div className="hero-content">
        <h1>
          Turning Ideas into <br />
          <span className="gradient-text">
            Powerful Digital Experiences
          </span>
          <br />
          with Expert <strong>Full-Stack Web Development</strong>
        </h1>

        <p>
          I craft <strong>modern, responsive & high-performing websites</strong>
          that drive growth and elevate your brand online.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
