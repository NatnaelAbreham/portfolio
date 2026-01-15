import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* import './index.css' */
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/main.css' 
import './styles/home.css' 
import './styles/custom.css'  
import './styles/skills.css' 
import './styles/about.css'
import './styles/certificates.css'
import './styles/projects.css'
import './styles/contact.css'
import 'animate.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
