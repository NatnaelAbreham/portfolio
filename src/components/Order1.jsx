import React, { useState } from "react";
import { 
  FaBriefcase, FaGlobe, FaStar, FaExternalLinkAlt, FaSearch,
  FaCode, FaLaptopCode, FaDesktop, FaShoppingBag, FaRocket, 
  FaChartLine, FaMobileAlt, FaShieldAlt, FaPalette,
  FaClock, FaCheckCircle, FaUsers, FaLock, FaTachometerAlt
} from "react-icons/fa";
import { SiFiverr, SiUpwork, SiFreelancer, SiToptal } from "react-icons/si";

import "../styles/order.css"; 

const Order = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const platforms = [
    {
      id: "fiverr",
      name: "Fiverr",
      icon: <SiFiverr />,
      color: "#1DBF73",
      gradient: "linear-gradient(135deg, #1DBF73, #0fa15f)",
      description: "Premium freelance services with 5-star ratings",
      features: ["24/7 Support", "Money-Back Guarantee", "Fast Delivery"],
      gigs: [
        { 
          id: 1, 
          title: "Full-Stack Web Development", 
          price: "500", 
          currency: "$",
          unit: "starting at",
          rating: 5, 
          reviews: 127,
          delivery: "7 Days",
          tags: ["React", "Node.js", "MongoDB", "Express"], 
          icon: <FaCode />,
          isPopular: true,
          features: ["Complete MERN Stack", "API Integration", "Database Design", "Deployment"]
        },
        { 
          id: 2, 
          title: "Frontend UI/UX Development", 
          price: "300", 
          currency: "$",
          unit: "starting at",
          rating: 4.9, 
          reviews: 89,
          delivery: "5 Days",
          tags: ["React", "Bootstrap", "Figma", "Responsive"], 
          icon: <FaLaptopCode />,
          isPopular: false,
          features: ["Modern UI Design", "Responsive Layout", "Performance Optimized", "Cross-browser"]
        },
      ],
      link: "https://fiverr.com/yourprofile"
    },
    {
      id: "upwork",
      name: "Upwork",
      icon: <SiUpwork />,
      color: "#6FDA44",
      gradient: "linear-gradient(135deg, #6FDA44, #5ac738)",
      description: "Professional enterprise solutions",
      features: ["Enterprise Grade", "Long-term Contracts", "Team Collaboration"],
      gigs: [
        { 
          id: 3, 
          title: "Enterprise Web Application", 
          price: "5,000", 
          currency: "$",
          unit: "project based",
          rating: 5, 
          reviews: 42,
          delivery: "30 Days",
          tags: ["Scalable", "Cloud", "Microservices", "DevOps"], 
          icon: <FaChartLine />,
          isPopular: true,
          features: ["Scalable Architecture", "Cloud Deployment", "CI/CD Pipeline", "Team Training"]
        },
        { 
          id: 4, 
          title: "E-commerce Development", 
          price: "3,000", 
          currency: "$",
          unit: "starting at",
          rating: 4.9, 
          reviews: 63,
          delivery: "21 Days",
          tags: ["Shopify", "WooCommerce", "Payment", "Inventory"], 
          icon: <FaShoppingBag />,
          isPopular: false,
          features: ["Payment Integration", "Inventory Management", "SEO Optimized", "Security"]
        },
      ],
      link: "https://upwork.com/freelancers/yourprofile"
    },
    {
      id: "freelancer",
      name: "Freelancer",
      icon: <SiFreelancer />,
      color: "#29b2fe",
      gradient: "linear-gradient(135deg, #29b2fe, #0d8fe6)",
      description: "Flexible project-based work",
      features: ["Milestone Payments", "Project Management", "Global Reach"],
      gigs: [
        { 
          id: 5, 
          title: "Mobile App Development", 
          price: "2,500", 
          currency: "$",
          unit: "project based",
          rating: 4.8, 
          reviews: 56,
          delivery: "14 Days",
          tags: ["React Native", "iOS", "Android", "Firebase"], 
          icon: <FaMobileAlt />,
          isPopular: true,
          features: ["Cross-platform", "App Store Ready", "Push Notifications", "Analytics"]
        },
      ],
      link: "https://freelancer.com/u/yourprofile"
    }
  ];

  // Filter gigs
  const filteredGigs = platforms.reduce((acc, platform) => {
    if (selectedPlatform === "all" || selectedPlatform === platform.id) {
      const gigs = platform.gigs.filter(
        g =>
          g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          g.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      if (gigs.length) acc.push({ ...platform, gigs });
    }
    return acc;
  }, []);

  return (
    <section id="order" className="order-section">
      <div className="container">
        {/* Header with section styling */}
        <div className="section-header">
          <h2 className="section-title">
            Order My <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">
            Hire me through trusted freelance platforms. Each gig comes with 100% satisfaction guarantee, 
            professional delivery, and ongoing support.
          </p>
        </div>

        {/* Order wrapper with glass effect */}
        <div className="order-wrapper">
          {/* Search & Filter with modern styling */}
          <div className="row mb-5 align-items-center g-3">
            <div className="col-md-5">
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-transparent border-end-0">
                  <FaSearch className="text-muted" />
                </span>
                <input 
                  type="text" 
                  className="form-control border-start-0 ps-0 bg-transparent"
                  placeholder="Search services or skills..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  style={{
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>
            </div>

            <div className="col-md-7">
              <div className="d-flex flex-wrap gap-2 justify-content-md-end">
                <button
                  className={`btn ${selectedPlatform === 'all' ? 'btn-primary-custom' : 'btn-outline-secondary'}`}
                  onClick={() => setSelectedPlatform("all")}
                >
                  <FaGlobe className="me-2" /> All Platforms
                </button>
                {platforms.map(p => (
                  <button
                    key={p.id}
                    className={`btn ${selectedPlatform === p.id ? 'btn-primary-custom' : ''}`}
                    style={selectedPlatform === p.id ? {} : {
                      backgroundColor: 'var(--tag-bg)',
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-secondary)'
                    }}
                    onClick={() => setSelectedPlatform(p.id)}
                  >
                    {p.icon} <span className="ms-2">{p.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="d-flex flex-wrap gap-4 justify-content-center">
                <div className="text-center">
                  <h3 className="gradient-text mb-0">50+</h3>
                  <small className="text-muted">Projects Completed</small>
                </div>
                <div className="text-center">
                  <h3 className="gradient-text mb-0">100%</h3>
                  <small className="text-muted">Satisfaction Rate</small>
                </div>
                <div className="text-center">
                  <h3 className="gradient-text mb-0">24/7</h3>
                  <small className="text-muted">Support Available</small>
                </div>
                <div className="text-center">
                  <h3 className="gradient-text mb-0">∞</h3>
                  <small className="text-muted">Revisions</small>
                </div>
              </div>
            </div>
          </div>

          {/* Gigs Grid with enhanced cards */}
          {filteredGigs.length > 0 ? (
            <div className="order-grid">
              {filteredGigs.flatMap(platform => 
                platform.gigs.map(gig => (
                  <div key={gig.id} className="gig-card">
                    {gig.isPopular && (
                      <div className="popular-badge">
                        <FaRocket className="me-1" /> Most Popular
                      </div>
                    )}
                    <div className="gig-card-inner">
                      {/* Card Header */}
                      <div className="card-header">
                        <div className="d-flex align-items-center gap-3">
                          <div className="platform-icon" style={{background: platform.gradient}}>
                            {platform.icon}
                          </div>
                          <div>
                            <span className="text-muted small">Available on</span>
                            <h6 className="mb-0">{platform.name}</h6>
                          </div>
                        </div>
                        <div className="gig-badge">
                          <FaClock className="me-1" /> {gig.delivery} Delivery
                        </div>
                      </div>

                      {/* Card Title & Icon */}
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h5>{gig.title}</h5>
                        <div style={{
                          background: `${platform.color}20`,
                          color: platform.color,
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.2rem'
                        }}>
                          {gig.icon}
                        </div>
                      </div>

                      {/* Features List */}
                      <ul className="gig-features">
                        {gig.features.map((feature, index) => (
                          <li key={index}>
                            <FaCheckCircle className="text-success" /> {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="mb-4">
                        {gig.tags.map((tag, i) => (
                          <span key={i} className="gig-badge me-2 mb-2">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Rating and Price */}
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <div className="rating">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} className={i < Math.floor(gig.rating) ? 'text-warning' : 'text-muted'} />
                            ))}
                            <span className="rating-text">
                              {gig.rating} ({gig.reviews} reviews)
                            </span>
                          </div>
                        </div>
                        <div className="price-display">
                          <span className="price-main">
                            {gig.currency}{gig.price}
                          </span>
                          <span className="price-unit">/{gig.unit}</span>
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="card-footer">
                        <div className="delivery-time">
                          <FaClock /> <span>{gig.delivery} Delivery</span>
                        </div>
                        <div className="text-muted small">
                          <FaLock className="me-1" /> Secure Payment
                        </div>
                      </div>

                      {/* Order Button */}
                      <a 
                        href={platform.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-order mt-4"
                      >
                        <FaExternalLinkAlt /> Order Now
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>
          ) : (
            /* Empty State */
            <div className="order-empty-state">
              <div className="empty-icon">
                <FaSearch size={64} />
              </div>
              <h4 className="mb-3">No services found</h4>
              <p className="text-muted mb-4">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button 
                className="btn btn-secondary-custom"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedPlatform('all');
                }}
              >
                <FaGlobe className="me-2" /> Show All Services
              </button>
            </div>
          )}

          {/* Trust Badge */}
          <div className="text-center mt-5 pt-4 border-top border-subtle">
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
              <div className="d-flex align-items-center gap-2">
                <FaShieldAlt className="text-success" />
                <small>Secure Payments</small>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaCheckCircle className="text-primary" />
                <small>100% Satisfaction</small>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaUsers className="text-info" />
                <small>50+ Happy Clients</small>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaClock className="text-warning" />
                <small>On-time Delivery</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;