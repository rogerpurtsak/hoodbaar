import React from "react";
import "./location.css";

const Location = () => {
  return (
    <div className="map-container">
        <h1>Trust me, you will want to find it...</h1>
      <iframe
        title="Bar Location"
        className="map"
        src="https://www.google.com/maps?q=58.3797,24.5009&hl=es;z=14&output=embed"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Location;
