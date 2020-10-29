import React from 'react'
import './Home.css'

import Section from '../Section'
import Welcome from './welcome/Welcome'
import Projects from './projects/Projects'
import About from './about/About'
import {projectsProps, aboutProps, contactProps, homeProps} from './Data'


const Home = () => {
    return (
        <div className="home">
            <Section
            {...homeProps}
            childComponent={<Welcome/>} />
            <Section
            {...projectsProps}
            childComponent={<Projects/>}/>
            <Section
            {...aboutProps}
            childComponent={<About/>} />
            <Section
            {...contactProps}/>
        </div>
    )
}

export default Home