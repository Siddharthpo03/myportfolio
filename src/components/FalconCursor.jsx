import { useEffect, useRef, useState } from "react";
import falconImg from "../assets/millennium falcon.png";
import "./FalconCursor.css";

// Millennium Falcon cursor that follows the mouse using GPU-accelerated transforms
// Uses a lightweight image sprite for performance
// High-quality Millennium Falcon PNG (transparent background)
// Local Millennium Falcon asset imported; fallback SVG if it fails unexpectedly.
const FALCON_SRC = falconImg;

const FalconCursor = () => {
  const falconRef = useRef(null);
  const [imgOk, setImgOk] = useState(true);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const target = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const onMouseMove = (e) => {
      // Direct 1:1 sync with cursor (no lerp/delay)
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      target.current.x = e.clientX;
      target.current.y = e.clientY;

      const el = falconRef.current;
      if (el) {
        el.style.transform = `translate3d(${e.clientX - 36}px, ${
          e.clientY - 36
        }px, 0) rotate(0deg)`;
        el.style.setProperty("--thrust", "0.5");
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="falcon-cursor" ref={falconRef}>
      <div className="falcon-thruster" />
      {imgOk ? (
        <img
          src={FALCON_SRC}
          alt="Millennium Falcon"
          draggable={false}
          onError={() => setImgOk(false)}
          decoding="async"
          loading="eager"
        />
      ) : (
        <svg
          className="falcon-svg"
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="36"
            cy="36"
            r="18"
            fill="rgba(0,217,255,0.25)"
            stroke="rgba(0,217,255,0.8)"
            strokeWidth="2"
          />
          <rect
            x="30"
            y="10"
            width="12"
            height="16"
            rx="4"
            fill="rgba(0,217,255,0.35)"
          />
          <circle cx="36" cy="36" r="6" fill="rgba(255,0,234,0.5)" />
        </svg>
      )}
    </div>
  );
};

export default FalconCursor;
