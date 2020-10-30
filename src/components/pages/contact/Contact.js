import React from 'react'
import './Contact.css'

import {
    SiGithub, SiLinkedin, SiMedium
} from 'react-icons/si'
import {Link} from 'react-router-dom'


const Contact = () => {
    return (
        <div className="contact">
            <div className="tech-icons">
                <div className="icon-container">
                    <SiGithub className="icon "/>
                    <p>Github</p>
                </div>
                <div className="icon-container">
                    <SiLinkedin className="icon "/>
                    <p>LinkedIn</p>
                </div>
                <div className="icon-container">
                    <SiMedium className="icon "/>
                    <p>Medium</p>
                </div>
            </div>
        </div>
    )
}

export default Contact