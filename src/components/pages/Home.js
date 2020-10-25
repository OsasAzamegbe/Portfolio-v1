import React from 'react'
import './Home.css'

import Section from '../Section'
import {aboutProps, projectsProps, githubProps, contactProps} from './Data'


const Home = () => {
    return (
        <div className="home">
            <Section
            {...aboutProps}/>
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