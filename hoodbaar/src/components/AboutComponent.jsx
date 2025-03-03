import React, { useEffect } from "react";
import "./aboutcomponent.css";

function AboutComponent({ text = { title: "Default Title", description: "Default Description" }, imageUrl, reverse }) {
    useEffect(() => {
        const textBlocks = document.querySelectorAll(".text-content");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show"); // Apply animation
                    } else {
                        entry.target.classList.remove("show"); // Remove animation when scrolling back up
                    }
                });
            },
            { threshold: 0.2 } // Triggers when 20% of the element is visible
        );

        textBlocks.forEach((block) => observer.observe(block));

        return () => observer.disconnect(); // Cleanup on unmount
    }, []);

    return (
        <div className={`container ${reverse ? "reverse" : ""}`}>
            <div className={`text-content ${reverse ? "reverse-text" : ""}`}>
                <h2>{text.title}</h2>
                <p>{text.description}</p>
            </div>
            <div className="image-content">
                <img src={imageUrl} alt={text.title} />
            </div>
        </div>
    );
}

export default AboutComponent;
