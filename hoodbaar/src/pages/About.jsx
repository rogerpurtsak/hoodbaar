import React from 'react';
import AboutComponent from '../components/AboutComponent.jsx';
import "./about.css"

function About() {
  return (
    <div className='compo-taga'>
    <AboutComponent 
    text={{ title: "Mul pole tra orna aimu ka mida siia soovite", description: "This is text on the left." }} 
    imageUrl="/hood_naine.jpg"
    reverse={false} //text vasakul
    />

    <AboutComponent 
    text={{ title: "parem", description: "This is text on the parem." }} 
    imageUrl="/hood_naine.jpg"
    reverse={true} //text parem
    />
    </div>
  );
};

export default About;
