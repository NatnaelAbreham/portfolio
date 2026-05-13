import "../styles/about.css";

const About = () => {
  const features = [
    {
      icon: "bi-code-slash",
      title: "Clean Code",
      desc: "Readable, scalable, maintainable architecture",
    },
    {
      icon: "bi-diagram-3",
      title: "System Design",
      desc: "Backend-focused scalable solutions",
    },
    {
      icon: "bi-shield-check",
      title: "Secure Development",
      desc: "Authentication, APIs, enterprise security",
    },
    {
      icon: "bi-lightning-charge",
      title: "Performance",
      desc: "Fast, optimized, production-ready systems",
    },
    {
      icon: "bi-award",
      title: "Certified",
      desc: "Microsoft • Udacity • freeCodeCamp",
    },
    {
      icon: "bi-rocket-takeoff",
      title: "Delivery Focused",
      desc: "From idea to deployment",
    },
  ];

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">

        {/* Header */}
        <div className="section-header text-center">
          <h2 className="section-title">About Me</h2>

          <p className="section-subtitle">
            Full-stack developer building scalable, secure, and modern
            digital products with strong focus on performance,
            clean architecture, and user experience.
          </p>
        </div>

        <div className="about-wrapper">

          {/* LEFT */}
          <div className="about-left">

            <div className="about-intro glass-card">
              <span className="about-badge">
                Full Stack Developer
              </span>

              <h3>
                Crafting software that transforms
                ideas into real products
              </h3>

              <p>
                I specialize in building modern full-stack applications
                using React, .NET, APIs, databases, and scalable backend systems.
              </p>

              <p>
                Over the past 3+ years, I’ve worked on enterprise banking systems,
                SaaS platforms, management dashboards, and real-world applications
                focused on reliability, security, and maintainability.
              </p>

              <div className="about-stats">
                <div className="stat-box">
                  <h4>3+</h4>
                  <span>Years Experience</span>
                </div>

                <div className="stat-box">
                  <h4>20+</h4>
                  <span>Projects Built</span>
                </div>

                <div className="stat-box">
                  <h4>100%</h4>
                  <span>Learning Mindset</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="about-right">

            <div className="timeline">

              <div className="timeline-item glass-card">
                <div className="timeline-dot"></div>

                <span className="timeline-date">
                  2023 — Present
                </span>

                <h4>
                  Enterprise Banking & Financial Systems
                </h4>

                <p>
                  Developing and maintaining enterprise banking platforms,
                  secure APIs, internal operational systems,
                  and third-party payment integrations.
                </p>
              </div>

              <div className="timeline-item glass-card">
                <div className="timeline-dot"></div>

                <span className="timeline-date">
                  2021 — Present
                </span>

                <h4>
                  Freelance & Full-Stack Development
                </h4>

                <p>
                  Building responsive websites, SaaS platforms,
                  dashboards, and scalable web applications
                  for modern businesses.
                </p>
              </div>

              <div className="timeline-item glass-card">
                <div className="timeline-dot"></div>

                <span className="timeline-date">
                  Graduated 2023
                </span>

                <h4>
                  BSc in Computer Science
                </h4>

                <p>
                  Built strong foundations in software engineering,
                  algorithms, system design, and problem-solving.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* FEATURES */}
        <div className="features-grid">

          {features.map((item, index) => (
            <div className="feature-card glass-card" key={index}>
              <div className="feature-icon">
                <i className={`bi ${item.icon}`}></i>
              </div>

              <div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default About;