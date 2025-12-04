import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import Typed from "typed.js";
import resumePdf from "../assets/Siddharth_Resume 03 dec 2025.pdf";
import "./Hero.css";

const Hero = () => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(typedRef.current, {
      strings: [
        "Jedi Code Master",
        "Force UI Architect",
        "Galaxy Problem Solver",
        "Rebellion Tech Innovator",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  // Mouse parallax for shapes
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;

      const shapes = heroRef.current.querySelectorAll(".shape");
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 8;
        const x = xPercent * speed;
        const y = yPercent * speed;
        shape.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const handleDownloadCV = () => {
    // Resume PDF file needs to be added to src/assets folder
    alert("Resume download coming soon!");
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      <motion.div
        className="hero-content container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-greeting" variants={itemVariants}>
          <span className="wave"></span> A traveler enters the galaxy… May the
          Force be with you.
        </motion.div>

        <motion.h1 className="hero-name" variants={itemVariants}>
          <span className="gradient-text">Siddharth</span>
          <span className="gradient-text">Pulugujja</span>
        </motion.h1>

        <motion.div className="hero-titles" variants={itemVariants}>
          <h2 className="hero-title">
            <span ref={typedRef}></span>
          </h2>
        </motion.div>

        <motion.p className="hero-description" variants={itemVariants}>
          I forge legendary digital experiences across the galaxy with the power
          of the Force.
          <br />
          Devoted to crafting innovative solutions that bring balance to the
          digital universe.
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <motion.button
            className="btn btn-primary cursor-hover"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 40px rgba(99, 102, 241, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .querySelector("#projects")
                .scrollIntoView({ behavior: "smooth" })
            }
            aria-label="View my projects section"
          >
            View My Missions
          </motion.button>
          <motion.button
            className="btn btn-outline cursor-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadCV}
            aria-label="Download CV"
          >
            Download Jedi Archive
          </motion.button>
          <motion.button
            className="btn btn-outline cursor-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert("Resume view coming soon!")}
            aria-label="View Archive"
          >
            View Archive
          </motion.button>
        </motion.div>

        <div className="hero-socials">
          {[
            {
              Icon: FaGithub,
              href: "https://github.com/Siddharthpo03",
              label: "GitHub",
            },
            {
              Icon: FaLinkedin,
              href: "https://www.linkedin.com/in/siddharth-pulugujja-bbb798379/",
              label: "LinkedIn",
            },
            {
              Icon: FaTwitter,
              href: "https://x.com/__siddhu__tm",
              label: "Twitter",
            },
            {
              Icon: FaEnvelope,
              href: "mailto:siddharthpulugujja@gmail.com",
              label: "Email",
            },
          ].map(({ Icon: IconComponent, href, label }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link cursor-hover"
              aria-label={label}
            >
              <IconComponent />
            </a>
          ))}
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span>Journey Deeper</span>
          <div className="scroll-line" />
        </motion.div>
      </motion.div>
      <div className="hero-shapes">
        <motion.div
          className="shape shape-1"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="shape shape-2"
          animate={{
            y: [0, 30, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="shape shape-3"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
