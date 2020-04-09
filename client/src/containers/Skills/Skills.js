/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useContext} from 'react'
import { NavbarContext } from '../../contexts/NavbarContext'
import { LanguageContext } from '../../contexts/LanguageContext'
import SkillsHeader from '../../components/SkillsHeader/SkillsHeader'
import ProgrammingLanguages from '../../components/ProgrammingLanguages/ProgrammingLanguages'
import Loading from '../../components/Loading/Loading'


function Skills() {
    const { isBarOpen } = useContext(NavbarContext);
    const { language } = useContext(LanguageContext);
    let i = 0;
    const txt = "Śledząc na bieżąco sytuacje na rynku IT znam najnowsze standardy web developmentu. Potrafię zaprojektować i zakodowac SPA. Poza HTML, CSS(SCSS) używam JavaScriptu z jego frameworkiem React. Znam ES6, rozumiem paradygmaty JS, asynchroniczność i potrafię działać na tablicach, manipulować DOMem etc. Na codzien korzystam z Reacta (hooks, podstawy redux), styluje za pomocą Styled Componens i animuje z CSS keyframes lub GSAP. Aktualnie uczę sie node.js, a przyszłości zamierzam React Native.";
    const txtEng = "Keeping track of the current situation on the IT market I know the latest web development standards. I can design and code SPA. In addition to HTML, CSS (SCSS) I use JavaScript with its React framework. I know ES6, I understand JS paradigms, asynchronism and I can work with arrays, manipulate the DOM etc. I use React (hooks, basics of redux) on a daily basis, styling with Styled Componens and animating with CSS keyframes or GSAP. I am currently studying node.js and I intend to use React Native in the future."; 
    let txtWrapper = useRef(null)
    let ignore = useRef(false)

useEffect(() => {
    window.scrollTo(0, 0)
    document.querySelector('body').style.overflowY = "hidden"
    
    if(ignore.current) return;
        setTimeout(() => {   
            document.querySelector('body').style.overflowY = "scroll"     
            setInterval(() => {
            switch (language) {
                case "PL":
                    if (i < txt.length && !ignore.current) {
                        document.getElementById("text").innerHTML += txt.charAt(i);
                        i++;
                    }
                    break;
                case "ENG":
                    if (i < txtEng.length && !ignore.current) {
                        document.getElementById("text").innerHTML += txtEng.charAt(i);
                        i++;
                    }
                    break;
                default:
                    document.getElementById("text").innerHTML += txt.charAt(i);
            }    
        }, 16)}, 3000)


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
