import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'


const Card = () => {
    return(
        <div className="card">
            <div className="card-container">
                <header className="card-heading">URL Shortening Service</header>
                <p className="card-description">URL SHORTENER that takes URLs and gives users shortened versions for easier use. The shortened URLs redirect to the original long URL when accessed through a browser.</p>
                <div className="card-links-container">
                    <Link className="card-link" target="_blank" to="//github.com/OsasAzamegbe/Url-Shortening-Service">
                        Code Base
                    </Link>
                    <Link className="card-link" target="_blank" to="//sh-orten.herokuapp.com/">
                        Live Version
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Card