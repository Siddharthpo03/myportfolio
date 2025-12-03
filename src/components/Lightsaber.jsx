import React, { useState } from "react";
import "./Lightsaber.css";

const Lightsaber = ({ color = "#00eaff", height = 350 }) => {
  const [ignite, setIgnite] = useState(false);

  return (
    <div className="saber-container" style={{ height: height + 80 }}>
      {/* Blade */}
      <div
        className={`saber-blade ${ignite ? "ignite" : ""}`}
        style={{ "--blade-color": color, height: height }}
      ></div>

      {/* Handle */}
      <div className="saber-handle" onClick={() => setIgnite(!ignite)}>
        <div className="handle-top"></div>
        <div className="handle-grip"></div>
        <div className="handle-bottom"></div>
      </div>
    </div>
  );
};

export default Lightsaber;
