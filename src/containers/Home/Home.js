import React, { useRef, useEffect } from 'react'
import Letters from '../../components/Letters/Letters'
import LettersMobile from '../../components/Letters/LettersMobile'
import {TimelineMax, Bounce } from "gsap";
import styled from 'styled-components'


const HeaderWrapper = styled.div`
position: absolute;
display: flex;
flex-flow: row wrap;
margin-left: 12vw;
margin-top: 16rem;
 @media (max-width: 991px) {
    margin-left: 16vw;
 }
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

    let dot = useRef(null);

    useEffect(() => { 
        const dotEntrance = () => {
            const tl = new TimelineMax();
            tl.delay(3).fromTo(
                dot.current, 
                1, 
                {transform: "rotateX(-90deg)",  transformOrigin: "top"}, 
                {ease: Bounce.easeOut, transform: "rotateX(0deg)",  
                transformOrigin: "top"});
        }
        dotEntrance();
        return () => {
            dotEntrance()
        }
    }, [])

        return (
                            <HeaderWrapper>    
                                {window.innerWidth < 676 ?  <LettersMobile /> : <Letters />}
                                {window.innerWidth < 676 ?  '' : <Dot />}
                            </HeaderWrapper>
        )
}

export default Home
