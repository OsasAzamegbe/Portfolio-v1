import React from 'react'
import './Home.css'

import Section from '../Section'
import {projectsProps, githubProps, contactProps, homeProps} from './Data'


const Home = () => {
    return (
        <div className="home">
            <Section
            {...homeProps}/>
            <Section
            {...projectsProps}/>
            <Section
            {...githubProps}/>
            <Section
            {...contactProps}/>
        </div>
    )
}

export default Home