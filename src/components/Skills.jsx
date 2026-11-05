/* import { motion } from "framer-motion"; */
import "../styles/skills.css";

import {
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiSwagger,
  SiPhp,
  SiJavascript,
  SiTailwindcss,
  SiDotnet,
} from "react-icons/si";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaCheckCircle,
} from "react-icons/fa";

const skillGroups = [
  {
    tier: "core",
    title: "Core Engineering Stack",
    subtitle: "What I use to build real-world applications",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
    ],
  },
  {
    tier: "backend",
    title: "Backend & APIs",
    subtitle: "Server-side logic and scalable APIs",
    skills: [
      { name: "C# / .NET", icon: <SiDotnet /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Java", icon: <FaJava /> },
      { name: "PHP", icon: <SiPhp /> },
    ],
  },
  {
    tier: "data",
    title: "Data & Databases",
    subtitle: "Designing reliable data systems",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQL Server", icon: <FaDatabase /> },
    ],
  },
  {
    tier: "architecture",
    title: "System Architecture",
    subtitle: "Designing scalable and secure systems",
    highlight: true,
    skills: [
      { name: "REST API Design", icon: <FaCheckCircle /> },
      { name: "Authentication Systems", icon: <FaCheckCircle /> },
      { name: "Scalable Architecture", icon: <FaCheckCircle /> },
      { name: "Performance Optimization", icon: <FaCheckCircle /> },
    ],
  },
  {
    tier: "tools",
    title: "Development Workflow",
    subtitle: "Tools that support production delivery",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Swagger", icon: <SiSwagger /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        {/* HEADER */}
        <div className="section-header">
          <h2 className="section-title">
            Engineering Capabilities
          </h2>

          <p className="section-subtitle">
            A practical breakdown of the systems, tools, and
            technologies I use to design and build scalable
            applications.
          </p>
        </div>

        {/* GRID */}
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              className={`skill-card ${
                group.highlight ? "highlight" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="skill-header">
                <h3>{group.title}</h3>
                <p>{group.subtitle}</p>
              </div>

              <div className="skill-items">
                {group.skills.map((skill, i) => (
                  <div key={i} className="skill-pill">
                    <span className="icon">
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <div className="skills-footer">
          Continuously improving system design and
          full-stack architecture with real-world projects.
        </div>
      </div>
    </section>
  );
};

export default Skills;