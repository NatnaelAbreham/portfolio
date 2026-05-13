import {
  Code2,
  Layers3,
  DatabaseZap,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import "../styles/services.css";

const services = [
  {
    icon: <Layers3 size={26} />,
    number: "01",
    title: "Experience Design",
    desc: "Modern interfaces crafted with clean structure, smooth interactions, and conversion-focused user experience.",
    tags: ["UI/UX", "Responsive", "Motion"],
  },
  {
    icon: <Code2 size={26} />,
    number: "02",
    title: "Frontend Engineering",
    desc: "High-performance applications built with React and modern frontend architecture for speed and scalability.",
    tags: ["React", "Performance", "Scalable"],
  },
  {
    icon: <DatabaseZap size={26} />,
    number: "03",
    title: "Backend & APIs",
    desc: "Secure backend systems, APIs, authentication, and database architecture designed for real-world products.",
    tags: ["API", "Auth", "Database"],
  },
  {
    icon: <Sparkles size={26} />,
    number: "04",
    title: "Optimization & SEO",
    desc: "Faster load times, accessibility improvements, and technical SEO enhancements for better visibility.",
    tags: ["SEO", "Accessibility", "Speed"],
  },
];

const Services = () => {
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="services-top" data-aos="fade-up">
          <div>
            <span className="services-label">Services</span>

            <h2 className="services-title">
              Building digital experiences that feel
              <span> modern, fast, and future-ready.</span>
            </h2>
          </div>

          {/* <p className="services-description">
            I create premium web experiences with modern design systems,
            scalable development, and performance-focused architecture.
          </p> */}

           <div className="services-header-right" data-aos="fade-left" data-aos-delay="100">
            <p className="services-description">
              I architect and design premium digital experiences that don't just look ahead of the curve — 
              they define it. Built with <strong>performance, AI-integration, and spatial computing</strong> in mind.
            </p>
            <div className="services-stats">
              <div className="stat">
                <span className="stat-number">0.8s</span>
                <span className="stat-label">Avg. Load Time</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Lighthouse Score</span>
              </div>
            </div>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              className="service-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="service-top">
                <div className="service-icon">{service.icon}</div>
                <span className="service-number">{service.number}</span>
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>

              <div className="service-footer">
                <div className="service-tags">
                  {service.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>

                <div className="service-arrow">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;