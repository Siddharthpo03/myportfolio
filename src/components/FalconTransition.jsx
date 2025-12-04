import { motion } from "framer-motion";
import wallpaperImg from "../assets/wallpapers.png";
import "./FalconTransition.css";

const FalconTransition = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const animationDuration = isMobile ? 0.3 : 0.5;
  const imageDuration = isMobile ? 0.5 : 1;

  return (
    <motion.div
      className="falcon-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: animationDuration, ease: "easeInOut" }}
    >
      <div
        className="falcon-background"
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000",
        }}
      >
        <motion.img
          src={wallpaperImg}
          alt="Millennium Falcon Cockpit"
          initial={{ scale: 1 }}
          animate={{ scale: isMobile ? 1.1 : 1.2 }}
          transition={{ duration: imageDuration, ease: "easeInOut" }}
          style={{
            maxWidth: "90%",
            maxHeight: "90%",
            objectFit: "contain",
          }}
        />
      </div>
    </motion.div>
  );
};

export default FalconTransition;
