import profile from '../assets/profile.jpg'

const Hero = () => {
  return (
    <section id="home" className="hero-section text-white">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <h4 className="text-uppercase text-warning mb-6">Hello, I'm</h4>
            <h1 className="display-4 fw-bold mb-4">Natanel Abraham</h1>
            <h2 className="display-8 mb-4">
              <span className="gradient-text">Full Stack Developer</span>
            </h2>
            <p className="lead mb-5">
              I create beautiful, functional websites and applications with modern technologies.
              Passionate about clean code and user experience.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-primary-custom">
                Get In Touch
              </a>
              <a href="#projects" className="btn btn-outline-light">
                View My Work
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="position-relative">

              <div className="profile-wrapper">
  <img
    src={profile}
    alt="Profile"
    className="img-fluid rounded-circle shadow-lg profile-img"
  />
</div>


              {/* <img
                src={profile}
                alt="Profile"
                className="img-fluid rounded-circle border border-5 border-white shadow-lg"
                style={{ maxWidth: '300px' }}
              /> */}
              {/* <div className="position-absolute top-0 start-100 translate-middle">
                <div className="bg-primary rounded-pill p-3 shadow">
                  <i className="bi bi-code-slash fs-3 text-white"></i>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero