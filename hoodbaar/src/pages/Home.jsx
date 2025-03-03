import React, { useEffect } from 'react';
import "./home.css";

function Home() {
  
  useEffect(() => {
    const text = document.querySelector(".lefty");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          text.classList.add("show");
        } else {
          text.classList.remove("show");
        }
      });
    }, { threshold: 0.5 });

    if (text) {
      observer.observe(text);
    }

    return () => {
      if (text) {
        observer.unobserve(text);
      }
    };
  }, []);

  return (
    <>
      <div className="home-body">
        <div className="hometext1">
          <h1>Home page</h1>
          <p>This is the home page.</p>
        </div>
        <div className="shape top-left"></div>
        <div className="hometext2">
          <h2></h2>
        </div>
        <div className="shape bottom-right"></div>
      </div>
      <div className="more-content">
        <div className='much-content'>
            <h4 className='lefty'>Where every pour tells a story</h4>
        </div>
        <div className='text-container'>
          <div className="secondpagetext">
            <h3>ilma napsuta me tood ei tee</h3>
          </div>
        </div>
        <div className='line-container'>
          <div className="responsive-line"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
