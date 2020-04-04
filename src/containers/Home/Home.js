import React, { useRef, useEffect } from 'react'
import Letters from '../../components/Letters/Letters'
import LettersMobile from '../../components/Letters/LettersMobile'
import ScrollIcon from '../../components/ScrollIcon/ScrollIcon'
import Loading from '../../components/Loading/Loading'
import {TimelineMax, Bounce } from "gsap";
import styled, {createGlobalStyle}from 'styled-components'

const Global = createGlobalStyle`
body {
      overflow-y: scroll;
      overflow-x: hidden;

  }
`


const HeaderWrapper = styled.div`
position: absolute;
display: flex;
flex-flow: row wrap;
top: 28%;
left: 38%;
z-index: 1;
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
                    <Loading />
                    <HeaderWrapper>    
                        {window.innerWidth < 576 ?  <LettersMobile /> : <Letters />}
                        {window.innerWidth < 676 ?  '' : <Dot ref={dot}/>}                   
                    </HeaderWrapper>  
                    <ScrollIcon top={"84vh"} left={"52vw"}/>
            </>  
        )
}

export default Home
