import { useEffect, useRef, useState } from "react";
import "./LandingVideo.css";

// Lazy-loaded Razor Crest landing video; source attached only when needed
const VIDEO_SRC =
  "https://cdn.coverr.co/videos/coverr-sci-fi-ship-landing-1270/1080p.mp4";

const LandingVideo = () => {
  const [show, setShow] = useState(false);
  const [loadedSrc, setLoadedSrc] = useState(null);
  const videoRef = useRef(null);
  const tickingRef = useRef(false);

  useEffect(() => {
    const checkPosition = () => {
      const scrollEl = document.scrollingElement || document.documentElement;
      const nearBottom =
        scrollEl.scrollTop + window.innerHeight >= scrollEl.scrollHeight - 40;
      if (nearBottom !== show) setShow(nearBottom);
      tickingRef.current = false;
    };

    const onScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(checkPosition);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    checkPosition();
    return () => window.removeEventListener("scroll", onScroll);
  }, [show]);

  useEffect(() => {
    if (show && !loadedSrc) {
      // Attach src only when first needed - using setTimeout to avoid sync setState
      setTimeout(() => setLoadedSrc(VIDEO_SRC), 0);
    }
  }, [show, loadedSrc]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (show) {
      v.currentTime = 0;
      const playPromise = v.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    } else {
      v.pause();
    }
  }, [show, loadedSrc]);

  return (
    <div className={`landing-video ${show ? "visible" : ""}`}>
      <video
        ref={videoRef}
        src={loadedSrc || ""}
        muted
        playsInline
        preload="metadata"
      />
    </div>
  );
};

export default LandingVideo;
