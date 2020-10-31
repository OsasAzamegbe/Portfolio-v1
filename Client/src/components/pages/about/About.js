import React from 'react'
import './About.css'


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
                    {/* <div className="icon-container">
                        <SiPython className="icon"/>
                        <p>Python</p>
                    </div>
                    <div className="icon-container">
                        <SiDjango className="icon"/>
                        <p>Django</p>
                    </div>
                    <div className="icon-container">
                        <SiJavascript className="icon"/>
                        <p>Javascript</p>
                    </div>
                    <div className="icon-container">
                        <SiNodeDotJs className="icon"/>
                        <p>Node.js</p>
                    </div>
                    <div className="icon-container">
                        <SiReact className="icon react-icon"/>
                        <p>React</p>
                    </div>
                    <div className="icon-container">
                        <SiMongodb className="icon mongodb-icon"/>
                        <p>MongoDB</p>
                    </div> 
                    <div className="icon-container">
                        <SiMysql className="icon mongodb-icon"/>
                        <p>MySQL</p>
                    </div>                    
                    <div className="icon-container">
                        <SiHtml5 className="icon"/>
                        <p>Html5</p>
                    </div>
                    <div className="icon-container">
                        <SiCss3 className="icon"/>
                        <p>CSS3</p>
                    </div>
                    <div className="icon-container">
                        <SiBootstrap className="icon"/>
                        <p>Bootstrap</p>
                    </div>
                    <div className="icon-container">
                        <SiGit className="icon"/>
                        <p>Git</p>
                    </div>                     */}

                </div>
            </div>
        </div>
    )
}


export default About