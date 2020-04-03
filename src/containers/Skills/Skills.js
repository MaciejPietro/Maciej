import React from 'react'
import  {createGlobalStyle} from 'styled-components'
import SkillsHeader from '../../components/SkillsHeader/SkillsHeader'
import ProgrammingLanguages from '../../components/ProgrammingLanguages/ProgrammingLanguages'

const Global = createGlobalStyle`
body {
      overflow-y: scroll;
      overflow-x: hidden;

  }
`


function Skills() {
    return (
        <>
            <Global/>
            <SkillsHeader />
            <ProgrammingLanguages />
        </>
            
        
    )
}

export default Skills
