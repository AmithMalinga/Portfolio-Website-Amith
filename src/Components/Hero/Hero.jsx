import React, { Profiler } from 'react'
import './Hero.css'
import Profiler_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={Profiler_img} alt="" />
      <h1><span>I'm Amith Malinga,</span> Software Developer Based on Sri Lanka.</h1>
      <p>I am a dedicated software engineer with a strong passion for developing innovative solutions.</p>
      <div className="hero-action">
      <AnchorLink className='anchor-link' offset={50} href='#contact'><div className="hero-connect">Connect with me</div></AnchorLink>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
