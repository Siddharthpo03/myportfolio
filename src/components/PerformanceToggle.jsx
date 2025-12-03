import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBolt, FaLeaf } from "react-icons/fa";
import "./PerformanceToggle.css";

const PerformanceToggle = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check system preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    // Apply global CSS class for performance mode
    if (reducedMotion) {
      document.documentElement.classList.add("reduce-motion");
    } else {
      document.documentElement.classList.remove("reduce-motion");
    }
  }, [reducedMotion]);

  return (
    <motion.div
      className="performance-toggle"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <button
        className={`toggle-btn ${reducedMotion ? "active" : ""}`}
        onClick={() => setReducedMotion(!reducedMotion)}
        aria-label="Toggle performance mode"
        title={reducedMotion ? "Enable Animations" : "Reduce Animations"}
      >
        {reducedMotion ? <FaBolt /> : <FaLeaf />}
        <span className="toggle-label">
          {reducedMotion ? "Performance" : "Eco"}
        </span>
      </button>
    </motion.div>
  );
};

export default PerformanceToggle;
