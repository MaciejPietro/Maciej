import React, {useEffect} from 'react'
import ProjectsHeader from '../../components/ProjectsHeader/ProjectsHeader'
import Projects from '../../components/Projects/Projects'
import Loading from '../../components/Loading/Loading'




function Skills() {


useEffect(() => {
    window.scrollTo(0, 0)
}, [])
    return (
        <>
            <Loading />
            <ProjectsHeader />
            <Projects />
        </>
            
        
    )
}

export default Skills
