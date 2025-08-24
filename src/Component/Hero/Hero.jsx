import React from 'react'
import './Hero.css';
import profile_img from "../../assets/profile-img.jpeg";
const Hero = () => {
  return (
    <div id='home' className='hero-Section'>
        <img src={profile_img} alt="" className='profile_pic'/>
        <h1><span>I'm Baze Jessica</span>, a software engineering student based in France</h1>
        <p>I am a Ghanaian currently studying software engineering at JUNIA ISEN in Lille,France with a passion for creating innovative and user-friendly applications.</p>
        <div className="hero-action">
            <div className="hero-connect"><a href="#contact" className="anchor-link">Connect with Me</a></div>
            <div className="hero-resume"><a href="https://cvdesignr.com/p/67897dd7795d7">My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero