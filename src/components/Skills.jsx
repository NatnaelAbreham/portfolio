import { useEffect, useRef } from "react";
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
} from "react-icons/fa";

const Skills = () => {
  const skillCardsRef = useRef([]);

  const skillGroups = [
    {
      title: "Frontend",
      subtitle: "Crafting engaging user interfaces",
      color: "#60a5fa",
      skills: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
      ],
    },
    {
      title: "Backend",
      subtitle: "Building robust server solutions",
      color: "#8b5cf6",
      skills: [
        { name: ".NET", icon: <SiDotnet />, color: "#512BD4" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Java", icon: <FaJava />, color: "#007396" },
        { name: "PHP", icon: <SiPhp />, color: "#777BB4" },
      ],
    },
    {
      title: "Database",
      subtitle: "Designing efficient data systems",
      color: "#10b981",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      ],
    },
    {
      title: "Tools",
      subtitle: "Streamlining development workflows",
      color: "#f59e0b",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "GitHub", icon: <FaGithub />, color: "#181717" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "Swagger", icon: <SiSwagger />, color: "#85EA2D" },
      ],
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    skillCardsRef.current.forEach((card) => {
      if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-header">
  <h2 className="section-title">Technical Skills</h2>
  <p className="section-subtitle">
    A comprehensive toolkit for building modern, scalable applications with cutting-edge technologies
  </p>
</div>


        <div className="row g-4">
          {skillGroups.map((group, index) => (
            <div 
              className="col-md-6 col-lg-3" 
              key={index}
              ref={(el) => (skillCardsRef.current[index] = el)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className="skill-card"
                style={{
                  '--hover-color': group.color,
                }}
              >
                <div className="mb-6">
                  <h4>{group.title}</h4>
                  <p>{group.subtitle}</p>
                </div>

                <div className="skill-grid">
                  {group.skills.map((skill, i) => (
                    <div 
                      key={i} 
                      className="skill-item"
                      style={{
                        '--skill-color': skill.color,
                      }}
                    >
                      <span 
                        className="skill-icon"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm text-gray-400">
              Continuously expanding skill set with latest technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;