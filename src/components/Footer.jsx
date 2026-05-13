import "../styles/footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-brand">
            <h3>Natnael Abraham</h3>

            <p>
              Full-stack developer building scalable,
              modern, and performance-driven digital products.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="footer-links">
            <h4>Navigation</h4>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#case-study">Case Study</a>
            <a href="#contact">Contact</a>
          </div>

          {/* SOCIAL */}
          <div className="footer-social">

            <h4>Connect</h4>

            <div className="social-list">

              <a
                href="https://github.com/NatnaelAbreham"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/natnael-abraham-172aa4292"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:your@email.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Natnael Abraham.
            Built with React.
          </p>

          <a href="#home" className="scroll-top">
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;