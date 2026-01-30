
import '../styles/certificates.css';
import { MicrosoftLogo } from '../icons/MicrosoftLogo';
import UdacityLogo from '../assets/udacity.jpg';
import freeCodeCampLogo from '../assets/freecodecamplogo.jpg';
import MicrosoftCSharpPDF from '../assets/certificates/UI.png';
import React, { useState } from 'react';

const Certificates = () => {
  const [showModal, setShowModal] = useState(false);
const [activePdf, setActivePdf] = useState(null);
const [rotation, setRotation] = useState(0); // rotation in degrees


  const certificates = [
   /*  {
      id: 1,
      title: 'Microsoft Certified: C# Developer',
      issuer: 'Microsoft',
      date: 'August 2024',
      link: '#',
      icon: <MicrosoftLogo />,
      color: 'linear-gradient(135deg, #060404, #0664b0)',
      badge: 'Professional'
    }, */
    {
    id: 1,
    title: 'Microsoft Certified: C# Developer',
    issuer: 'Microsoft',
    date: 'August 2024',
    type: 'pdf',
    file: MicrosoftCSharpPDF,
    icon: <MicrosoftLogo />,
    color: 'linear-gradient(135deg, #060404, #0664b0)',
    badge: 'Professional'
  },
    {
      id: 2,
      title: 'Responsive Web Design Certification',
      issuer: 'freeCodeCamp',
      date: 'February 27, 2025',
      type: 'link',
      link: 'https://freecodecamp.org/certification/fcc7d389d15-8fce-4922-baaa-9e978e349a13/responsive-web-design',
      icon: freeCodeCampLogo,
      color: 'linear-gradient(135deg, #0a0a23, #3b3b4f)',
      badge: 'Expert'
    },
    {
      id: 3,
      title: ' Android Development',
      issuer: 'Udacity',
      date: 'September 1, 2024',
      type: 'link',
      link: 'http://www.udacity.com/certificate/e/8acbdaa6-62cf-11ef-9bfe-e3aca069aa02',
      icon: UdacityLogo,
      color: 'linear-gradient(135deg, #ffffff, #ffffff)',
      border:'2px solid cyan',
      badge: 'Intermediate'
    },


    
    {
      id: 4,
      title: 'Programming Fundamentals  ',
      issuer: 'Udacity',
      date: 'August 25, 2024',
      type: 'link',
      link: 'http://www.udacity.com/certificate/e/ae256ce2-5d52-11ef-9b12-f301b3dd5329',
      icon: UdacityLogo,
      color: 'linear-gradient(135deg, #ffffff, #ffffff)',
      border:'2px solid cyan',
      badge: 'Intermediate'
    }
  ];

  return (
    <section id="certificates" className="section-padding certificates-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Verified credentials from recognized platforms that validate my technical expertise
          </p>
        </div>
        
        <div className="row g-4">
          {certificates.map((cert) => (
            <div 
              className="col-md-6 col-lg-4" 
              key={cert.id}
              data-aos="zoom-in"
              data-aos-delay={cert.id * 100}
            >
              
<div className="certificate-card">
  <div className="certificate-header" style={{ background: cert.color }}>
    <div className="certificate-logo-container">
      {typeof cert.icon === 'string' ? (
        <img
          src={cert.icon}
          alt={`${cert.issuer} logo`}
          className={`certificate-logo ${
            cert.issuer.toLowerCase().includes('freecodecamp') ? 'freecodecamp' :
            cert.issuer.toLowerCase().includes('udacity') ? 'udacity' : ''
          }`}
        />
      ) : (
        <div className="certificate-icon">{cert.icon}</div>
      )}
    </div>
  </div>

  <div className="certificate-content">
    <div className="certificate-meta-row">
      <span className="certificate-badge">{cert.badge}</span>
      <span className="certificate-date">{cert.date}</span>
    </div>
    
    <h5 className="certificate-title">{cert.title}</h5>
    
    <p className="certificate-issuer">
      <i className="bi bi-building me-1"></i>
      {cert.issuer}
    </p>
    
   {cert.type === 'link' && (
  <a
    href={cert.link}
    target="_blank"
    rel="noopener noreferrer"
    className="certificate-link"
  >
    View Credential
    <i className="bi bi-arrow-up-right"></i>
  </a>
)}

{cert.type === 'pdf' && (
  <button
  className="certificate-link modal-trigger"
  onClick={() => {
    setActivePdf(cert.file);
    setShowModal(true);
  }}
>
  View Certificate
  <i className="bi bi-eye"></i>
</button>

)}


  </div>
</div>
            </div>
          ))}
        </div>
        
        <div
  className="text-center mt-5"
  data-aos="fade-up"
  data-aos-delay="400"
>
  <a
    href="https://github.com/NatnaelAbreham"
    target="_blank"
    rel="noopener noreferrer"
    className="modern-cta-btn"
  >
    <i className="bi bi-github"></i>
    <span>Explore My Projects</span>
    <i className="bi bi-arrow-right-short arrow"></i>
  </a>
</div>
      </div>

{showModal && (
  <div
    className="certificate-modal-overlay"
    onClick={() => setShowModal(false)}
  >
    <div
      className="certificate-modal"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        className="modal-close"
        onClick={() => setShowModal(false)}
      >
        &times;
      </button>

      {/* Rotate Controls */}
      <div className="certificate-modal-controls">
        <button
          className="rotate-btn"
          onClick={() => setRotation((prev) => prev - 90)}
        >
          ⟲
        </button>
        <button
          className="rotate-btn"
          onClick={() => setRotation((prev) => prev + 90)}
        >
          ⟳
        </button>
      </div>

      {/* Certificate Image */}
      <img
        src={activePdf}
        alt="Certificate Preview"
        className="certificate-modal-image"
        style={{ transform: `rotate(${rotation}deg)` }}
        onContextMenu={(e) => e.preventDefault()} // disables right-click
        draggable={false} // disables drag
      />
    </div>
  </div>
)}




    </section>
  );
};

export default Certificates;
