import React from 'react'
import './About.css'
import * as techIcons from '../../Icons'


const About = () => {
    return (
        <div className="about">
            <div className="about-quotes-container">
                <p className="about-quotes">"A clever person <strong>solves</strong> a problem.
                <br/>A wise person <strong>avoids</strong> it."</p>
                <p className="about-quotes-author"><i>- Albert Einstein</i></p>
            </div>
            <div className="about-content-container">
                <p className="about-content">
                    Osas Azamegbe is a Software Engineer - a creative problem-solver - 
                    with a firm grasp of engineering concepts, data structures, 
                    systems architecture, and algorithm analysis and design.
                    <br/> 
                </p>
                <p className="about-content-extra">Artist. Engineer.</p>
            </div>
            <div className="tech-container">
                <header className="tech-header">Tech Stack</header>
                <div className="tech-icons">
                    {Object.values(techIcons).map(comp => comp.apply())}
                </div>
            </div>
        </div>
    )
}


export default About