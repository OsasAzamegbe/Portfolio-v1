import React from 'react'
import './Home.css'

import Section from '../Section'


const Home = () => {
    return (
        <div className="home">
            <Section
            id="about"/>
            <Section
            id="projects"/>
            <Section
            id="github"/>
            <Section
            id="contact"/>
        </div>
    )
}

export default Home