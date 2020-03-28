import React, { useState, useEffect, useRef, useContext } from 'react'
import { Route, Switch } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext'
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

const LeftBlock = styled.div`
transition: 1s;
background-color: ${({pathName}) => pathName === "/" ? "#FF5851" : "darkcyan"};
color: #fff;
margin: 0;
display: flex;
flex-shrink: 0;
align-items: center;
justify-content: center;
width: 100%;
 
`

const RightBlock = styled.div`
background-color: #F8F8F8;
color: #fff;
margin: 3vw 3vw 3vw 0;
display: flex;
flex-grow: 1;
align-items: center;
justify-content: center;    
width: 52%;
 @media (max-width: 676px) {
    div:first-child {
        display: none;
    }
 }
`



const Base = (props) => {
    const [isBarVisible, setBarVisible] = useState(false);
    const [isBarOpen, setBarOpen] = useState(false);
    let leftBlock = useRef(null);
    let element;
    const { language, setLanguage } = useContext(LanguageContext);


    useEffect(() => { 
        const animateHomeBlock = () => {
            let margin = window.innerWidth > 767 ? "2vw 0 3vw 3vw" : "0"
            const tl = new TimelineMax()
            
            tl.delay(1.5)
            .fromTo(leftBlock.current, 0.6, {ease: Power3.easeOut, width: "120%", margin: 0}, {width: "48%", margin: `${margin}`});
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
        element = leftBlock.current;

        if(isBarOpen === false) {
            const tl = new TimelineMax()
            if(window.innerWidth < 776) {
                tl.to(element, 0.6, {ease: Power3.easeOut, width: "90%", margin: "1.3rem"});
            } else if (window.innerWidth > 776) {
                tl.to(element, 0.6, {ease: Power3.easeOut, width: "90%", margin: "6vw 0 6vw 0vw"});
            }

        } else if (isBarOpen === true) {

            const tl = new TimelineMax()
            if(window.innerWidth < 776) {
                tl.to(element, 0.6, {ease: Power3.easeOut, width: "52%", margin: "0 0 0 0"});
            } else if (window.innerWidth > 776) {
                tl.to(element, 0.6, {ease: Power3.easeOut, width: "52%", margin: "2vw 0 3vw 3vw"});
            }
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
                    <Logo isBarOpen={isBarOpen}/>
                    <LeftBlock ref={leftBlock} isBarOpen={isBarOpen} pathName={props.location.pathname}>
                        <NavButton enter={showSidebar} hide={hideSidebar} toggle={toggleSidebar} isOpen={isBarOpen}/> 
                        <Sidebar isVisible={isBarVisible} isBarOpen={isBarOpen} setPL={setPL}  setENG={setENG} currentLanguage={language} toggle={toggleSidebar}/>
                        <Loading />
                    </LeftBlock>

                            <Switch>    
                                <Route path='/'  component={Home} exact/>
                                <Route exact path='/about'  component={About}/>
                            </Switch> 

                    <RightBlock>
                        <Language setPL={setPL}  setENG={setENG} currentLanguage={language}/>
                        <LineNav /> 
                    </RightBlock>
                </Container>
            </>
        )
}

export default Base
