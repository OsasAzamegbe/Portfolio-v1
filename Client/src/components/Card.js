import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'
import {SiNodeDotJs, SiReact, SiMongodb} from 'react-icons/si'


const Card = ({headingText, descriptionText, codeBaseHref, liveVersionHref}) => {
    return(
        <div className="card">
            <div className="card-container">
                <header className="card-heading">{headingText}</header>
                <p className="card-description">{descriptionText}</p>
                <div className="card-links-container">
                    <Link className="card-link" target="_blank" to={codeBaseHref}>
                        Code Base
                    </Link>
                    <Link className="card-link" target="_blank" to={liveVersionHref}>
                        Live Version
                    </Link>
                </div>
                <div className="card-techstack">
                    <SiNodeDotJs className="icon node-icon"/>
                    <SiReact className="icon react-icon"/>
                    <SiMongodb className="icon mongodb-icon"/>
                </div>

            </div>
            
        </div>
    )
}

export default Card