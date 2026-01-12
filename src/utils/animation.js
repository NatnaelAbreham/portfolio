// utils/animation.js
export const initScrollAnimations = () => {
  // Animate.css for general sections
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__fadeInUp')
      }
    })
  }, observerOptions)

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el))

  // Custom animate for Skills section
  const skillsObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
          skillsObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 }
  )

  document.querySelectorAll('.skill-box').forEach(el => skillsObserver.observe(el))
}



// Theme management
export const getPreferredTheme = () => {
  if (typeof window !== 'undefined') {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) return storedTheme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'light'
}

export const setTheme = (theme) => {
  localStorage.setItem('theme', theme)
  document.documentElement.setAttribute('data-bs-theme', theme)
}