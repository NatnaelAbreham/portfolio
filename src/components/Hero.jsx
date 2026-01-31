import profile from "../assets/profile.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* 3D background layers */}
      <div className="hero-bg">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
      </div>

      <div className="hero-glass">
        <div className="hero-text">
          <h4>Hello, I’m</h4>
          <h1>Natanel Abraham</h1>
          <h2 className="gradient-text">Full Stack Developer</h2>
          <p>I design and build modern, fast and visually powerful web experiences
  that help businesses grow and stand out.</p>

         <div className="d-flex flex-wrap gap-3">
          <a href="#contact" className="btn btn-primary-custom">Get In Touch</a>
          <a href="#projects" className="btn btn-secondary-custom">View My Work</a>
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