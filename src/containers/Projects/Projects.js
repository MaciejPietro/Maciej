import React, {useEffect, useContext} from 'react'
import { NavbarContext } from '../../contexts/NavbarContext'
import ProjectsHeader from '../../components/ProjectsHeader/ProjectsHeader'
import Projects from '../../components/Projects/Projects'
import Loading from '../../components/Loading/Loading'




function Skills() {
    const { isBarOpen } = useContext(NavbarContext);

useEffect(() => {
    window.scrollTo(0, 0)
}, [])
    return (
        <>
            <Loading />
            <ProjectsHeader isBarOpen={isBarOpen}/>
            <Projects isBarOpen={isBarOpen}/>
        </>
            
        
    )
}

export default Skills
