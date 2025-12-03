import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaCodeBranch,
} from "react-icons/fa";
import InClassImg from "../assets/InClass.png";
import CyberpunkImg from "../assets/Cyberpunk clone.png";
import CannonGameImg from "../assets/Cannon game.png";
import "./Projects.css";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.65,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const projects = [
    {
      title: "InClass - Smart Geofenced Attendance System",
      description:
        "Full-stack intelligent attendance platform with AI-powered face recognition using OpenCV, geofencing via Google Maps API, biometric WebAuthn fingerprint verification, and fraud detection. Features role-based authorization, automated email alerts, and real-time anomaly monitoring.",
      image: InClassImg,
      tags: ["React", "Node.js", "PostgreSQL", "OpenCV", "Python", "AI/ML"],
      github: "https://github.com/siddharthpulugujja/inclass",
      demo: "https://demo-link.com",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      stars: 24,
      forks: 5,
    },
    {
      title: "Cyberpunk 2077 Website Clone",
      description:
        "Responsive single-page website inspired by Cyberpunk 2077 aesthetics. Features neon-glow effects, animated scroll transitions using GSAP, dark-mode UI, and futuristic visual elements demonstrating advanced frontend animation skills.",
      image: CyberpunkImg,
      tags: ["HTML", "CSS", "JavaScript", "GSAP"],
      github: "https://github.com/siddharthpulugujja/cyberpunk-clone",
      demo: "https://demo-link.com",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      stars: 18,
      forks: 3,
    },
    {
      title: "2D Java Cannon Simulation Game",
      description:
        "Interactive physics-based game simulating cannons shooting projectiles with real-time collision detection and explosion effects. Features custom audio system, visual feedback, and object-oriented graphics handling using Java AWT/Swing.",
      image: CannonGameImg,
      tags: ["Java", "AWT/Swing", "Game Dev"],
      github: "https://github.com/siddharthpulugujja/cannon-game",
      demo: "https://demo-link.com",
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
      stars: 12,
      forks: 2,
    },
  ];

  return (
    <section id="projects" className="projects">
      <motion.div
        ref={ref}
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">
            Legendary <span className="gradient-text">Missions</span>
          </h2>
          <p className="section-subtitle">Recent victories across the galaxy</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card glass cursor-hover"
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="project-image"
                  loading="lazy"
                />
                <div
                  className="project-overlay"
                  style={{ background: project.gradient }}
                >
                  <div className="project-links">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link cursor-hover"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link cursor-hover"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`View ${project.title} live demo`}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                </div>
                <div className="project-stats">
                  <span>
                    <FaStar /> {project.stars}
                  </span>
                  <span>
                    <FaCodeBranch /> {project.forks}
                  </span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
