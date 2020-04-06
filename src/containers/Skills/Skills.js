import React, {useEffect, useRef, useContext} from 'react'
import { NavbarContext } from '../../contexts/NavbarContext'
import SkillsHeader from '../../components/SkillsHeader/SkillsHeader'
import ProgrammingLanguages from '../../components/ProgrammingLanguages/ProgrammingLanguages'
import Loading from '../../components/Loading/Loading'


function Skills() {
    const { isBarOpen } = useContext(NavbarContext);
    let i = 0;
    const txt = "Lady, running down to the riptide Taken away to the dark side I wanna be your left hand man I love you when youre singing that song and to the riptide Taken away to the dark side I wanna be your left hand man I love you when youre singing that song and to the riptide Taken away to the dark side I wanna be your left hand man I love you when youre singing that song and";
    let txtWrapper = useRef(null)
    let ignore = useRef(false)

useEffect(() => {
    window.scrollTo(0, 0)
    document.querySelector('body').style.overflowY = "scroll"
    document.querySelector('body').style.overflowX = "hidden"
    
    if(ignore.current) return;
        setTimeout(() => setInterval(() => {
            if (i < txt.length && !ignore.current) {
                document.getElementById("text").innerHTML += txt.charAt(i);
                i++;
            }
        }, 16), 3000)


    return () => ignore.current = true
 }, [])


    return (
        <>  
            <Loading />
            <SkillsHeader txtWrapper={txtWrapper} isBarOpen={isBarOpen}/>
            <ProgrammingLanguages isBarOpen={isBarOpen}/>
        </>
            
        
    )
}

export default Skills
