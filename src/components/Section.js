import React from 'react'
import './Section.css'


const Section = ({id}) => {
    return (
        <section className="section" id={`#${id}`}>
            <p>{id}</p>
        </section>
    )
}

export default Section