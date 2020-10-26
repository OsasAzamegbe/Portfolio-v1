import React from 'react'
import './Card.css'


const Card = () => {
    return(
        <div className="card">
            <header className="card-heading">URL Shortening Service</header>
            <p className="card-description">URL SHORTENER that takes URLs and gives users shortened versions for easier use. The shortened URLs redirect to the original long URL when accessed through a browser. Built with the MERN stack. MongoDB, Node.js, React and Express.</p>

        </div>
    )
}

export default Card