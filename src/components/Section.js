import React from 'react'
import './Section.css'


const Section = ({id, isDark}) => {
    return (
        <section className={`section ${isDark ? "dark" : null}`} id={id}>
            <p>{id}</p>
        </section>
    )
}

export default Section