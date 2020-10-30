import React from 'react'
import './ContactForm.css'


const ContactForm = () => {
    return (
        <div className="contactform">
            <form className="contactform-form">
                <div className="form-item">
                    <label className="form-label">Name</label>
                    <input name="name" id="name" type="text" placeholder="Your Name" className="form-input"/>
                </div>
                <div className="form-item">
                    <label className="form-label">Email</label>
                    <input name="email" id="email" type="email" placeholder="Your Email" className="form-input"/>
                </div>
                <div className="form-item">
                    <label className="form-label">Title</label>
                    <input name="title" id="title" type="text" placeholder="Title" className="form-input"/>
                </div>
                <div className="form-item">
                    <label className="form-label">Message</label>
                    <input name="message" id="message" type="text" placeholder="Message" className="form-input"/>
                </div>
                <div className="form-item">
                    <button className="btn form-btn" type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm