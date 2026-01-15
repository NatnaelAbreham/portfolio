import { useEffect, useState } from 'react'
import logo from '../assets/logo.png' 

const Navbar = ({ toggleTheme, theme }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
  className={`navbar navbar-expand-lg fixed-top navbar-dark ${
    scrolled ? 'navbar-scrolled' : ''
  }`}
>
  <div className="container">

    <a className="navbar-brand fw-bold fs-3 d-flex align-items-center gap-2 gradient-text" href="home">
      <img src={logo} alt="Your Brand" height="26" />
      <span>atty</span>
    </a>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-label="Toggle navigation"
    >
      <i className="bi bi-list fs-1"></i>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto align-items-lg-center">
        {['Home', 'About', 'Skills', 'Projects','Certificates', 'Contact'].map(item => (
          <li key={item} className="nav-item">
            <a className="nav-link fw-semibold mx-2" href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          </li>
        ))}

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

  )
}

export default Navbar
