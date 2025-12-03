import { motion } from "framer-motion";
import wallpaperImg from "../assets/wallpapers.png";
import "./FalconTransition.css";

const FalconTransition = () => {
  return (
    <motion.div
      className="falcon-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
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
          animate={{ scale: 1.2 }}
          exit={{ scale: 1.4, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
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
