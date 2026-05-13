import "../styles/order.css";
import {
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";

import { SiFiverr, SiUpwork, SiFreelancer } from "react-icons/si";

const platforms = [
  {
    name: "Fiverr",
    icon: <SiFiverr />,
    color: "#1DBF73",
    link: "https://www.fiverr.com/natnaelcodes",
  },
  {
    name: "Upwork",
    icon: <SiUpwork />,
    color: "#14A800",
    link: "https://www.upwork.com/freelancers/~015d3bc095a88008db",
  },
  {
    name: "Freelancer",
    icon: <SiFreelancer />,
    color: "#29B2FE",
    link: "https://www.freelancer.com/u/nattytech",
  },
];

const capabilities = [
  "Full-Stack Web Applications",
  "SaaS Platforms",
  "Admin Dashboards",
  "REST API Development",
  "System Architecture",
];

const Order = () => {
  return (
    <section id="order" className="order-section section-padding">
      <div className="container">

        {/* HEADER */}
        <div className="order-header">
          <h2>Availability & Collaboration</h2>
          <p>
            I work with startups and businesses to design and build
            scalable digital products and engineering systems.
          </p>
        </div>

        {/* GRID */}
        <div className="order-grid">

          {/* LEFT - CAPABILITIES */}
          <div className="order-card primary">
            <h3>What I Build</h3>

            <div className="capability-list">
              {capabilities.map((item, i) => (
                <div key={i} className="capability-item">
                  <FaCheckCircle />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="primary-btn">
              Start a Project
            </a>
          </div>

          {/* RIGHT - PLATFORMS */}
          <div className="order-card">
            <h3>Freelance Platforms</h3>

            <div className="platform-list">
              {platforms.map((p, i) => (
                <a
                  key={i}
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="platform-item"
                  style={{ borderColor: p.color }}
                >
                  <span className="platform-icon" style={{ color: p.color }}>
                    {p.icon}
                  </span>

                  <span className="platform-name">{p.name}</span>

                  <FaExternalLinkAlt className="external-icon" />
                </a>
              ))}
            </div>

            <p className="note">
              Prefer direct collaboration for faster communication
              and more flexible pricing.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Order;