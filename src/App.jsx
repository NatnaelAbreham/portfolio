import { useState, useEffect } from 'react'
import { initScrollAnimations } from './utils/animation.js'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About.jsx'
import Certificates from './components/Certificates.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    initScrollAnimations()
  }, [])

 /*  useEffect(() => {
    document.documentElement.setAttribute(
      'data-bs-theme',
      theme
    )
    localStorage.setItem('theme', theme)
  }, [theme]) */


  useEffect(() => {
  // For YOUR CSS
  document.documentElement.setAttribute('data-theme', theme)

  // For Bootstrap
  document.documentElement.setAttribute('data-bs-theme', theme)

  localStorage.setItem('theme', theme)
}, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
     <Footer />
    </div>
  )
}

export default App
