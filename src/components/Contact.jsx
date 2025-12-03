import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert(
        "Thank you for your transmission! The Rebellion will respond shortly."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Holocall",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com",
    },
    {
      icon: <FaPhone />,
      title: "Comlink",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Star System",
      value: "Your City, Country",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/yourusername",
      name: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/yourusername",
      name: "LinkedIn",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/yourusername",
      name: "Twitter",
    },
  ];

  return (
    <section id="contact" className="contact">
      <motion.div
        ref={ref}
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">
            Join the <span className="gradient-text">Alliance</span>
          </h2>
          <p className="section-subtitle">
            Let's fight together for the Rebellion!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Let's discuss our next mission!</h3>
            <p>
              Prefer direct transmission? Send me a{" "}
              <a href="mailto:your.email@example.com" className="gradient-text">
                holocall
              </a>
              . 👋
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-detail"
                  whileHover={{ x: 10 }}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div>
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="cursor-hover">
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="contact-socials">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link cursor-hover"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div className="contact-form-wrapper" variants={itemVariants}>
            <form
              onSubmit={handleSubmit}
              className="contact-form glass"
              aria-label="Contact form"
            >
              <div className="form-group">
                <label htmlFor="contact-name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="Your Call Sign"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="Your Holocall Frequency"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-subject" className="sr-only">
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  placeholder="Mission Brief"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Your Transmission"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-input"
                />
              </div>
              <motion.button
                type="submit"
                className="btn btn-primary cursor-hover"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? "Transmitting..." : "Send Transmission"}
                <FaPaperPlane style={{ marginLeft: "10px" }} />
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.footer className="footer" variants={itemVariants}>
          <p>&copy; 2025 Your Name. May the Force be with you.</p>
          <p>Forged with ⚔️ using the Force</p>
        </motion.footer>
      </motion.div>
    </section>
  );
};

export default Contact;
