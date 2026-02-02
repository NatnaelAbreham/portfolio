import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/projects.css";
import useIsMobile from "./IsMobile";

import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";


import c1 from "../assets/car/one.png";
import c2 from "../assets/car/two.png";
import c3 from "../assets/car/three.png";
import c4 from "../assets/car/four.png";

/* =========================
   Data
========================= */

const projectsData = [
  {
    id: 1,
    title: "Scientific Calculator",
    category: "Desktop",
    description:
      "Advanced calculator supporting scientific functions and complex equations.",
    tech: ["C#", ".NET", "WinForms"],
    images: [a, b, c],
    details:
      "This calculator features scientific notation, unit conversions, and a responsive UI.",
  },
  {
    id: 2,
    title: "Vehicle Marketplace Platform",
    category: "Web",
    description:
      "A modern and responsive car buy and sell website.  ",
    tech: ["React", "CSS", "JavaScript", "Bootstrap", "MySQL", "PHP"],
    images: [c1, c2, c3,c4],
    details:
      "A modern and responsive car buy and sell website designed to provide a seamless vehicle marketplace experience. The platform allows users to browse, search, and list vehicles with detailed specifications, pricing, and high-quality visuals. Built with a clean UI, dark mode support, smooth transitions, and mobile-first responsiveness, the website ensures excellent usability across all devices. Ideal for dealerships, individual sellers, and automotive marketplaces looking for a professional and scalable online presence.",
  },
  {
    id: 3,
    title: "Puzzle Game",
    category: "Game",
    description:
      "Interactive puzzle game with multiple levels and increasing difficulty.",
    tech: ["C#", ".NET"],
    images: [c, a],
    details:
      "Engaging puzzle game with 50+ levels, power-ups, and global leaderboards.",
  },
];

const categories = ["All", "Web", "Desktop", "Game"];

/* =========================
   Animations
========================= */

const cardMotion = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 30, scale: 0.95 },
  transition: { duration: 0.35, ease: "easeOut" },
};

export default function Projects() {
  const isMobile = useIsMobile();
  const [active, setActive] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);
  const [cardImageIndex, setCardImageIndex] = useState({});

  const filteredProjects =
    active === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === active);

  /* =========================
     Modal helpers
  ========================= */

  const openModal = (project, cardIdx) => {
    setSelectedProject(project);
    setModalIndex(cardImageIndex[cardIdx] || 0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIndex(0);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setModalIndex(
      (i) => (i + 1) % selectedProject.images.length
    );
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setModalIndex(
      (i) =>
        (i - 1 + selectedProject.images.length) %
        selectedProject.images.length
    );
  };

  /* =========================
     Render
  ========================= */

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects that highlight my skills and experience.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="d-flex justify-content-center gap-2 flex-wrap mb-4">
  {categories.map((cat) => (
    <button
      key={cat}
      className={`filter-btn ${active === cat ? "active" : ""}`}
      onClick={() => setActive(cat)}
    >
      {cat}
    </button>
  ))}
</div>

        {/* Grid (Bootstrap controlled) */}
        <div className="row g-4 justify-content-center">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const imgIdx = cardImageIndex[idx] || 0;

              return (
                <motion.div
                  key={project.id}
                  className="col-12 col-sm-6 col-lg-4 d-flex"
                  layout
                  {...cardMotion}
                >
                  <div
                    className="project-card w-100"
                    onClick={() => openModal(project, idx)}
                  >
                    {/* Image */}
                    <div className="project-image-wrapper">
                      <img
                        src={project.images[imgIdx]}
                        alt={project.title}
                      />

                      {project.images.length > 1 && (
                        <>
                          <div className="view-images-btn">
                            View {project.images.length} Images
                          </div>

                          <div className="image-dots">
                            {project.images.map((_, i) => (
                              <span
                                key={i}
                                className={i === imgIdx ? "active" : ""}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCardImageIndex((prev) => ({
                                    ...prev,
                                    [idx]: i,
                                  }));
                                }}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Content */}
                    <div className="project-content">
                      <div className="project-header">
                        <h5>{project.title}</h5>
                        <span className="project-category">
                          {project.category}
                        </span>
                      </div>

                      <p>{project.description}</p>

                      <div className="project-tech">
                        {project.tech.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>

                      <button className="view-project-btn">
                        View Project Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                className="modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
              />

              <motion.div
                className="project-modal"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="modal-header">
                  <div>
                    <h3 className="modal-title">
                      {selectedProject.title}
                    </h3>
                    <span className="modal-category">
                      {selectedProject.category}
                    </span>
                  </div>

                  <button
                    className="modal-close"
                    onClick={closeModal}
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Body */}
                <div className="modal-content-wrapper">
                  <div className="modal-content">
                    {/* Gallery */}
                    <div className="modal-gallery">
                      <img
                        src={selectedProject.images[modalIndex]}
                        alt=""
                        className="modal-main-image"
                      />

                      {selectedProject.images.length > 1 && (
                        <>
                          <button
                            className="nav-btn prev-btn"
                            onClick={prevImage}
                          >
                            <ChevronLeft size={20} />
                          </button>

                          <button
                            className="nav-btn next-btn"
                            onClick={nextImage}
                          >
                            <ChevronRight size={20} />
                          </button>

                          <div className="thumbnail-container">
                            {selectedProject.images.map((img, i) => (
                              <img
                                key={i}
                                src={img}
                                className={`thumbnail ${
                                  i === modalIndex ? "active" : ""
                                }`}
                                onClick={() => setModalIndex(i)}
                                alt=""
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Details */}
                    <div className="modal-details">
                      <h4>Project Description</h4>
                      <p>{selectedProject.details}</p>

                      <h4>Technologies Used</h4>
                      <div className="modal-tech">
                        {selectedProject.tech.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="modal-footer">
                  <button
                    className="secondary-btn"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button className="primary-btn">
                    View Live Demo
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}