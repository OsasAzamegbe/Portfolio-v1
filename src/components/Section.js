import React from 'react'
import './Section.css'


const Section = ({id, isDark, isRed}) => {
    return (
        <section className={`section ${isDark ? "dark" : null} ${isRed ? "red" : null}`} id={id}>
            <p>{id}</p>
        </section>
    )
}

export default Section