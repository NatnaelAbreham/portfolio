import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/projects.css"; 
import a from "../assets/a.png"
import b from "../assets/b.png"
import c from "../assets/c.png"

const projectsData = [
  {
    title: "Scientific Calculator",
    category: "Desktop",
    description:
      "Advanced calculator supporting scientific functions and complex equations.",
    tech: ["C#", ".NET", "WinForms"],
    image: a,
  },
  {
    title: "Age Calculator",
    category: "Web",
    description:
      "Modern age calculator supporting Ethiopian and Gregorian calendars.",
    tech: ["React", "CSS", "JavaScript"],
    image: b,
  },
  {
    title: "Puzzle Game",
    category: "Game",
    description:
      "Interactive puzzle game with multiple levels and increasing difficulty.",
    tech: ["C#", ".NET"],
    image: c,
  },
  {
    title: "Hotel Management System",
    category: "Desktop",
    description:
      "Complete hotel system handling reservations, billing, and reports.",
    tech: ["C#", "SQL Server"],
    image: a,
  },
];

const categories = ["All", "Web", "Desktop", "Game"];

const Projects = () => {
  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === active);

  return (
    <section id = "projects" className="projects-section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            A selection of projects that highlight my skills and experience.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="projects-filters mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${
                active === cat ? "active" : ""
              }`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="row g-4">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="col-lg-4 col-md-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-card">
                <div
                  className="project-image"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>

                <div className="project-content">
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((t, i) => (
                      <span key={i}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
