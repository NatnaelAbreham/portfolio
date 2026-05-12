import { Code, Layout, Database, Zap } from "lucide-react";
import "../styles/services.css";

const services = [
  {
    icon: <Layout size={28} />,
    title: "Modern Web Design",
    desc: "Clean, responsive, and visually engaging interfaces designed to create strong first impressions and improve user experience."
  },
  {
    icon: <Code size={28} />,
    title: "Full Stack Development",
    desc: "Scalable web applications using modern technologies like React, Node.js, and .NET with clean architecture."
  },
  {
    icon: <Database size={28} />,
    title: "API & Backend Systems",
    desc: "Secure and efficient APIs, authentication systems, and database design for real-world applications."
  },
  {
    icon: <Zap size={28} />,
    title: "Performance Optimization",
    desc: "Fast-loading, optimized websites with improved SEO, accessibility, and smooth user experience."
  }
];

const Services = () => {
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">What I Can Do</h2>
          <p className="section-subtitle">
            I build modern, scalable, and high-performing digital products that
            help businesses grow and stand out.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;