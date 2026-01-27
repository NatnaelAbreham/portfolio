import React from 'react';
import '../styles/certificates.css';
import { MicrosoftLogo } from '../icons/MicrosoftLogo';
import UdacityLogo from '../assets/udacity.jpg';
import freeCodeCampLogo from '../assets/freecodecamplogo.jpg';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Microsoft Certified: C# Developer',
      issuer: 'Microsoft',
      date: 'August 2024',
      link: '#',
      icon: <MicrosoftLogo />,
      color: 'linear-gradient(135deg, #060404, #0664b0)',
      badge: 'Professional'
    },
    {
      id: 2,
      title: 'Responsive Web Design Certification',
      issuer: 'freeCodeCamp',
      date: 'December 2023',
      link: '#',
      icon: freeCodeCampLogo,
      color: 'linear-gradient(135deg, #0a0a23, #3b3b4f)',
      badge: 'Expert'
    },
    {
      id: 3,
      title: ' Android Development',
      issuer: 'Udacity',
      date: 'June 2022',
      link: '#',
      icon: UdacityLogo,
      color: 'linear-gradient(135deg, #ffffff, #ffffff)',
      border:'2px solid cyan',
      badge: 'Intermediate'
    },
    {
      id: 4,
      title: 'Programming Fundamentals  ',
      issuer: 'Udacity',
      date: 'June 2022',
      link: '#',
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
    
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="certificate-link"
    >
      View Credential
      <i className="bi bi-arrow-up-right"></i>
    </a>
  </div>
</div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="400">
          <a 
            href="#contact" 
            className="btn btn-primary btn-lg px-5 py-3 rounded-pill"
            style={{
              background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
              border: 'none',
              fontWeight: '600'
            }}
          >
            <i className="bi bi-download me-2"></i>
            Download All Certificates
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
