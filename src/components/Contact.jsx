import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section id = "contact" className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="contact-title">Let’s Work Together</h2>
          <p className="contact-subtitle">
            Have a project in mind or just want to say hello?  
            Fill out the form and I’ll get back to you shortly.
          </p>
        </motion.div>

        <div className="row g-4">
          {/* Contact Info */}
          <motion.div
            className="col-md-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
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

          {/* Contact Form */}
          <motion.div
            className="col-md-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form className="contact-form">
              <div className="row">
                <div className="col-md-6">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="col-md-6">
                  <input type="email" placeholder="Email Address" required />
                </div>
              </div>

              <input type="text" placeholder="Subject" required />

              <textarea rows="5" placeholder="Your Message" required></textarea>

              <button type="submit" className="btn contact-btn">
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
