import React, { useEffect } from 'react';
import "./home.css";

function Home() {

  useEffect(() => {
    const textElements = document.querySelectorAll(".more-content > div");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.5 });

    textElements.forEach(el => observer.observe(el));

    return () => {
      textElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <div className="home-body">
        <div className="hometext1">
          <h1>HOOD</h1>
          <p>Come thirsty, <br />leave legendary.</p>
        </div>
        <div className="shape top-left"></div>
        <div className="hometext2">
          <h2></h2>
        </div>
        <div className="shape bottom-right"></div>
      </div>
      <div className="more-content">
        <div className='much-content'>  
            <h4>Where every pour tells a story</h4>
        </div>
        <div className='back-pic'></div>
        <div className='text-container'>
          <div className="secondpagetext">
            <h3>ilma napsuta me tööd ei tee</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
