import '../styles/skills.css'

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      subtitle: "User-facing experiences",
      skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "Tailwind","Material-UI"],
    },
    {
      title: "Backend",
      subtitle: "Business logic & APIs",
      skills: ["C#", ".NET", "Web API", "MVC", "Entity Framework", "Node.js", "Express","PHP","Java"],
    },
    {
      title: "Database",
      subtitle: "Data & persistence",
      skills: ["SQL Server", "MySQL", "MongoDB","sqlite"],
    },
    {
      title: "Tools & Workflow",
      subtitle: "Development ecosystem",
      skills: ["Git", "GitHub", "REST APIs", "JWT Auth", "Postman","Agile/Scrum","Swagger"],
    },
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container">
       
        <h2
  className="section-title text-center mb-5"
  data-animate
  data-animation="animate__fadeInUp"
  data-delay="0.2s"
  data-duration="1s"
>
  Technical Skills
</h2>

        <div className="row g-4">
          {skillGroups.map((group, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="skill-box h-100">
                <h4 className="skill-title">{group.title}</h4>
                <p className="skill-subtitle">{group.subtitle}</p>

                <div className="skill-tags">
                  {group.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
