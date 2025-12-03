import React from "react";
import hyperspaceVideo from "../assets/hyperspace.mp4";
import "./Starfield.css";

const Starfield = ({ density = 1, hyperspaceMode = false, onVideoEnd }) => {
  const videoRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const audioRef = React.useRef(null);

  React.useEffect(() => {
    if (hyperspaceMode && videoRef.current) {
      const video = videoRef.current;
      
      // Detect mobile
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      
      if (isMobile) {
        // On mobile, start muted then unmute after user gesture
        video.muted = true;
        video.play().then(() => {
          // Try to unmute after playback starts
          setTimeout(() => {
            video.muted = false;
          }, 100);
        }).catch(err => {
          console.log('Mobile autoplay handled:', err);
        });
      } else {
        // Desktop: play with sound
        video.muted = false;
        video.play().catch(err => {
          console.log('Autoplay fallback:', err);
          video.muted = true;
          video.play();
        });
      }
    }
  }, [hyperspaceMode]);

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
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
          webkit-playsinline="true"
          x5-playsinline="true"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true"
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
