import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="container">
        <div className="row text-center text-md-start align-items-center">

          {/* Brand / About */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="footer-brand">Natnael Abraham</h5>
            <p className="footer-text">
              Passionate Software Developer crafting clean, scalable, and modern
              web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h6 className="footer-title">Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-md-4 text-center text-md-end">
            <h6 className="footer-title">Let’s Connect</h6>
            <div className="footer-socials">
              <a href="#" aria-label="GitHub"><FaGithub /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="mailto:your@email.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

        </div>

        <hr className="footer-divider" />

        <div className="text-center footer-copy">
          © {new Date().getFullYear()} Natnael Abraham. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
