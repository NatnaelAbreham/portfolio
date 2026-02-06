/* import React, { useState } from "react"; */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/projects.css";
import useIsMobile from "./IsMobile";

import desktop1 from "../assets/desktop/desktop1.png";
import desktop2 from "../assets/desktop/desktop2.png";

import dashboard1 from "../assets/dashboard/dashboard1.png";
import dashboard2 from "../assets/dashboard/dashboard2.png";

import automation1 from "../assets/automation/automation1.png";
import automation2 from "../assets/automation/automation2.png";

import calendar1 from "../assets/calendar/calendar1.png";
import calendar2 from "../assets/calendar/calendar2.png";

import c1 from "../assets/car/one.png";
import c2 from "../assets/car/two.png";
import c3 from "../assets/car/three.png";
import c4 from "../assets/car/four.png";


import fcy1 from "../assets/fcy/fcy1.png";
import fcy2 from "../assets/fcy/fcy2.png";
import fcy3 from "../assets/fcy/fcy3.png";
import fcy4 from "../assets/fcy/fcy4.png";
import fcy5 from "../assets/fcy/fcy5.png";
import fcy6 from "../assets/fcy/fcy6.png";
import fcy7 from "../assets/fcy/fcy7.png";
import fcy8 from "../assets/fcy/fcy8.png";
import fcy9 from "../assets/fcy/fcy9.png";
import fcy10 from "../assets/fcy/fcy10.png";

import form1 from "../assets/form/form1.png";
import form2 from "../assets/form/form2.png";
import form3 from "../assets/form/form3.png";
import form4 from "../assets/form/form4.png";
import form5 from "../assets/form/form5.png";
import form6 from "../assets/form/form6.png";
import form7 from "../assets/form/form7.png";
import form8 from "../assets/form/form8.png";
import form9 from "../assets/form/form9.png";
import form10 from "../assets/form/form10.png";

import portal1 from "../assets/portal/portal1.png";
import portal2 from "../assets/portal/portal2.png";
import portal3 from "../assets/portal/portal3.png";
import portal4 from "../assets/portal/portal4.png";
import portal5 from "../assets/portal/portal5.png";

import payment1 from "../assets/payment/payment1.png";
import payment2 from "../assets/payment/payment2.png";
import payment3 from "../assets/payment/payment3.png";


import portfolio1 from "../assets/portfolio/portfolio1.png";
import portfolio2 from "../assets/portfolio/portfolio2.png";
import portfolio3 from "../assets/portfolio/portfolio3.png";

import calc1 from "../assets/calc/calc1.png";
import calc2 from "../assets/calc/calc2.png";
import calc3 from "../assets/calc/calc3.png";
import calc4 from "../assets/calc/calc4.png";
import calc5 from "../assets/calc/calc5.png";
import calc6 from "../assets/calc/calc6.png";
import calc7 from "../assets/calc/calc7.png";
import calc8 from "../assets/calc/calc8.png";
import calc9 from "../assets/calc/calc9.png";
import calc10 from "../assets/calc/calc10.png";

import game1 from "../assets/game/game10.jpg";
import game2 from "../assets/game/game2.jpg";
import game3 from "../assets/game/game3.jpg";
import game4 from "../assets/game/game4.jpg";
import game5 from "../assets/game/game5.jpg";
import game6 from "../assets/game/game6.jpg";
import game7 from "../assets/game/game7.jpg";
import game8 from "../assets/game/game8.jpg";
import game9 from "../assets/game/game9.jpg";
import game10 from "../assets/game/game1.jpg";

/* =========================
   Data
========================= */

