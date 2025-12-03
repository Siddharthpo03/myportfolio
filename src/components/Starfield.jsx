import React from "react";
import hyperspaceVideo from "../assets/hyperspace.mp4";
import "./Starfield.css";

const Starfield = ({ density = 1, hyperspaceMode = false, onVideoEnd }) => {
  const videoRef = React.useRef(null);
  const canvasRef = React.useRef(null);

  const captureFrame = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      return canvas.toDataURL('image/png');
    }
    return null;
  };

  const handleVideoEnded = () => {
    let tries = 5;
    const attemptCapture = () => {
      const frame = captureFrame();
      if (frame || tries <= 0) {
        if (onVideoEnd) onVideoEnd(frame);
      } else {
        tries -= 1;
        requestAnimationFrame(attemptCapture);
      }
    };
    // Ensure last frame is painted before capturing
    requestAnimationFrame(attemptCapture);
  };

  if (hyperspaceMode) {
    return (
      <>
        <video
          ref={videoRef}
          key="hyperspace-video"
          className="starfield-video"
          src={hyperspaceVideo}
          autoPlay
          muted={false}
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </>
    );
  }
  // ...existing code...
  // fallback to canvas starfield for non-hyperspace
  return <canvas className="starfield-canvas" />;
};

export default Starfield;
