import { motion } from "framer-motion";
import "./LoadingScreen.css";

const LoadingScreen = ({ onWelcomeComplete }) => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onAnimationComplete={() => {
        // Trigger hyperspace after welcome fades
        setTimeout(() => onWelcomeComplete?.(), 100);
      }}
    >
      <motion.div
        className="loading-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.2, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="loader"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="loader-ring"></div>
          <div className="loader-ring"></div>
          <div className="loader-ring"></div>
        </motion.div>

        <div className="starwars-intro">
          <motion.h1
            className="loading-text"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ fontFamily: 'Bebas Neue, Impact, Arial Black, Arial, sans-serif', color: '#ffe81f', textShadow: '0 0 16px #ffe81f' }}
          >
            Welcome, Traveler.
          </motion.h1>
          <motion.h2
            className="loading-subtext"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            style={{ fontFamily: 'Orbitron, Electrolize, Courier New, monospace', color: '#00d9ff', textShadow: '0 0 12px #00d9ff' }}
          >
            Entering Siddharth’s Hydian Way…
          </motion.h2>
          <motion.h3
            className="loading-subtext"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.7 }}
            style={{ fontFamily: 'Orbitron, Electrolize, Courier New, monospace', color: '#8b9dc3', textShadow: '0 0 8px #8b9dc3' }}
          >
            Initializing systems… preparing hyperspace jump.
          </motion.h3>
        </div>

        <motion.div
          className="loading-bar"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
