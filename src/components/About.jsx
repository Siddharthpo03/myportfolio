import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode, FaRocket, FaLightbulb, FaUsers } from "react-icons/fa";
import "./About.css";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.65,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const highlights = [
    {
      icon: <FaCode />,
      title: "Pure Code",
      description:
        "Crafting elegant and scalable code following the Jedi Code principles",
    },
    {
      icon: <FaRocket />,
      title: "Lightspeed Performance",
      description:
        "Optimizing systems for hyperspace-level speed and efficiency",
    },
    {
      icon: <FaLightbulb />,
      title: "Force Solutions",
      description:
        "Channeling the Force for innovative approaches to galaxy-wide challenges",
    },
    {
      icon: <FaUsers />,
      title: "Rebel Alliance Member",
      description:
        "Exceptional collaboration with fellow rebels and commanders",
    },
  ];

  return (
    <section id="about" className="about">
      <motion.div
        ref={ref}
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">
            The <span className="gradient-text">Legend</span>
          </h2>
          <p className="section-subtitle">
            Discover my journey through the stars
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <h3 className="about-heading">
              I'm a devoted Jedi Knight pursuing the art of creating
              extraordinary digital realms
            </h3>
            <p>
              Currently completing my B.Tech in Computer Science & Engineering
              at National Institute of Technology, Warangal - one of the most
              prestigious Jedi Temples in the galaxy. With a powerful command of
              Force-infused technologies including React.js, Node.js, Python
              (AI/ML), and modern databases, I specialize in building
              intelligent, secure systems that solve galaxy-wide challenges. My
              journey as a Code Jedi began at Resonance Junior College and
              Rotterdam International School, evolving into a mastery of
              crafting beautiful, functional experiences across star systems.
            </p>
            <p>
              I believe in continuous training like a Jedi Padawan and staying
              attuned to the latest Force techniques in Full Stack Development,
              Machine Learning, AI/Computer Vision, and Blockchain. With
              expertise in geolocation systems, biometric authentication, and
              creative UI/UX design, I combine technical prowess with artistic
              vision. When I'm not wielding my lightsaber keyboard, you'll find
              me exploring new frameworks in the Outer Rim, capturing moments
              through photography, or leading missions through my NCC training.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h4 className="gradient-text">15+</h4>
                <p>Missions Completed</p>
              </div>
              <div className="stat">
                <h4 className="gradient-text">3+</h4>
                <p>Years in Service</p>
              </div>
              <div className="stat">
                <h4 className="gradient-text">NIT</h4>
                <p>Jedi Temple</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="about-highlights" variants={itemVariants}>
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="highlight-card glass cursor-hover"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="highlight-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
