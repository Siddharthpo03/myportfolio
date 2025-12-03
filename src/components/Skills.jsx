import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaCode,
  FaDatabase,
  FaCube,
} from "react-icons/fa";
import {
  SiJavascript,
  SiCplusplus,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiExpress,
  SiFlutter,
  SiSpringboot,
  SiIntellijidea,
  SiPostman,
  SiGooglecloud,
  SiC,
  SiR,
} from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.85, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };

  const skillCategories = [
    {
      title: "Ancient Languages",
      skills: [
        { name: "C", icon: <SiC />, color: "#A8B9CC", level: 85 },
        { name: "C++", icon: <SiCplusplus />, color: "#00599C", level: 88 },
        { name: "Java", icon: <FaJava />, color: "#007396", level: 90 },
        {
          name: "JavaScript",
          icon: <SiJavascript />,
          color: "#F7DF1E",
          level: 92,
        },
        { name: "Python", icon: <FaPython />, color: "#3776AB", level: 90 },
        { name: "HTML", icon: <FaHtml5 />, color: "#E34F26", level: 95 },
        { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6", level: 93 },
        { name: "R", icon: <SiR />, color: "#276DC3", level: 75 },
      ],
    },
    {
      title: "Force Frameworks",
      skills: [
        { name: "React", icon: <FaReact />, color: "#61DAFB", level: 90 },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933", level: 90 },
        { name: "Express", icon: <SiExpress />, color: "#ffffff", level: 88 },
        { name: "Flutter", icon: <SiFlutter />, color: "#02569B", level: 75 },
        {
          name: "Spring Boot",
          icon: <SiSpringboot />,
          color: "#6DB33F",
          level: 78,
        },
        {
          name: "Hyperledger",
          icon: <FaCube />,
          color: "#2F3134",
          level: 72,
        },
      ],
    },
    {
      title: "Data Holocrons & Cloud",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", level: 85 },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql />,
          color: "#4169E1",
          level: 88,
        },
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1", level: 87 },
        {
          name: "Google Cloud",
          icon: <SiGooglecloud />,
          color: "#4285F4",
          level: 80,
        },
      ],
    },
    {
      title: "Jedi Arsenal",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "#F05032", level: 92 },
        { name: "Docker", icon: <FaDocker />, color: "#2496ED", level: 85 },
        { name: "VS Code", icon: <FaCode />, color: "#007ACC", level: 95 },
        {
          name: "IntelliJ",
          icon: <SiIntellijidea />,
          color: "#FF6C37",
          level: 88,
        },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37", level: 90 },
        { name: "pgAdmin", icon: <FaDatabase />, color: "#336791", level: 85 },
      ],
    },
  ];

  const levelToBadge = (level) => {
    if (level >= 90) return { label: "Jedi Master", stars: 5 };
    if (level >= 85) return { label: "Jedi Knight", stars: 4 };
    if (level >= 75) return { label: "Jedi Padawan", stars: 3 };
    if (level >= 60) return { label: "Youngling", stars: 2 };
    return { label: "Initiate", stars: 1 };
  };

  return (
    <section id="skills" className="skills">
      <motion.div
        ref={ref}
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">
            Force <span className="gradient-text">Powers</span>
          </h2>
          <p className="section-subtitle">
            Technologies I've mastered across the galaxy
          </p>
        </motion.div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              variants={itemVariants}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-card glass cursor-hover"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.25 },
                    }}
                  >
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <h4>{skill.name}</h4>
                    <div className="skill-progress">
                      <motion.div
                        className="skill-progress-bar"
                        initial={{ width: 0 }}
                        animate={
                          inView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        }}
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                        }}
                      />
                    </div>
                    <div className="skill-badge">
                      <span className="badge-stars">
                        {Array.from({
                          length: levelToBadge(skill.level).stars,
                        }).map((_, i) => (
                          <span key={i} className="star-dot" />
                        ))}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