const projectsData = [
  
  {
    id: 1,
    title: "Vehicle Marketplace Platform",
    category: "Web",
    description:
      "A modern and responsive car buy and sell website.  ",
    tech: ["React", "CSS", "JavaScript", "Bootstrap", "MySQL", "PHP"],
    images: [c1, c2, c3, c4],
    details:
      "A modern and responsive car buy and sell website designed to provide a seamless vehicle marketplace experience. The platform allows users to browse, search, and list vehicles with detailed specifications, pricing, and high-quality visuals. Built with a clean UI, dark mode support, smooth transitions, and mobile-first responsiveness, the website ensures excellent usability across all devices. Ideal for dealerships, individual sellers, and automotive marketplaces looking for a professional and scalable online presence.",
  },
  /* {
    id: 3,
    title: "Puzzle Game",
    category: "Game",
    description:
      "Interactive puzzle game with multiple levels and increasing difficulty.",
    tech: ["C#", ".NET"],
    images: [c, a],
    details:
      "Engaging puzzle game with 50+ levels, power-ups, and global leaderboards.",
  }, */
 
  {
    id: 2,
    title: "Back-Office Utility Portal",
    category: "Web",
    tech: ["ASP.NET MVC", "Javascript", "Microsoft SQL Server", "RESTful API", "Bootstrap", "JQuery"],
    description:
      "used for file management, foreign currency transactions, and control management.",
    images: [fcy1, fcy2, fcy3, fcy4, fcy5, fcy6, fcy7, fcy8, fcy9, fcy10],
    details:
      "The system supports multi-level approval workflows and role-based access control across branch, district, and head office levels. It is designed for comprehensive reporting, with the head office having dedicated roles such as Maker, Verifier, Approver, and Administrator, operating both directly and in synchronization with branches. The portal manages branch and currency information, daily exchange rates, and automatically calculates exchanged amounts and balances by integrating directly with the core banking system to produce sophisticated and reliable reports. It also includes issue tracking to ensure each branch operates only within its assigned district, and centralized link management for effective control and governance. The system integrates through BR Gateway, SOAP, and REST APIs, ensuring secure and reliable communication between services.",
  },

   {
    id: 3,
    title: "Dashboard",
    category: "web",
    description:
      "Modern full featured and interactive dashboard for real-time analytics and management.",
    tech: ["React.js", "Chart.js", "Javascript", "Tailwind CSS"],
    images: [dashboard1, dashboard2],
    details:
      "Developed a modern business website featuring an interactive dashboard for real-time analytics and management. The system provides: Data visualization & reports: Track performance metrics, KPIs, and trends in real-time. User & role management: Admins can manage users, assign roles, and control access. Responsive interface: Works seamlessly on desktop and mobile devices. Performance monitoring: Monitor business operations with interactive charts and tables.",
  },
  
   {
    id: 4,
    title: "Dynamic Form Builder",
    category: "web",
    description:
      "Dynamic form creation and response management platform.",
    tech: ["React.js", "Sql Server", "Asp.Net Core", "Tailwind CSS", "Rest API"],
    images: [form10,form1, form2, form3, form4, form5, form6, form7, form8, form9],
    details:
      "Developed a dynamic form creation and response management platform. Allows administrators to create customizable forms, manage visibility, and review submissions through an intuitive dashboard. Provides a clean and user-friendly interface for users to fill out forms efficiently. Designed to streamline internal data collection and automate workflows for organizations. Designed for send single and Bulk SMS. Showcases full-stack development skills, clean architecture, and responsive UI design.",
  },
  


  {
    id: 5,
    title: "Utility Management System",
    category: "web",
    description:
      "A comprehensive banking utility system designed to streamline user management, branch/district operations, and reporting.",
    tech: ["PHP", "Javascript", "JQuery", "Bootstrap", "MySQL"],
    images: [portal1, portal2, portal3, portal4, portal5],
    details:
      "Key Features: Role & district-based access: Makers can modify only branches within their assigned districts. User & link management: Add, delete, and bookmark links by category; CSV import for bulk registration.Dynamic forms & file attachments: Flexible row adjustments and up to three files per entry (one mandatory letter).Graphical reports & dashboards: Visual cards and graphs for quick insights.User history & auditing: Track branch transfers, mobile banking access, and complete user activity.Live search & export options: Download reports in PDF, Excel, Word, or print directly.Admin controls: Lock/unlock users, manage access, and monitor system activity.Secure authentication: Email-based login and password reset for all users.This system demonstrates advanced backend logic, interactive UI, and real-world enterprise workflow, making it ideal for banks and large-scale organizations.",
  },

  {
    id: 6,
    title: "Personal Portfolio Website",
    category: "web",
    description:
      "A modern and responsive personal portfolio website.",
    tech: ["React.js", "Javascript", "CSS", "Tailwind CSS", "HTML"],
    images: [portfolio1, portfolio2, portfolio3],
    details:
      "A modern and responsive personal portfolio website designed to showcase skills, projects, and professional experience. The site features a clean layout, clear visual hierarchy, smooth animations, and a mobile-first design. Built to highlight featured projects, technical expertise, and contact information, making it easy for clients and recruiters to understand value at a glance.", 
    
    },

     {
    id: 7,
    title: "Custom Calculator",
    category: "web",
    description:
      "Multi-functional custom calculator suite with advanced real-world applications:",
    tech: ["React.js", "Javascript", "CSS", "Tailwind CSS", "HTML"],
    images: [calc1, calc2, calc3, calc4, calc5, calc6, calc7, calc8, calc9, calc10],
    details:
      "Developed a multi-functional custom calculator suite with advanced real-world applications.", 
    
    },

    {
    id: 8,
    title: "Communication Automation Tool",
    category: "Business Tools",
    description:
      "Bulk Email and SMS Automation Tool",
    tech: ["PHP", "React.js", "Javascript",  "Bootstrap"],
    images: [automation2, automation1],
    details:
      "Developed a Bulk Email and SMS Automation Tool that allows users to send large-scale email and SMS campaigns efficiently using CSV-based recipient uploads. The system includes message preview functionality, real-time delivery progress tracking, and live status updates for sent, delivered, and failed emails.It supports automated processing, detailed delivery logs, and downloadable reports for audit and tracking purposes. The tool is designed for reliability, scalability, and ease of use, making it suitable for notifications, marketing campaigns, and system alerts.", 
    
    },

     {
    id: 9,
    title: "Game Suite",
    category: "Game",
    description:
      "collection of logic-based and educational games",
    tech: ["C#", "Java", "PHP", "React.js", "Javascript",  "Bootstrap"],
    images: [game1, game2, game3, game4, game5, game6, game7, game8, game9, game10],
    details:
      "Designed and developed a collection of logic-based AI mode and educational games focused on performance, clean UI, and reusable architecture.  Features include: Modular game engine structure, Dynamic scoring & rule-based logic, Responsive UI and state handling, Error handling and input validation.", 
    
    },


  {
    id: 10,
    title: "Desktop Application",
    category: "Desktop",
    description:
      "Desktop Dashboard & Admin Panel Apps with Real-time Analytics",
    tech: ["C#", "Java GUI"],
    images: [desktop1, desktop2],
    details:
      "Multi-module desktop application with separate pages for management, reporting, and configuration. Multi-page desktop UI, CRUD operations, Data validation, Modular architecture, Performance optimization and User-friendly workflows",
  },

  {
    id: 11,
    title: "Custom Calendar",
    category: "Desktop",
    description:
      "Designed to handle both Ethiopian and Gregorian calendars seamlessly",
    tech: ["C#", "Java GUI"],
    images: [calendar2, calendar1],
    details:
      "Designed to handle both Ethiopian and Gregorian calendars seamlessly. Whether you need to convert dates between these systems, calculate exact age, or manage events across calendar types, this tool is built for precision and usability.tantly convert dates between Gregorian and Ethiopian calendar systems, including leap year handling and 13-month support for the Ethiopian calendar.",
  },

   {
    id: 12,
    title: "Payment Integration",
    category: "Web",
    description:
      "Multi-Gateway Payment Integration",
    tech: ["RESTful API", ".NET", "Json"],
    images: [payment1, payment2, payment3],
    details:
      "Built a multi-gateway payment integration system that enables seamless processing across multiple payment providers. Includes secure API integration, transaction validation, error handling, and unified payment management.",
  },
];

