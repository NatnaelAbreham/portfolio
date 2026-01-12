const About = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <h2 className="section-title text-center mb-5">
          About Me
        </h2>

        <div className="row align-items-center gy-5">
          {/* LEFT — TIMELINE */}
          <div className="col-lg-6">
            <div className="timeline">
              <div className="timeline-item" data-animate>
                <h4>Software Developer — Core Banking Systems</h4>
                <span className="timeline-date">2023 – Present</span>
                <p>
                  Working on enterprise-grade banking and financial systems,
                  focusing on backend services, secure APIs, and reliable
                  database-driven applications using ASP.NET Core.
                </p>
              </div>

              <div className="timeline-item" data-animate>
                <h4>Full-Stack Projects & Freelance Development</h4>
                <span className="timeline-date">2021 – Present</span>
                <p>
                  Built multiple web and desktop applications including
                  calculators, games, dashboards, and management systems using
                  React, C#, and modern web technologies.
                </p>
              </div>

              <div className="timeline-item" data-animate>
                <h4>BSc in Computer Science</h4>
                <span className="timeline-date">Graduated 2023</span>
                <p>
                  Strong foundation in algorithms, data structures, software
                  engineering, and problem-solving.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — DESCRIPTION */}
          <div className="col-lg-6">
            <div className="about-content" data-animate>
              <h3 className="gradient-text mb-4">
                Turning complex ideas into real-world software
              </h3>

              <p className="lead">
                I’m a software developer with a strong computer science
                background and hands-on experience building real production
                systems. I specialize in <strong>React</strong> on the frontend
                and <strong>ASP.NET Core</strong> on the backend.
              </p>

              <p>
                I have <strong>2 years of professional experience</strong>
                working on core banking and enterprise applications, where
                performance, security, and reliability matter every day.
                Outside of work, I actively build personal projects to sharpen
                my skills and explore new ideas.
              </p>

              <p>
                I hold certifications from <strong>Microsoft (C#)</strong>,
                <strong> Udacity</strong>, and <strong> freeCodeCamp</strong>, and
                I believe in learning by building, not memorizing tutorials.
              </p>

              {/* HIGHLIGHTS */}
              <div className="row mt-4">
                {[
                  {
                    icon: 'bi-code-slash',
                    title: 'Clean Code',
                    desc: 'Readable, maintainable, scalable',
                  },
                  {
                    icon: 'bi-diagram-3',
                    title: 'System Thinking',
                    desc: 'Backend-first mindset',
                  },
                  {
                    icon: 'bi-award',
                    title: 'Certified',
                    desc: 'Microsoft, Udacity, freeCodeCamp',
                  },
                  {
                    icon: 'bi-lightbulb',
                    title: 'Problem Solver',
                    desc: 'Brute force → optimized',
                  },
                ].map((item, index) => (
                  <div className="col-md-6 mb-3" key={index}>
                    <div className="about-feature">
                      <i className={`bi ${item.icon}`} />
                      <div>
                        <h6>{item.title}</h6>
                        <span>{item.desc}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
