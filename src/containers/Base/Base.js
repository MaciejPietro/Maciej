import React, { useContext, useEffect, useRef } from 'react'
import { Route, Switch } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext'
import { NavbarContext } from '../../contexts/NavbarContext'
import { CurrentSectionContext } from '../../contexts/CurrentSectionContex'
import { CursorContext } from '../../contexts/CursorContext'
import { TimelineMax} from "gsap";
import styled from 'styled-components'



import LineNav from '../../components/LineNav/LineNav'
import Language from '../../components/Language/Language'
import Sidebar from '../../components/Sidebar/Sidebar'
import NavButton from '../../components/NavButton/NavButton'
import Logo from '../../components/Logo/Logo'

import About from '../About/About'
import Home from '../Home/Home'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'

const SidebarWrapper = styled.div`
z-index: 2;
width: 0;
position: fixed!important;
top: 0;
`

const LineNavWrapper = styled.div`

`

const Container = styled.div`
background-color: white;
display: flex;
height: 100vh;
justify-content: center;

`

const Block = styled.div`
transition: .8s background ease-out;
background-color: ${({section}) => {
    switch (section) {
        case "home" :
            return "#FF5851" 
        case "about" :
            return "#72a0b8" 
        case "skills" :
            return "#1C1B20" 
        case "projects" :
            return "#cca32b" 
        case "contact" :
            return "#B49A85" 
        default: 
         return "transparent"
    }
}
};
display: flex;
color: #fff;
margin: 0;
flex-shrink: 0;
z-index: 1;
transition: .6s;

`


const Base = (props) => {
    document.querySelector('body').style.overflowX = "hidden"
    let block = useRef(null);
    const { setCursor } = useContext(CursorContext);
    const { language, setLanguage } = useContext(LanguageContext);
    const { isBarOpen, setBarOpen } = useContext(NavbarContext);
    const { section, setSection } = useContext(CurrentSectionContext);
    const {  setBarVisible } = useContext(NavbarContext);
    const tl = new TimelineMax()
    const ifMobile = window.innerWidth < 676;
    let margin = ifMobile ? "0" : "3vw 5vw 3vw 5vw";
 

    // Initial section-block values
    const home = {width: ifMobile ? "50vw" : "44vw", height: ifMobile ? "100vh" : "90vh", margin: ifMobile ? "0 50vw 0 0" : "3vw 50vw 3vw 5vw"};
    const about = {width: "0vw", marginRight: "95vw"};
    const skills = {width: ifMobile ? "100vw":  "90vw",   margin: ifMobile ? "30vh 0 0 0" : "50vh 5vw 3vw 5vw" , height: ifMobile ? "70vh":  "50vh"};
    const projects = {width: ifMobile ? "100vw" : "90vw", height: "50vh", margin: `${margin}`};
    let ignore = useRef(false)



    useEffect(() => { 
        const animateHomeBlock = () => {  
            tl.fromTo(block.current, 2, {width: "110vw", margin: 0}, {width: "44vw", margin: ifMobile ? "0 50vw 0 0":  "3vw 50vw 3vw 5vw"});
        }


            animateHomeBlock();
            return () => ignore.current = true 
            
    }, [])



        const toggleSidebar = () => {
            setBarOpen(!isBarOpen)

            if(isBarOpen) {
                tl.to(block.current, 0, eval(section))
            } else if (!isBarOpen) {
                tl.to(block.current, 0, {width: "100vw", height: "100vh", margin: "0"})
            }
            }           
    
    const changeSection = (e) => {
        setBarOpen(false);
        setSection(e.target.dataset.key)
        const currentSection = eval(e.target.dataset.key)
 

        if(ignore.current) return;
        tl.to(block.current, 0, {width: ifMobile ? "100vw":  "90vw", height: ifMobile ? "100vh" :  "90vh", margin: `${margin}`})
        setTimeout(() => {
            console.log(currentSection)
        tl.to(block.current, 0.6, currentSection)
        }, 2000)
    }




    const setPL = () => {
        setLanguage("PL")
    }

    const setENG = () => {
        setLanguage("ENG")
    }

    const showSidebar = () => {
        setBarVisible(true);
        setCursor("hoverAble");
    }

    const hideSidebar = () => {
        setBarVisible(false); 
        setCursor("default")  ;  
    }

        return (
            <>
                <Container>
                        <Logo/>

                        <SidebarWrapper className="fixed-top">
                            <NavButton enter={showSidebar} hide={hideSidebar} toggle={toggleSidebar}/> 
                            <Sidebar setPL={setPL}  setENG={setENG} currentLanguage={language} changeSection={changeSection}/>
                        </SidebarWrapper>

                        <Block ref={block} section={section} className={isBarOpen ? "fixed-top" : ""}/>
                            <Switch>    
                                <Route path='/Maciej'  component={Home} exact/>
                                <Route path='/Maciej/about'  component={About}/>
                                <Route  path='/Maciej/skills'  component={Skills}/>
                                <Route  path='/Maciej/projects'  component={Projects}/>
                            </Switch> 
                        <Language setPL={setPL}  setENG={setENG} currentLanguage={language}/>
                        <LineNavWrapper className="fixed-top">
                            <LineNav changeSection={changeSection} /> 
                        </LineNavWrapper>
                        
                </Container>
            </>
        )
}

export default Base