const categories = ["All", "Web", "Mobile","Desktop", "Game","Business Tools"];

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
  const [showAll, setShowAll] = useState(false);
  const isMobile = useIsMobile();
  const [active, setActive] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);
  const [cardImageIndex, setCardImageIndex] = useState({});

  useEffect(() => {
  setShowAll(false);
}, [active]);

  const filteredProjects =
    active === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === active);
const visibleProjects = showAll
  ? filteredProjects
  : filteredProjects.slice(0, 3);
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
            {visibleProjects.map((project, idx) => {
              const imgIdx = isMobile ? 0 : (cardImageIndex[idx] || 0);

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

                      {!isMobile && project.images.length > 1 && (
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

  {!isMobile && (
    <>
      <p>{project.description}</p>

      <div className="project-tech">
        {project.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

     {/*  <button className="view-project-btn">
        View Project Details
      </button> */}
    </>
  )}
</div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
{filteredProjects.length > 3 && (
  <div className="text-center mt-5">
    <button
      className="explore-btn"
      onClick={() => setShowAll((prev) => !prev)}
    >
      {showAll ? "Show Less" : "Explore More Projects"}
    </button>
  </div>
)}
        {/* Modal */}


        <AnimatePresence>
          {selectedProject && (
            <>
              {isMobile ? (
                <motion.div
  className="mobile-project-details"
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "100%" }}
  transition={{ type: "spring", damping: 28, stiffness: 260 }}
>
                  <div className="mobile-header">
                    <h3>{selectedProject.title}</h3>
                    <button onClick={closeModal}><X size={20} /></button>
                  </div>

                  <div className="mobile-content">
                    {/*  <img
              src={selectedProject.images[modalIndex]}
              alt={selectedProject.title}
              className="mobile-main-image"
            /> */}

                    <div className="mobile-image-carousel">
                      {selectedProject.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt = "" 
                          loading="lazy"
                          className="mobile-carousel-image"
                          onClick={() => setModalIndex(i)}
                        />
                      ))}
                    </div>

                    <p>{selectedProject.details}</p>

                    <div className="mobile-tech">
                      {selectedProject.tech.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                // Current desktop modal
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
                          alt = "" 
                          loading="lazy"
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
                                  className={`thumbnail ${i === modalIndex ? "active" : ""
                                    }`}
                                  onClick={() => setModalIndex(i)}
                                  alt = "" 
                                  loading="lazy"
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
              )}
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}