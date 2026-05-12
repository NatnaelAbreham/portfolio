import "../styles/case-study.css";

const CaseStudy = () => {
  return (
    <section id="case-study" className="case-study section-padding">
      <div className="container">

        {/* Header */}
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Featured Project</h2>
          <p className="section-subtitle">
            A deeper look into one of my recent projects, showing how I solve real-world problems with clean and scalable solutions.
          </p>
        </div>

        {/* Content */}
        <div className="case-study-wrapper">

          {/* LEFT - TEXT */}
          <div className="case-study-content" data-aos="fade-right">

            <h3>Modern Church Platform</h3>

            <div className="case-block">
              <h4>Problem</h4>
              <p>
                The client needed a modern and responsive website to manage events,
                share updates, and allow visitors to easily access important
                information across all devices.
              </p>
            </div>

            <div className="case-block">
              <h4>Solution</h4>
              <p>
                I designed and developed a fully responsive web platform with
                a clean UI, structured navigation, and optimized performance.
                The system includes event management, content sections, and
                smooth user interaction.
              </p>
            </div>

            <div className="case-block">
              <h4>Tech Stack</h4>
              <p>
                React, Tailwind / CSS, JavaScript, Responsive Design, Deployment
              </p>
            </div>

            <div className="case-block">
              <h4>Result</h4>
              <p>
                Delivered a fast, modern, and user-friendly platform that improved
                accessibility and engagement while maintaining performance and
                scalability.
              </p>
            </div>

            <div className="case-actions">
              <a
                href="https://natnaelabreham.github.io/church/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary"
              >
                Live Preview
              </a>

              <a
                href="https://github.com/NatnaelAbreham/church"
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary"
              >
                View Code
              </a>
            </div>

          </div>

          {/* RIGHT - IMAGE */}
          <div className="case-study-image" data-aos="fade-left">
            <img
              src="/assets/case-study.png"   // replace with your project screenshot
              alt="Project preview"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default CaseStudy;