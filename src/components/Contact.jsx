import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import "../styles/contact.css";

import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully.");
          formRef.current.reset();
          setLoading(false);
        },
        () => {
          setStatus("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">

      <div className="container">

        {/* HEADER */}
        <div className="contact-header">
          <h2>Let’s Build Something Great</h2>

          <p>
            Have a project, idea, or opportunity?
            Let’s discuss how we can turn it into
            a scalable digital product.
          </p>
        </div>

        {/* GRID */}
        <div className="contact-grid">

          {/* LEFT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="contact-panel"
          >

            <div className="contact-card">
              <FaEnvelope />

              <div>
                <h4>Email</h4>
                <span>Available for freelance & remote work</span>
              </div>
            </div>

            <div className="contact-card">
              <FaGithub />

              <div>
                <h4>GitHub</h4>

                <a
                  href="https://github.com/natnaelabreham"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Projects
                </a>
              </div>
            </div>

            <div className="contact-card">
              <FaLinkedin />

              <div>
                <h4>LinkedIn</h4>

                <a
                  href="https://linkedin.com/in/natnael-abraham-172aa4292"
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect Professionally
                </a>
              </div>
            </div>

            <div className="contact-card">
              <FaMapMarkerAlt />

              <div>
                <h4>Location</h4>
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>

          </motion.div>

          {/* FORM */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="contact-form"
          >

            <div className="form-row">

              <div className="form-group">
                <label>Your Name</label>

                <input
                  type="text"
                  name="user_name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>

                <input
                  type="email"
                  name="user_email"
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label>Subject</label>

              <input
                type="text"
                name="subject"
                required
              />
            </div>

            <div className="form-group">
              <label>Your Message</label>

              <textarea
                name="message"
                rows="6"
                required
              />
            </div>

            <button
              type="submit"
              className="contact-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="form-status">
                {status}
              </p>
            )}

          </motion.form>

        </div>

      </div>

    </section>
  );
};

export default Contact;