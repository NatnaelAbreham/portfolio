import React, { useState } from "react";
import "../styles/order.css";
import { FaStar, FaExternalLinkAlt, FaSearch, FaBriefcase, FaGraduationCap, FaLaptopCode, FaGlobe, FaChartLine } from "react-icons/fa";
import { SiFiverr, SiUpwork, SiFreelancer } from "react-icons/si";

const Order = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const sharedDescription = "Develop and maintain website, mobile and desktop applications";
  const sharedFeatures = ["Responsive Design", "SEO Optimized", "Fast Performance", "Clean Code"];
  const sharedTags = [
    { name: "Business", icon: <FaBriefcase /> },
    { name: "Portfolio", icon: <FaGlobe /> },
    { name: "Education", icon: <FaGraduationCap /> },
    { name: "Portal", icon: <FaLaptopCode /> },
    { name: "SaaS", icon: <FaChartLine /> }
  ];

  const platforms = [
    {
      id: "fiverr",
      name: "Fiverr",
      icon: <SiFiverr />,
      color: "#1DBF73",
      gradient: "linear-gradient(90deg,#1DBF73,#17a85f)",
      rating: 5,
      price: "From $10",
      link: "https://www.fiverr.com/natnaelcodes",
      tags: sharedTags,
      description: sharedDescription,
      features: sharedFeatures,
      badge: "Order Now"
    },
    {
      id: "upwork",
      name: "Upwork",
      icon: <SiUpwork />,
      color: "#6FDA44",
      gradient: "linear-gradient(90deg,#6FDA44,#4caf2e)",
      rating: 5,
      price: "From $10",
      link: "https://www.upwork.com/freelancers/~015d3bc095a88008db?mp_source=share",
      tags: sharedTags,
      description: sharedDescription,
      features: sharedFeatures,
      badge: "Order Now"
    },
    {
      id: "freelancer",
      name: "Freelancer",
      icon: <SiFreelancer />,
      color: "#29B2FE",
      gradient: "linear-gradient(90deg,#29B2FE,#0088ff)",
      rating: 5,
      price: "From $10",
      link: "https://www.freelancer.com/u/nattytech?frm=nattytech&sb=t",
      tags: sharedTags,
      description: sharedDescription,
      features: sharedFeatures,
      badge: "Order Now"
    }
  ];

  const filteredPlatforms = platforms.filter(platform => {
    if (selectedPlatform !== "all" && platform.id !== selectedPlatform) return false;
    if (!searchQuery) return true;
    return (
      platform.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      platform.tags.some(tag => tag.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <section id="order" className="order-section py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="section-title">Order My Services</h2>
          <p className="text-muted">
            Hire me through trusted freelance platforms. Each gig comes with 100% satisfaction guarantee.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="row mb-4 align-items-center g-2">
          <div className="col-md-4">
          

            <div className="input-group search-group">
  <span className="input-group-text">
    <FaSearch />
  </span>

  <input
    type="text"
    className="form-control"
    placeholder="Search services or skills..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
</div>

          </div>
          <div className="col-md-8 d-flex flex-wrap gap-2 justify-content-md-end">
            <button
              className={`btn ${selectedPlatform === "all" ? "btn-success" : "btn-outline-secondary"}`}
              onClick={() => setSelectedPlatform("all")}
            >
              All Platforms
            </button>
            {platforms.map(p => (
              <button
                key={p.id}
                className={`btn ${selectedPlatform === p.id ? "btn-primary" : "btn-outline-secondary"}`}
                style={selectedPlatform === p.id ? { backgroundColor: p.color, borderColor: p.color } : {}}
                onClick={() => setSelectedPlatform(p.id)}
              >
                {p.icon} <span className="ms-1">{p.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Gigs Grid */}
        <div className="row g-4">
          {filteredPlatforms.map(platform => (
            <div key={platform.id} className="col-12 col-md-6 col-lg-4">
              <div className="card gig-card h-100">
                
                {/* Badge */}
                {platform.badge && <div className="gig-badge">{platform.badge}</div>}

                <div className="card-body d-flex flex-column">

                  {/* Header */}
                  <div className="gig-header">
                    <div className="platform-pill" style={{ background: platform.gradient }}>
                      {platform.icon} {platform.name}
                    </div>
                  </div>

                  {/* Rating + Price */}
                  <div className="rating-price mb-2 d-flex justify-content-between align-items-center">
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} style={{ opacity: i < Math.round(platform.rating) ? 1 : 0.25 }} />
                      ))}
                      <span className="ms-2 small">{platform.rating}</span>
                    </div>
                    <div className="gig-price gradient-text">{platform.price}</div>
                  </div>

                  {/* Short Description */}
                  <p className="gig-description mb-3">{platform.description}</p>

                  {/* Features */}
                  <ul className="gig-features mb-2">
                    {platform.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>

                  {/* Tags with icons */}
                  <div className="gig-tags mb-3">
                    {platform.tags.map((tag, i) => (
                      <span key={i} className="gig-tag">
                        {tag.icon} <span className="tag-name">{tag.name}</span>
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gradient d-flex justify-content-center align-items-center gap-2 mt-auto"
                  >
                    Order on {platform.name} <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Order;
