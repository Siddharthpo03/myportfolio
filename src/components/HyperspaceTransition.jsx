import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import "./HyperspaceTransition.css";

const HyperspaceTransition = ({ onComplete }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create star field
    const starCount = 2000;
    const positions = new Float32Array(starCount * 3);
    const velocities = new Float32Array(starCount);
    const sizes = new Float32Array(starCount);
    const colors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      // Start stars in a sphere around camera
      const radius = Math.random() * 500 + 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = -radius * Math.cos(phi);

      velocities[i] = Math.random() * 2 + 1;
      sizes[i] = Math.random() * 3 + 1;

      // Initial white color
      colors[i3] = 1;
      colors[i3 + 1] = 1;
      colors[i3 + 2] = 1;
    }

    const starsGeometry = new THREE.BufferGeometry();
    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    starsGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    starsGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const starsMaterial = new THREE.PointsMaterial({
      size: 3,
      sizeAttenuation: true,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      map: createCircleTexture(),
    });

    function createCircleTexture() {
      const canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");

      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.5)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);

      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;
      return texture;
    }

    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    // Animation
    let animationFrame;
    let startTime = Date.now();
    const duration = 2200;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Accelerating speed effect
      const speed = 1 + progress * 40;

      // Animate star field - move stars toward camera
      const positions = starField.geometry.attributes.position.array;
      const colors = starField.geometry.attributes.color.array;
      const sizes = starField.geometry.attributes.size.array;

      for (let i = 0; i < starCount; i++) {
        const i3 = i * 3;
        positions[i3 + 2] += velocities[i] * speed;

        // Calculate speed factor for color transition and stretching
        const zPos = positions[i3 + 2];
        const speedFactor = Math.min((zPos + 800) / 800, 1);

        // Transition from white to neon blue/cyan as stars get closer
        if (speedFactor > 0.3) {
          const neonProgress = (speedFactor - 0.3) / 0.7;
          colors[i3] = 1 - neonProgress * 0.5; // R: 1 -> 0.5
          colors[i3 + 1] = 1; // G: stays 1
          colors[i3 + 2] = 1; // B: stays 1

          // Stretch stars as they accelerate (make them bigger)
          sizes[i] = (Math.random() * 3 + 1) * (1 + neonProgress * 8);
        } else {
          sizes[i] = Math.random() * 3 + 1;
        }

        // Reset stars that pass the camera
        if (positions[i3 + 2] > 50) {
          positions[i3 + 2] = -800;
          colors[i3] = 1;
          colors[i3 + 1] = 1;
          colors[i3 + 2] = 1;
          sizes[i] = Math.random() * 3 + 1;
        }
      }
      starField.geometry.attributes.position.needsUpdate = true;
      starField.geometry.attributes.color.needsUpdate = true;
      starField.geometry.attributes.size.needsUpdate = true;

      // Camera shake for intensity
      camera.position.x = Math.sin(elapsed * 0.01) * progress * 2;
      camera.position.y = Math.cos(elapsed * 0.01) * progress * 2;

      // Increase FOV for warp effect
      camera.fov = 75 + progress * 45;
      camera.updateProjectionMatrix();

      renderer.render(scene, camera);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        onComplete();
      }
    };

    animate();

    // Cleanup
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      starsGeometry.dispose();
      starsMaterial.dispose();
      renderer.dispose();
    };
  }, [onComplete]);

  return (
    <motion.div
      className="hyperspace-transition"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <canvas ref={canvasRef} className="hyperspace-canvas" />
    </motion.div>
  );
};

export default HyperspaceTransition;
