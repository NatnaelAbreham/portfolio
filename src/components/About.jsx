
import '../styles/about.css'

const About = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
         <div className="section-header">
                 <h2 className="section-title">About Me</h2>
<h3 className="section-subtitle">
  Turning complex ideas into real-world software
</h3>
         </div>
 


        <div className="row align-items-center gy-5">
          {/* LEFT — TIMELINE */}
          <div className="col-lg-6">
            <div className="timeline">
              <div className="timeline-item" data-animate>
                <h4>Software Developer — Enterprise Banking & Financial Systems</h4>
               <span className="timeline-date">2023 – Present</span>
  <p>
    Developing and maintaining enterprise banking systems, including multiple internal portals for back-office operations.
    Implemented secure APIs and integrated various third-party payment solutions.
    Responsible for deployment, debugging, and optimizing applications to ensure high performance and reliability.
  </p>
              </div>

              <div className="timeline-item" data-animate>
                <h4>Full-Stack Projects & Freelance Development</h4>
                <span className="timeline-date">2021 – Present</span>
                <p>
  Delivered diverse full-stack applications, ranging from interactive tools to management systems, 
  focusing on usability, performance, and maintainability.
</p>
              </div>

              <div className="timeline-item" data-animate>
  <h4>BSc in Computer Science</h4>
  <span className="timeline-date">Graduated 2023</span>
  <p>
    Built a strong foundation in software development, algorithms, and problem-solving, 
    which fueled my journey into full-stack and enterprise application development.
  </p>
</div>
            </div>
          </div>

          {/* RIGHT — DESCRIPTION */}
          <div className="col-lg-6">
            <div className="about-content" data-animate>
              <h3 className="gradient-text mb-4">
                 Crafting software that transforms ideas into real impact
              </h3>

            <p className="lead">
  I’m a software developer with a strong computer science foundation, 
  building production systems that are fast, secure, and reliable.
</p>

<p>
  Over the past <strong>3 years</strong>, I’ve worked on enterprise and banking applications, 
  integrating third-party systems, deploying complex projects, and ensuring high performance. 
  I also create personal projects to explore new ideas and sharpen my skills.
</p>

<p>
  I hold certifications from <strong>Microsoft (C#)</strong>, <strong>Udacity</strong>, 
  and <strong>freeCodeCamp</strong>, and I believe in learning by building meaningful projects, not just following tutorials.
</p>
              {/* HIGHLIGHTS */}
              <div className="row mt-4">
                {[
                  {
  icon: 'bi-code-slash',
  title: 'Clean Code',
  desc: 'Readable, maintainable, production-ready',
},
{
  icon: 'bi-diagram-3',
  title: 'System Thinking',
  desc: 'Scalable, backend-driven design',
},
{
  icon: 'bi-award',
  title: 'Certified',
  desc: 'Microsoft • Udacity • freeCodeCamp',
},
{
  icon: 'bi-lightbulb',
  title: 'Problem Solver',
  desc: 'Brute force → optimized solutions',
},{
  icon: 'bi-rocket-takeoff',
  title: 'Delivery-Driven',
  desc: 'From idea to production',
},
                ].map((item, index) => (
                  <div className="col-md-6 mb-3" key={index}>
                    <div className="about-feature">
                      <i className={`bi ${item.icon}`} />
                      <div>
                        <h6>{item.title}</h6>
                        <span>{item.desc}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
