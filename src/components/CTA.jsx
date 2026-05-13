import {
  ArrowUpRight,
  Mail,
  Github,
  Sparkles,
} from "lucide-react";

import "../styles/cta.css";

const CTA = () => {
  return (
    <section id="cta" className="cta section-padding">
      <div className="container">
        <div
          className="cta-wrapper"
          data-aos="fade-up"
        >
          {/* BACKGROUND GLOW */}
          <div className="cta-glow"></div>

          {/* TOP LABEL */}
          <div className="cta-label">
            <Sparkles size={16} />
            <span>Open for collaboration</span>
          </div>

          {/* MAIN CONTENT */}
          <div className="cta-content">
            <h2>
              Building modern digital products
              that are fast, scalable, and built
              to last.
            </h2>

            <p>
              I collaborate on full-stack platforms,
              modern web applications, and performance-focused
              digital experiences with strong engineering
              and thoughtful design.
            </p>
          </div>

          {/* STATS */}
          <div className="cta-stats">
            <div className="cta-stat">
              <h3>3+</h3>
              <span>Years Experience</span>
            </div>

            <div className="cta-stat">
              <h3>Enterprise</h3>
              <span>System Experience</span>
            </div>

            <div className="cta-stat">
              <h3>Full-Stack</h3>
              <span>Development Focus</span>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="cta-actions">
            <a
              href="#contact"
              className="cta-btn primary"
            >
              Discuss a Project
              <ArrowUpRight size={18} />
            </a>

            <a
              href="mailto:your@email.com"
              className="cta-btn secondary"
            >
              <Mail size={18} />
              Send Email
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn ghost"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;