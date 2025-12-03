import { useState, useEffect, lazy, Suspense } from "react";
import UniverseCursor from "./components/UniverseCursor";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Starfield from "./components/Starfield";
import Navbar from "./components/Navbar";
import PerformanceToggle from "./components/PerformanceToggle";
import FalconTransition from "./components/FalconTransition";
import "./App.css";

const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  const [loadingStage, setLoadingStage] = useState("start"); // 'start' | 'welcome' | 'falcon' | 'hyperspace' | 'done'
  const [startClicked, setStartClicked] = useState(false);
  const [hyperspaceFrame, setHyperspaceFrame] = useState(null);

  const handleVideoEnd = (finalFrame) => {
    if (finalFrame) {
      setHyperspaceFrame(finalFrame);
    }
    setLoadingStage("done");
  };

  const handleStartJourney = () => {
    setStartClicked(true);
    
    // Play hyperspace sound effect
    const audio = new Audio('https://www.myinstants.com/media/sounds/star-wars-hyperspace.mp3');
    audio.volume = 0.5;
    audio.play().catch(() => {}); // Catch in case autoplay is blocked
    
    // Request fullscreen immediately on user interaction
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(() => {});
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
    
    // Start the sequence
    setLoadingStage("welcome");
  };

  useEffect(() => {
    if (!startClicked) return;

    // Welcome screen for 4s
    const timer1 = setTimeout(() => {
      setLoadingStage("falcon");
    }, 4000);
    // Falcon image for 2s
    const timer2 = setTimeout(() => {
      setLoadingStage("hyperspace");
    }, 6000);
    // Hyperspace duration controlled by video end event

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      document.body.style.overflow = "";
    };
  }, [startClicked]);

  useEffect(() => {
    if (loadingStage === "hyperspace" || loadingStage === "falcon" || loadingStage === "welcome") {
      document.body.style.overflow = "hidden";
    } else if (loadingStage === "done") {
      document.body.style.overflow = "";
      // Exit fullscreen when done
      if (document.fullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    }
  }, [loadingStage]);

  if (loadingStage === "start") {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "#000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10000,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ textAlign: "center" }}
        >
          <h1
            style={{
              fontFamily: "Bebas Neue, Impact, Arial Black, Arial, sans-serif",
              fontSize: "4rem",
              color: "#ffe81f",
              textTransform: "uppercase",
              marginBottom: "2rem",
              textShadow: "0 0 20px rgba(255, 232, 31, 0.5)",
            }}
          >
            Ready for Hyperspace?
          </h1>
          <button
            onClick={handleStartJourney}
            style={{
              padding: "1.5rem 3rem",
              fontSize: "1.5rem",
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 600,
              background: "linear-gradient(135deg, #00d9ff 0%, #ff00ea 100%)",
              border: "2px solid #00d9ff",
              borderRadius: "50px",
              color: "white",
              cursor: "pointer",
              boxShadow:
                "0 0 20px rgba(0, 217, 255, 0.6), 0 0 40px rgba(0, 217, 255, 0.4)",
              transition: "all 0.3s ease",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.boxShadow =
                "0 0 30px rgba(0, 217, 255, 0.8), 0 0 60px rgba(0, 217, 255, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow =
                "0 0 20px rgba(0, 217, 255, 0.6), 0 0 40px rgba(0, 217, 255, 0.4)";
            }}
          >
            Enter Hyperspace
          </button>
          <p
            style={{
              marginTop: "1.5rem",
              color: "#8b9dc3",
              fontSize: "0.9rem",
              fontFamily: "Orbitron, sans-serif",
            }}
          >
            Click to begin your journey in fullscreen mode
          </p>
        </motion.div>
      </div>
    );
  }

  if (loadingStage === "welcome") {
    return <LoadingScreen />;
  }

  return (
    <AnimatePresence mode="wait">
      {loadingStage === "falcon" && <FalconTransition key="falcon" />}
      {loadingStage === "hyperspace" && (
        <motion.div
          key="hyperspace"
          className="space-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Starfield density={0.75} hyperspaceMode={true} onVideoEnd={handleVideoEnd} />
        </motion.div>
      )}
      {loadingStage === "done" && (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            position: "relative",
          }}
        >
          {hyperspaceFrame && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundImage: `url(${hyperspaceFrame})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: -1,
                opacity: 0.6,
              }}
            />
          )}
          {!hyperspaceFrame && (
            <Starfield density={0.75} hyperspaceMode={false} />
          )}
          <UniverseCursor />
          <Navbar />
          <PerformanceToggle />
          <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>
          </Suspense>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
