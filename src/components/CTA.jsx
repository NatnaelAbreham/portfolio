import "../styles/cta.css";

const CTA = () => {
  return (
    <section id = "cta" className="cta section-padding">
      <div className="container">

        <div className="cta-card" data-aos="zoom-in">

          <h2>
            Let’s build something <span className="gradient-text">great</span> together
          </h2>

          <p>
            I’m available for freelance and remote projects. If you have an idea,
            a business, or a product to build — let’s make it real.
          </p>

          <div className="cta-actions">
            <a href="#contact" className="btn primary">
              Start a Project
            </a>

            <a href="mailto:your@email.com" className="btn secondary">
              Email Me
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;