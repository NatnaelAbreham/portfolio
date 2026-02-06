import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/contact.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header text-center"
        >
          <h2 className="section-title">Let’s Work Together</h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hello?  
            Drop a message and I’ll get back to you.
          </p>
        </motion.div>

        <div className="row g-4 align-items-stretch">

          {/* Info Cards */}
          <motion.div
            className="col-md-4"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-info-card">
              <FaEnvelope />
              <h5>Email</h5>
              <p>yourname@email.com</p>
            </div>

            <div className="contact-info-card">
              <FaPhoneAlt />
              <h5>Phone</h5>
              <p>+251 XXX XXX XXX</p>
            </div>

            <div className="contact-info-card">
              <FaMapMarkerAlt />
              <h5>Location</h5>
              <p>Ethiopia</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="col-md-8"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="contact-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="floating-input">
                    <input type="text" required />
                    <label>Your Name</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="floating-input">
                    <input type="email" required />
                    <label>Email Address</label>
                  </div>
                </div>
              </div>

              <div className="floating-input">
                <input type="text" required />
                <label>Subject</label>
              </div>

              <div className="floating-input">
                <textarea rows="5" required></textarea>
                <label>Your Message</label>
              </div>

              <button type="submit" className="contact-btn">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;