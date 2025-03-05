import React, { useEffect } from "react";
import "./gallery.css";

function Gallery() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const handleScroll = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          section.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on load in case some sections are already in view

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="section esimene">
        <h1>Gallery</h1>
      </div>
      <div className="section teine"></div>
      <div className="section kolmas"></div>
      <div className="section neljas"></div>
      <div className="section viies"></div>
      <div className="section kuues"></div>
      <div className="section seitsmes"></div>
      <div className="section kaheksas"></div>
    </div>
  );
}

export default Gallery;
