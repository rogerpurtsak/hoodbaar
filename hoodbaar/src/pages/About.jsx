import React from 'react';
import AboutComponent from '../components/AboutComponent.jsx';
import "./about.css"

function About() {
  return (
    <div className='compo-taga'>
    <AboutComponent 
    text={{ title: "The story of the legends", description: "From the neon glow of Pärnu’s restless avenues to the deep basslines shaking the midnight air, they reign. Two men, not just CEOs, but architects of revelry, sovereigns of spirits, and masters of the untamed night." }} 
    imageUrl="gregoorius.jpg"
    reverse={false} //text vasakul
    />

    <AboutComponent 
    text={{ title: "", description: "They don’t just run a bar; they command a kingdom where every shot is a battle cry, every beat a war drum, and every dawn a trophy..." }} 
    imageUrl="jansa.jpg"
    reverse={true} //text parem
    />
    </div>
  );
};

export default About;
