import React, { useContext, useEffect, useRef, useState  } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext'
import { NavbarContext } from '../../contexts/NavbarContext'
import { Power3, TimelineMax} from "gsap";
import styled from 'styled-components'

import LineNav from '../../components/LineNav/LineNav'
import Language from '../../components/Language/Language'
import Sidebar from '../../components/Sidebar/Sidebar'
import NavButton from '../../components/NavButton/NavButton'
import Logo from '../../components/Logo/Logo'
import Loading from '../../components/Loading/Loading'
import About from '../About/About'
import Home from '../Home/Home'


const Container = styled.div`
    background-color: white;
  display: flex;
  height: 100vh;
  justify-content: center;
`

const Block = styled.div`
transition: .8s background ease-out;
background-color: ${({blockColor}) => blockColor === "home" ? "#FF5851" : "#414A6B"};
display: flex;
color: #fff;
margin: 0;
flex-shrink: 0;
z-index: 2;
`


const Base = (props) => {
    let block = useRef(null);
    const { language, setLanguage } = useContext(LanguageContext);
    const { isBarOpen, setBarOpen } = useContext(NavbarContext);
    const [ blockColor, setBlockColor ] = useState("home")
    const {  setBarVisible } = useContext(NavbarContext);
    let history = useHistory()

    useEffect((props) => { 

        // window.addEventListener('mousewheel', props => {
        //     history.push("/about");
        // })
    
        const animateHomeBlock = () => {
            let margin = window.innerWidth > 767 ? "2vw 0 3vw 3vw" : "0"
            const tl = new TimelineMax()      
            tl.delay(1.5)
            .fromTo(block.current, 0.6, {ease: Power3.easeOut, width: "120%", margin: 0}, {width: "48%", margin: `${margin}`});
        }
        animateHomeBlock();
        return () => {
            animateHomeBlock();
        }
    }, [])


    const showSidebar = () => {
        setBarVisible(true);
    }

    const hideSidebar = () => {
        setBarVisible(false);      
    }

    const toggleSidebar = () => {
        setBarOpen(!isBarOpen);
        
        const tl = new TimelineMax()
            // switch (props.location.pathname) 
                        if(isBarOpen === false) {
                            if(window.innerWidth < 776 && block.current) {
                                tl.to(block.current, 0.6, {ease: Power3.easeOut, width: "90%", margin: "1.3rem"});
                            } else {
                                console.log("wszedl")
                                tl.to(block.current, 0.6, { width: "90%", margin: "6vw 0 6vw 0vw", display: "flex"});
                            }}
                         else if (isBarOpen === true) {                          
                            if(window.innerWidth < 776 && block.current) {
                                tl.to(block.current, 0.6, {ease: Power3.easeOut, width: "52%", margin: "0 0 0 0"});
                            } else {
                                tl.to(block.current, 0.6, {ease: Power3.easeOut, width: "52%", margin: "2vw 0 3vw 3vw"});
                            }
                        }   
                        
            }
    


    const changeSection = (e) => {
        const tl = new TimelineMax()
        switch (e.target.dataset.key) {
            case "home":
                setBlockColor("home");
                setBarOpen(!isBarOpen);
                tl.delay(0.6)
                .fromTo(block.current, 0.8, {ease: Power3.easeOut, width: "90%", margin: "6vw 0 6vw 0vw",}, {ease: Power3.easeOut, width: "50%"});
                break;
            case "about":
                setBlockColor("about");
                setBarOpen(!isBarOpen);    
                tl.delay(0.6)
                .fromTo(block.current, 0.8, {ease: Power3.easeOut, width: "90%", margin: "6vw 0 6vw 0vw", justifyContent: "flex-start",}, {ease: Power3.easeOut, width: "0%", marginRight: "80vw", display: "none"});

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
                        <NavButton enter={showSidebar} hide={hideSidebar} toggle={toggleSidebar}/> 
                        <Sidebar setPL={setPL}  setENG={setENG} currentLanguage={language} changeSection={changeSection}/>
                        <Loading />
                        <Block ref={block} blockColor={blockColor}/>
                            <Switch>    
                                <Route path='/'  component={Home} exact/>
                                <Route  path='/about'  component={About}/>
                            </Switch> 
                        <Language setPL={setPL}  setENG={setENG} currentLanguage={language}/>
                        <LineNav /> 
                </Container>
            </>
        )
}

export default Base
