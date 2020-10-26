import React from 'react'
import './Projects.css'
import Card from '../../Card'


const Projects = () => {
    return (
        <div className="projects">
            <header className="projects-heading-text">Selected Projects</header>
            <div className="projects-container">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default Projects