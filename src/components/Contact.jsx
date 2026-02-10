import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
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
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
  .sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    formRef.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
  .then(
  () => {
    setStatus("Message sent successfully ✅");
    formRef.current.reset();
  },
  () => {
    setStatus("Something went wrong ❌ Please try again.");
  }
);


  };

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
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="floating-input">
                    <input type="text" name="user_name" required />
                    <label>Your Name</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="floating-input">
                    <input type="email" name="user_email" required />
                    <label>Email Address</label>
                  </div>
                </div>
              </div>

              <div className="floating-input">
                <input type="text" name="subject" required />
                <label>Subject</label>
              </div>

              <div className="floating-input">
                <textarea name="message" rows="5" required></textarea>
                <label>Your Message</label>
              </div>

              <button type="submit" className="contact-btn">
                Send Message
              </button>

              {status && <p className="form-status">{status}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
