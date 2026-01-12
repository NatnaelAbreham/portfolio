const Certificates = () => {
  const certificates = [
    {
      title: 'Microsoft Certified: C# Developer',
      issuer: 'Microsoft',
      date: 'Aug 2024',
      link: '#', // replace with real link or file
      icon: 'bi-microsoft',
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: '2023',
      link: '#',
      icon: 'bi-code-slash',
    },
    {
      title: 'Programming Fundamentals & Android Development',
      issuer: 'Udacity',
      date: '2022',
      link: '#',
      icon: 'bi-mortarboard',
    },
  ]

  return (
    <section id="certificates" className="section-padding certificates-section">
      <div className="container">
        <h2 className="section-title text-center mb-5">
          Certifications
        </h2>

        <div className="row g-4">
          {certificates.map((cert, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="certificate-card" data-animate>
                <div className="certificate-header">
                  <i className={`bi ${cert.icon}`} />
                </div>

                <h5 className="certificate-title">
                  {cert.title}
                </h5>

                <p className="certificate-meta">
                  {cert.issuer} • {cert.date}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  View Credential
                  <i className="bi bi-arrow-up-right ms-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
