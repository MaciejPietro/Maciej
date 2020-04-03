import React, { useContext, useEffect, useRef } from 'react'
import { Route, Switch } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext'
import { NavbarContext } from '../../contexts/NavbarContext'
import { CurrentSectionContext } from '../../contexts/CurrentSectionContex'
import { TimelineMax} from "gsap";
import styled from 'styled-components'

import LineNav from '../../components/LineNav/LineNav'
import Language from '../../components/Language/Language'
import Sidebar from '../../components/Sidebar/Sidebar'
import NavButton from '../../components/NavButton/NavButton'
import Logo from '../../components/Logo/Logo'
import Loading from '../../components/Loading/Loading'

import About from '../About/About'
import Home from '../Home/Home'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'

const SidebarWrapper = styled.div`
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
`


const Base = (props) => {
    let block = useRef(null);
    const { language, setLanguage } = useContext(LanguageContext);
    const { isBarOpen, setBarOpen } = useContext(NavbarContext);
    const { section, setSection } = useContext(CurrentSectionContext);
    const {  setBarVisible } = useContext(NavbarContext);
    const tl = new TimelineMax()
    let margin = window.innerWidth > 767 ? "3vw 5vw 3vw 5vw" : "0";

    // Initial section-block values
    const home = {width: "520vw", margin: `${margin}`};
    const about = {width: "0vw", marginRight: "95vw"};
    const skills = {width: "90vw",   margin: `${window.innerWidth < 676 ? "0" : "50vh 3vw 0vw 3vw"}` , height: "200rem"};
    const projects = {width: "90vw", height: "50vh", margin: `${margin}`};

    useEffect(() => { 

        // window.addEventListener('mousewheel', props => {
        //     history.push("/about");
        // })
        const animateHomeBlock = () => {  
            const tlInit = new TimelineMax() 
            tlInit.delay(1.5)
                .fromTo(block.current, 0.6, {width: "100vw", margin: 0}, {width: "50vw", margin: `${margin}`});
        }
            animateHomeBlock();
            return () => {
                animateHomeBlock();
            }
    }, [margin])


// obj[section] = sekcja;

        const showSidebar = () => {
            setBarVisible(true);
        }

        const hideSidebar = () => {
            setBarVisible(false);      
        }

        const toggleSidebar = () => {
            setBarOpen(!isBarOpen)

            if(!isBarOpen) {
                tl.fromTo(block.current, 0.6, window[section], {width: "90vw", height: "90vh", margin: `${margin}`}) // OTWARTY SIDEBAR
            } else if (isBarOpen) {

                switch (section) {                                                                         // ZAMKNIETY SIDEBAR
                    case "home":
                        tl.delay(1.5)
                        .to(block.current, 0.6, home);
                        break;
                    case "about":
                        tl.to(block.current, 0.6, {width: "90vw", margin: `${margin}`})
                        .delay(1.2)
                        .to(block.current, 0.6, about)
                        break;
                    case "skills":
                        tl.to(block.current, 0.6, {width: "90vw", margin: `${margin}`})
                        .delay(1.2)
                        .to(block.current, 0.6, skills);
                        break;
                    case "projects":
                        tl.to(block.current, 0.6, {width: "90vw", margin: `${margin}`})
                        .delay(1.2)
                        .to(block.current, 0.6, projects);
                        break;
                    default:
                }
            }           
        }
    
    const changeSection = (e) => {
        setBarOpen(!isBarOpen);
        setSection(e.target.dataset.key);

        switch (e.target.dataset.key) {
            case "home":
                tl.to(block.current, 0.6, home);
                break;
            case "about":
                tl.to(block.current, 0.6,   {width: "90vw", margin: `${margin}`})
                .delay(1.2)
                .to(block.current, 0.6, about)
                break;
            case "skills":
                tl.to(block.current, 0.6, {width: "90vw", margin: `${margin}`})
                .delay(1.2)
                .to(block.current, 0.6, skills);
                break;
            case "projects":
                tl.to(block.current, 0.6,   {width: "90vw", margin: `${margin}`})
                .delay(1.2)
                .to(block.current, 0.6, projects);
                break;
            default:
        }

    }

    const setPL = () => {
        setLanguage("PL")
    }

    const setENG = () => {
        setLanguage("ENG")
    }

        return (
            <>
                <Container>
                        <Logo/>

                        <SidebarWrapper className="fixed-top">
                            <NavButton enter={showSidebar} hide={hideSidebar} toggle={toggleSidebar}/> 
                            <Sidebar setPL={setPL}  setENG={setENG} currentLanguage={language} changeSection={changeSection}/>
                        </SidebarWrapper>
                  


                        <Loading />
                        <Block ref={block} section={section}/>
                            <Switch>    
                                <Route path='/'  component={Home} exact/>
                                <Route  path='/about'  component={About}/>
                                <Route  path='/skills'  component={Skills}/>
                                <Route  path='/projects'  component={Projects}/>
                            </Switch> 
                        <Language setPL={setPL}  setENG={setENG} currentLanguage={language}/>
                        <LineNavWrapper className="fixed-top">
                            <LineNav /> 
                        </LineNavWrapper>
                        
                </Container>
            </>
        )
}

export default Base
