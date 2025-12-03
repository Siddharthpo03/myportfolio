import { useEffect, useRef } from "react";
import "./UniverseCursor.css";

// Renders a small "universe" of orbiting particles around the real cursor.
// Keeps native pointer visible; uses minimal DOM and CSS animations for performance.
// Automatically disables on touch devices and small screens.
const UniverseCursor = () => {
  const rootRef = useRef(null);
  const isTouch =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  useEffect(() => {
    if (isTouch) return; // Disable on touch devices
    const root = rootRef.current;
    if (!root) return;

    let rafId = null;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Position update is batched via rAF for smoothness.
      if (!rafId) {
        rafId = requestAnimationFrame(applyPosition);
      }
    };

    const applyPosition = () => {
      rafId = null;
      root.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <div ref={rootRef} className="universe-cursor" aria-hidden="true">
      <div className="uc-core death-star" />
      <div className="uc-orbit orbit-1">
        <div className="uc-fighter tie-fighter-1" />
      </div>
      <div className="uc-orbit orbit-2">
        <div className="uc-fighter tie-fighter-2" />
      </div>
      <div className="hyperspace-streak streak-1" />
      <div className="hyperspace-streak streak-2" />
      <div className="hyperspace-streak streak-3" />
      <div className="lightsaber-glow" />
    </div>
  );
};

export default UniverseCursor;
