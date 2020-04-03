import React, { useRef, useEffect } from 'react'
import Letters from '../../components/Letters/Letters'
import LettersMobile from '../../components/Letters/LettersMobile'
import ScrollIcon from '../../components/ScrollIcon/ScrollIcon'
import {TimelineMax, Bounce } from "gsap";
import styled, {createGlobalStyle}from 'styled-components'

const Global = createGlobalStyle`
body {
      overflow-y: scroll;
      overflow-x: hidden;

  }
`

const RightBlock = styled.div`
background-color: #F8F8F8;
display: ${({pathName}) => pathName === "/" ? "block" : "none"};
color: #fff;
margin: 3vw 3vw 3vw 0;
display: flex;
flex-grow: 1;
align-items: center;
justify-content: center;    
width: 46vw;
 @media (max-width: 676px) {
    div:first-child {
        display: none;
    }
 }
`

const HeaderWrapper = styled.div`
position: absolute;
display: flex;
flex-flow: row wrap;
top: 28%;
left: 38%;
z-index: 4;
 @media (max-width: 991px) {
    left: 28%;
 }
 @media (max-width: 567px) {
    left: 24%;
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

const Home = (props) => {
    let dot = useRef(null);
    useEffect(() => { 
        const dotEntrance = () => {
            const tl = new TimelineMax();
            if(dot.current) {
                tl.delay(3).fromTo(
                    dot.current, 
                    1, 
                    {transform: "rotateX(-90deg)",  transformOrigin: "top"}, 
                    {ease: Bounce.easeOut, transform: "rotateX(0deg)",  
                    transformOrigin: "top"});
            }
        }
        dotEntrance();

        return () => {
            dotEntrance();
        }
    }, [])


   


        return (    
            <>  
                    <Global />
                    <HeaderWrapper>    
                        {window.innerWidth < 576 ?  <LettersMobile /> : <Letters />}
                        {window.innerWidth < 676 ?  '' : <Dot ref={dot}/>}                   
                    </HeaderWrapper>  
                    <RightBlock></RightBlock>
                    <ScrollIcon top={"84vh"} left={"52vw"}/>
            </>  
        )
}

export default Home
