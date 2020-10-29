import React from 'react'
import './About.css'
import {SiNodeDotJs, SiReact, SiMongodb} from 'react-icons/si'


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
                <header className="tech-header"><p>Technologies</p></header>
                <div className="tech-icons">
                    <SiNodeDotJs className="icon node-icon"/>
                    <SiReact className="icon react-icon"/>
                    <SiMongodb className="icon mongodb-icon"/>
                </div>
            </div>
        </div>
    )
}


export default About