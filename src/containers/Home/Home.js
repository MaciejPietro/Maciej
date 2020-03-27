import React, { useState, useEffect, useRef } from 'react'
import gsap, {TimelineMax, Bounce} from "gsap";
import styled from 'styled-components'
import Letters from '../../components/Letters/Letters'
import LineNav from '../../components/LineNav/LineNav'
import Language from '../../components/Language/Language'
import Sidebar from '../../components/Sidebar/Sidebar'
import NavButton from '../../components/NavButton/NavButton'
import Logo from '../../components/Logo/Logo'


const Container = styled.div`
    background-color: white;
  display: flex;
  height: 100vh;
  justify-content: center;
`

const LeftBlock = styled.div`
background-color: #FF5851;
color: #fff;
margin: 0;
display: flex;
flex-shrink: 0;
align-items: center;
justify-content: center;
width: 100%;
 @media (max-width: 676px) {
    margin: 4rem 0!important;
 }
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
`
const HeaderWrapper = styled.div`
position: absolute;
display: flex;
flex-flow: row wrap;
margin-left: 12vw;
margin-top: 16rem;
`
const Dot = styled.span`
display: block;
background-color:#FF5851;
width: 40px;
height: 40px;
border-radius: 50%;
position: absolute;
bottom: 20px;
left: 380px;
`

const Home = () => {
    const [isBarVisible, setBarVisible] = useState(false);
    const [isBarOpen, setBarOpen] = useState(false);
    let leftBlock = useRef(null);
    let element;
    let dot = useRef(null)


    useEffect(() => { 
        const animateHomeBlock = () => {
            let margin = window.innerWidth > 767 ? "2vw 0 3vw 3vw" : "0"
            const tl = gsap.timeline();
            
            tl.delay(1.5)
            .fromTo(leftBlock.current, 0.6, {width: "120%", margin: 0}, {width: "48%", margin: `${margin}`});
        }
        const dotEntrance = () => {
            const tl = new TimelineMax();
            tl.delay(3).fromTo(
                dot.current,
                1,
                {transform: "rotateX(-90deg)",  transformOrigin: "top"}, {ease: Bounce.easeOut, transform: "rotateX(0deg)",  transformOrigin: "top"});
        }
        dotEntrance();
        animateHomeBlock();
        return () => {
            animateHomeBlock();
            dotEntrance()
        }
    }, [])


    const showSidebar = () => {
        setBarVisible(true);
    }

    const hideSidebar = () => {
        setBarVisible(false);
        
    }

    const openSidebar = () => {
        setBarOpen(!isBarOpen);
        element = leftBlock.current;

        if(isBarOpen === false) {
            const tl = gsap.timeline()
            tl.to(element, 0.6, {width: "90%", margin: "6vw 0 6vw 0vw"});
        } else if (isBarOpen === true) {
            const tl = gsap.timeline()
            tl.to(element, 0.6, {width: "48%", margin: "2vw 0 3vw 3vw"});
        }
    }

    


        return (
            <>
                <Container>
                    <Logo isBarOpen={isBarOpen}/>
                    <LeftBlock ref={leftBlock}>
                        <NavButton enter={showSidebar} leave={hideSidebar} open={openSidebar} isOpen={isBarOpen}/> 
                        <Sidebar isVisible={isBarVisible} isBarOpen={isBarOpen}/>
                    </LeftBlock>
                        <HeaderWrapper>
                            <Letters />
                            <Dot ref={dot}/>    
                        </HeaderWrapper>
                    <RightBlock>
                        <Language />
                        <LineNav /> 
                    </RightBlock>
                </Container>
            </>
        )
}

export default Home
