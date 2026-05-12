import { useEffect, useRef } from "react";
import profile from "../assets/profile.jpg";
import "../styles/hero.css";

const Hero = () => {
  const heroRef = useRef();

  // subtle mouse parallax
  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;

      heroRef.current.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section id="home" className="hero">
      {/* Background orbs */}
      <div className="hero-bg">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
      </div>

      <div ref={heroRef} className="hero-glass">
        <div className="hero-text">
          <h4>Hello, I’m</h4>
          <h1>Natanel Abraham</h1>

          <h2 className="gradient-text animated-gradient">
            Full Stack Developer
          </h2>

          <p>
            I design and build high-performance, visually refined digital
            experiences that help brands stand out and scale.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn secondary">
              View Work
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;