import React from 'react'
import './Welcome.css'


const Welcome = ({heading, headingColor}) => {
    return (
        <div className="welcome">
            <header className={`heading-text ${headingColor}`}>
                {heading}
            </header>
        </div>
    )
}

export default Welcome