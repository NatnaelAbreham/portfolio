import profile from '../assets/profile.jpg'
import '../styles/custom.css'
const Hero = () => {
  return (
    <section id="home" className="hero-section">
  {/* 3D Layers */}
  <div className="hero-layers">
    <div className="hero-layer"></div>
    <div className="hero-layer"></div>
  </div>

  {/* Stars */}
  <div className="hero-stars"></div>

  {/* Hero content */}
  <div className="container">
    <div className="row align-items-center min-vh-100">
      <div className="col-lg-6">
  <div className="hero-glass">

        <h4 className="text-uppercase text-warning mb-6">Hello, I'm</h4>
        <h1 className="display-4 fw-bold mb-4">Natanel Abraham</h1>
        <h2 className="display-8 mb-4">
          <span className="gradient-text">Full Stack Developer</span>
        </h2>
        <p className="lead mb-5">
          I create beautiful, functional websites and applications with modern technologies.
        </p>
        <div className="d-flex flex-wrap gap-3">
          <a href="#contact" className="btn btn-primary-custom">Get In Touch</a>
          <a href="#projects" className="btn btn-secondary-custom">View My Work</a>
        </div>
      </div>
      </div>
      <div className="col-lg-6 text-center">
        <div className="profile-wrapper">
          <img src={profile} alt="Profile" className="img-fluid rounded-circle shadow-lg profile-img"/>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Hero