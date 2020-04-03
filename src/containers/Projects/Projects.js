import React, { useEffect } from 'react'
import  {createGlobalStyle} from 'styled-components'
import ProjectsHeader from '../../components/ProjectsHeader/ProjectsHeader'
import Projects from '../../components/Projects/Projects'




const Global = createGlobalStyle`
body {
      overflow-y: scroll;
      overflow-x: hidden;
  }
`

function Skills() {

let count;

    useEffect(()=> {
  window.addEventListener('mousewheel', props => {
         console.log("wheel")
        })
    })
    return (
        <>
            <Global/>
            <ProjectsHeader />
            <Projects />
        </>
            
        
    )
}

export default Skills
