import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import "../styles/navbar.css";

const Navbar = ({ toggleTheme, theme }) => {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll.current && current > 120) {
        setHidden(true);
        setMenuOpen(false);
      } else {
        setHidden(false);
      }
      lastScroll.current = current;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = ["About", "Skills", "Projects", "Certificates", "Order", "Contact"];

  return (
    <nav className={`floating-navbar ${hidden ? "hide" : ""}`}>
      <div className="nav-glass">
        <a href="#home" className="brand">
          <img src={logo} alt="logo" />
          <span>atty</span>
        </a>

        {/* Desktop */}
        <ul className="nav-links desktop">
          {navItems.map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            <i className={`bi ${theme === "light" ? "bi-moon" : "bi-sun"}`} />
          </button>

          {/* Arrow toggle (mobile) */}
          <button
            className={`menu-arrow ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="bi bi-chevron-down" />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        {navItems.map(item => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;