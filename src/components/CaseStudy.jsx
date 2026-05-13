import {
  ArrowUpRight,
  Globe,
  Layers3,
  Rocket,
  ShieldCheck,
} from "lucide-react";

import church1 from "../assets/church/church10.jpg";
import church2 from "../assets/church/church6.png";
import church3 from "../assets/church/church8.png";
import church4 from "../assets/church/church4.png";

import "../styles/case-study.css";

const highlights = [
  {
    icon: <Layers3 size={18} />,
    title: "Modern UI System",
  },
  {
    icon: <Rocket size={18} />,
    title: "Performance Focused",
  },
  {
    icon: <ShieldCheck size={18} />,
    title: "Responsive Architecture",
  },
  {
    icon: <Globe size={18} />,
    title: "Production Deployment",
  },
];

const CaseStudy = () => {
  return (
    <section id="case-study" className="case-study section-padding">
      <div className="container">
        {/* TOP */}
        <div className="case-study-top" data-aos="fade-up">
          <span className="case-label">
            Featured Case Study
          </span>

          <h2 className="case-title">
            Designing a modern digital platform
            for a growing church community.
          </h2>

          <p className="case-description">
            A modern web experience focused on accessibility,
            engagement, responsive performance, and scalable
            content structure for community interaction.
          </p>
        </div>

        {/* MAIN SHOWCASE */}
        <div className="case-showcase">
          {/* LEFT */}
          <div
            className="case-content"
            data-aos="fade-right"
          >
            <div className="case-project-card">
              <span className="project-tag">
                Community Platform
              </span>

              <h3>Church Experience Platform</h3>

              <p>
                The project was designed to modernize how the
                church communicates events, shares updates,
                and delivers important information across
                devices with a seamless user experience.
              </p>

              <div className="case-metrics">
                <div>
                  <h4>10+</h4>
                  <span>Responsive Pages</span>
                </div>

                <div>
                  <h4>100%</h4>
                  <span>Mobile Optimized</span>
                </div>

                <div>
                  <h4>Fast</h4>
                  <span>Performance Focused</span>
                </div>
              </div>
            </div>

            {/* HIGHLIGHTS */}
            <div className="case-highlights">
              {highlights.map((item, index) => (
                <div
                  className="highlight-card"
                  key={index}
                >
                  <div className="highlight-icon">
                    {item.icon}
                  </div>

                  <span>{item.title}</span>
                </div>
              ))}
            </div>

            {/* DETAILS */}
            <div className="case-details">
              <div className="detail-block">
                <span>Challenge</span>

                <p>
                  Create a modern platform capable of handling
                  announcements, events, ministry information,
                  and responsive communication across devices.
                </p>
              </div>

              <div className="detail-block">
                <span>Approach</span>

                <p>
                  Focused on clean architecture, modern UI,
                  accessibility, responsive layouts, and
                  optimized frontend performance.
                </p>
              </div>

              <div className="detail-block">
                <span>Stack</span>

                <p>
                  React • JavaScript • Tailwind CSS • Responsive Design
                  • Deployment
                </p>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="case-actions">
              <a
                href="https://natnaelabreham.github.io/church/"
                target="_blank"
                rel="noopener noreferrer"
                className="case-btn primary"
              >
                Live Preview
                <ArrowUpRight size={18} />
              </a>

              <a
                href="https://github.com/NatnaelAbreham/church"
                target="_blank"
                rel="noopener noreferrer"
                className="case-btn secondary"
              >
                View Code
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="case-gallery"
            data-aos="fade-left"
          >
            <div className="gallery-main">
              <img src={church1} alt="" />
            </div>

            <div className="gallery-grid">
              <img src={church2} alt="" />
              <img src={church3} alt="" />
              <img src={church4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;