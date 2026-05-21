import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import "../styles/navbar.css";

const Navbar = ({ toggleTheme, theme }) => {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // New state for mobile dropdown
  const lastScroll = useRef(0);

  // Define dropdown items
  const dropdownItems = ["case-study", "CTA", "Certificates", "Order"];
  const mainNavItems = ["Home", "Services", "About", "Skills", "Projects", "Contact"];
  
  const navItems = [...mainNavItems, ...dropdownItems];

  // Close dropdowns on scroll
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll.current && current > 120) {
        setHidden(true);
        setMenuOpen(false);
        setDropdownOpen(false);
        setMobileDropdownOpen(false); // Close mobile dropdown on scroll
      } else {
        setHidden(false);
      }
      lastScroll.current = current;

      // Detect active section
      navItems.forEach((item) => {
        const el = document.getElementById(item.toLowerCase());
        if (el) {
          const top = el.offsetTop - 150;
          const bottom = top + el.offsetHeight;
          if (current >= top && current < bottom) {
            setActiveSection(item.toLowerCase());
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [navItems]);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Close mobile menu when clicking outside (optional)
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuOpen && !event.target.closest('.floating-navbar')) {
        setMenuOpen(false);
        setMobileDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [menuOpen]);

  // Handle mobile dropdown toggle
  const toggleMobileDropdown = (e) => {
    e.stopPropagation();
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  return (
    <nav className={`floating-navbar ${hidden ? "hide" : ""}`}>
      <div className="nav-glass">
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="logo" />
        </a>

        {/* Desktop Navigation */}
        <ul className="nav-links desktop">
          {mainNavItems
            .filter(item => item !== "Home")
            .map(item => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={activeSection === item.toLowerCase() ? "active" : ""}
                >
                  {item}
                </a>
              </li>
            ))}
          
          {/* Desktop Dropdown */}
          <li className="dropdown">
            <button 
              className={`dropdown-btn ${dropdownOpen ? "active-dropdown" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOpen(!dropdownOpen);
              }}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              More <i className={`bi bi-chevron-down ${dropdownOpen ? "rotate" : ""}`} />
            </button>
            <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
              {dropdownItems.map(item => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={activeSection === item.toLowerCase() ? "active" : ""}
                    onClick={() => setDropdownOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            <i className={`bi ${theme === "light" ? "bi-moon" : "bi-sun"}`} />
          </button>

          {/* Mobile menu toggle button */}
          <button
            className={`menu-arrow ${menuOpen ? "open" : ""}`}
            onClick={() => {
              setMenuOpen(!menuOpen);
              setMobileDropdownOpen(false); // Reset mobile dropdown when closing menu
            }}
            aria-label="Toggle menu"
          >
            <i className="bi bi-chevron-down" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        {mainNavItems
          .filter(item => item !== "Home")
          .map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={activeSection === item.toLowerCase() ? "active" : ""}
              onClick={() => {
                setMenuOpen(false);
                setMobileDropdownOpen(false);
              }}
            >
              {item}
            </a>
          ))}
        
        {/* Mobile Dropdown Section */}
        <div className="mobile-dropdown-separator">
          <button 
            className="mobile-dropdown-btn"
            onClick={toggleMobileDropdown}
            aria-expanded={mobileDropdownOpen}
          >
            More Projects
            <i className={`bi bi-chevron-down ${mobileDropdownOpen ? "rotate" : ""}`} />
          </button>
          <div className={`mobile-dropdown-items ${mobileDropdownOpen ? "show" : ""}`}>
            {dropdownItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={activeSection === item.toLowerCase() ? "active" : ""}
                onClick={() => {
                  setMenuOpen(false);
                  setMobileDropdownOpen(false);
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;