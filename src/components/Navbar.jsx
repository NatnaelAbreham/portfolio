import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = ({ toggleTheme, theme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Handle scroll for navbar background
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // IntersectionObserver to track sections in view
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } //60% of section must be visible
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Certificates','Order', 'Contact'];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-dark ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">

        {/* Brand */}
        <a className="navbar-brand fw-bold fs-3 d-flex align-items-center gap-2 gradient-text" href="#home" onClick={() => setActiveSection('home')}>
          <img src={logo} alt="Your Brand" height="26" />
          <span>atty</span>
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-1"></i>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navItems.map(item => {
              const sectionId = item.toLowerCase();
              return (
                <li key={item} className="nav-item">
                  <a
                    href={`#${sectionId}`}
                    className={`nav-link fw-semibold mx-2 ${activeSection === sectionId ? 'active' : ''}`}
                    onClick={() => setActiveSection(sectionId)} // Update active on click
                  >
                    {item}
                  </a>
                </li>
              );
            })}

            {/* Theme Toggle */}
            <li className="nav-item ms-lg-3">
              <button
                onClick={toggleTheme}
                className="btn btn-outline-primary"
                aria-label="Toggle theme"
              >
                <i className={`bi ${theme === 'light' ? 'bi-moon' : 'bi-sun'}`} />
              </button>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
