import React, {useEffect, useRef} from 'react'
import  {createGlobalStyle} from 'styled-components'
import SkillsHeader from '../../components/SkillsHeader/SkillsHeader'
import ProgrammingLanguages from '../../components/ProgrammingLanguages/ProgrammingLanguages'
import Loading from '../../components/Loading/Loading'

const Global = createGlobalStyle`
body {
      overflow-y: scroll;
      overflow-x: hidden;

  }
` 


function Skills() {

    let i = 0;
    const txt = "Lady, running down to the riptide Taken away to the dark side I wanna be your left hand man I love you when youre singing that song and to the riptide Taken away to the dark side I wanna be your left hand man I love you when youre singing that song and to the riptide Taken away to the dark side I wanna be your left hand man I love you when youre singing that song and";
    let txtWrapper = useRef(null)

    // function selfWritingText() {
    //     setTimeout(() => setInterval(() => {
    //         if (i < txt.length && ignore) {
    //             document.getElementById("text").innerHTML += txt.charAt(i);
    //             i++;
    //         }
    //     }, 16), 3000)
    // }

useEffect(() => {
    // window.scrollTo(0, 0)
    let ignore = false;

    function selfWritingText() {
        setTimeout(() => setInterval(() => {
            if (i < txt.length && !ignore) {
                document.getElementById("text").innerHTML += txt.charAt(i);
                i++;
            }
        }, 16), 3000)
    }
    selfWritingText()
    return  () => ignore = true
 }, [i])


    return (
        <>  
            <Global/>
            <Loading />
            <SkillsHeader txtWrapper={txtWrapper}/>
            <ProgrammingLanguages />
        </>
            
        
    )
}

export default Skills
