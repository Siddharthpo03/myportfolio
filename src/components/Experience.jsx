import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "./Experience.css";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const experiences = [
    {
      type: "education",
      title: "Jedi Master Academy - Computer Science & Engineering",
      company: "National Institute of Technology, Warangal",
      period: "2023 - Present",
      description:
        "Training at one of the galaxy's most prestigious Jedi Temples, mastering advanced Force engineering, AI/ML, blockchain, and cybersecurity. Building expertise in Data Structures, Algorithms, DBMS, OOPs, OS, and Computer Networks with leadership training through NCC.",
      achievements: [
        "Elite NIT Warangal Jedi Knight",
        "Mastered Full-Stack & AI/ML Systems",
        "Leadership Training through NCC",
      ],
    },
    {
      type: "education",
      title: "Jedi Intermediate Training - Science & Mathematics",
      company: "Resonance Junior College, Hyderabad",
      period: "2021 - 2023",
      description:
        "Completed advanced training under the Telangana State Board of Intermediate Education, mastering the foundations of science, mathematics, and analytical thinking required for advanced Jedi trials.",
      achievements: [
        "Telangana State Board Excellence",
        "Specialized in Physics, Chemistry & Mathematics",
        "Prepared for elite Jedi Temple entrance",
      ],
    },
    {
      type: "education",
      title: "Jedi Youngling Foundation - Secondary Education",
      company: "Rotterdam International School, Hyderabad",
      period: "2015 - 2021",
      description:
        "Completed foundational training under the Central Board of Secondary Education (CBSE), establishing strong principles in academics and holistic development across the galaxy.",
      achievements: [
        "CBSE Foundation Excellence",
        "All-round academic development",
        "Built strong analytical foundations",
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <motion.div
        ref={ref}
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">
            My <span className="gradient-text">Saga</span>
          </h2>
          <p className="section-subtitle">Battles & Jedi Training</p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              variants={itemVariants}
            >
              <div className="timeline-icon">
                {exp.type === "work" ? <FaBriefcase /> : <FaGraduationCap />}
              </div>
              <motion.div
                className="timeline-content glass cursor-hover"
                whileHover={{ scale: 1.03, x: index % 2 === 0 ? 10 : -10 }}
              >
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="timeline-company">{exp.company}</span>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-description">{exp.description}</p>
                <ul className="timeline-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
