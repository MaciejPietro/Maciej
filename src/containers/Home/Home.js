import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import styled from 'styled-components'
import Header from '../../components/Header/Header'
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

const Home = () => {


    let leftBlock = useRef(null)
    let element;

    useEffect(() => {
        animateToState();
       
    })
    
const animateToState = () => {
    element = leftBlock.current
    const tl = gsap.timeline()

    tl.delay(1.5)
    .fromTo(element, 0.6, {width: "120%", margin: 0}, {width: "48%", margin: "2vw 0 3vw 3vw"}) 
}

        return (
            <>
                <Container>
                    <Logo />
                    <LeftBlock ref={leftBlock}>
                        <NavButton /> 
                        <Sidebar />
                    </LeftBlock>
                    <Header />
                    <RightBlock>
                        <Language />
                        <LineNav /> 
                    </RightBlock>
                </Container>
            </>
        )
}

export default Home
