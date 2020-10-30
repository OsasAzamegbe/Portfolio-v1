import React from 'react'
import './Contact.css'

import {
    SiGithub, SiLinkedin, SiMedium
} from 'react-icons/si'
import {Link} from 'react-router-dom'

import ContactForm from '../../ContactForm'


const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-icons">
                <div className="icon-container">
                    <Link to="//github.com/OsasAzamegbe" target="_blank">
                        <SiGithub className="icon "/>
                        <p>Github</p>
                    </Link>                    
                </div>
                <div className="icon-container">
                    <Link to="//www.linkedin.com/in/osamudiamen-azamegbe/" target="_blank">
                        <SiLinkedin className="icon "/>
                        <p>LinkedIn</p>
                    </Link>                    
                </div>
                <div className="icon-container">
                    <Link to="//medium.com/@osas.azamegbe" target="_blank">
                        <SiMedium className="icon "/>
                        <p>Medium</p>
                    </Link>                    
                </div>
            </div>
            <ContactForm/>
            <p className="copyrights">&#169; Osamudiamen Azamegbe 2020</p>
        </div>
    )
}

export default Contact