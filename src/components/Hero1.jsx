import { useEffect, useRef } from "react";
import profile from "../assets/profile.jpg";
import "../styles/hero.css";

const Hero = () => {
  const heroRef = useRef();

  // Premium mouse parallax
  useEffect(() => {
    const handleMove = (e) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;

      const x = (clientX / window.innerWidth - 0.5) * 4;
      const y = (clientY / window.innerHeight - 0.5) * 4;

      heroRef.current.style.transform = `
        rotateX(${-y}deg)
        rotateY(${x}deg)
      `;
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <section id="home" className="hero">
      {/* Background Orbs */}
      <div className="hero-bg">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
      </div>

      {/* Main Hero Card */}
      <div ref={heroRef} className="hero-glass">

        {/* LEFT */}
        <div className="hero-text">

          <span className="hero-badge">
            Full Stack • Enterprise • SaaS
          </span>

          <h4>Hello, I’m</h4>

          <h1>Natnael Abraham</h1>

          <h2 className="gradient-text animated-gradient">
            Full Stack Developer
          </h2>

          <p>
            I design and develop scalable, high-performance web applications
            with modern UI, secure backend systems, and production-ready
            architecture.
          </p>

          {/* BUTTONS */}
          <div className="hero-actions">

            <a href="#contact" className="hero-btn primary">
              <span>Start a Project</span>
            </a>

            <a href="#projects" className="hero-btn secondary">
              <span>Explore Work</span>
            </a>

          </div>

          {/* TRUST BADGES */}
          <div className="hero-trust">

            <span>Enterprise Systems</span>

            <span>Banking Experience</span>

            <span>Modern UI/UX</span>

            <span>Scalable Backend</span>

          </div>

        </div>

        {/* RIGHT */}
        <div className="hero-image">

          <div className="hero-image-wrapper">
            <img src={profile} alt="Natnael Abraham" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;