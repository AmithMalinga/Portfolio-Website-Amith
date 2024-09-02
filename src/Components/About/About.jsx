import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt='' />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p> uhdd wiuwe fwef fewhffao; g wafrig r r;gjrigjserligg ri;ogrig rugherg rgshgre;oig rohgr</p>
                        <p>euefgwe wye rywerwewey weyfuwa wewehwew whiewu ieri aroiuaepor;oirthghithee nu  iitwiojwoi wo awio weoi go wg gho aghr g ;agr i;ho ra</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className='about-achievement'>
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIRENCE</p>
                </div>
                <hr/>
                <div className='about-achievement'>
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div> 
                <hr/>
                <div className='about-achievement'>
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div> 
            </div>
        </div>
    )
}

export default About
