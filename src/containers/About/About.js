/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useContext } from 'react'
import { TweenMax } from 'gsap/all';
import { NavbarContext } from '../../contexts/NavbarContext'
import Introduce from '../../components/Introduce/Introduce'
import Pictures from '../../components/Pictures/Pictures'
import Loading from '../../components/Loading/Loading'
import styled from 'styled-components'

const Wrapper = styled.section`
position: absolute;
padding: 3vw;
display: flex;
flex-direction: row;
@media (max-width: 991px){
    flex-direction: column;
}
`



const About = () => {
    
    let intro = useRef(null);
    let pic = useRef(null);
    const { isBarOpen } = useContext(NavbarContext);

 
    useEffect(() => {
        window.scrollTo(0, 0)
        document.querySelector('body').style.overflowY = "scroll"

            const contentEntrance = () => {
                if(isBarOpen) { 
                    TweenMax.to(intro.current, 0.6,{ opacity: "0"});
                    TweenMax.to(pic.current, 0.6,{ opacity: "0"});
            
                    } else if (!isBarOpen) {
                        TweenMax.fromTo(intro.current, 0.6,{transform: "translate(0, 20rem)", opacity: "0"}, {transform: "translate(0, 0rem)", opacity: "1", delay:3})
                        TweenMax.fromTo(pic.current, 0.6,{transform: "translate(0, 20rem)", opacity: "0"}, {transform: "translate(0, 0rem)", opacity: "1", delay:3.4}, '-=0.3');
                    } 
            }


            contentEntrance()
        return  () => contentEntrance()
    }, [])

        return (  
       
            <Wrapper>
                    <Loading />
                    <Introduce reference={intro}/>   
                    <Pictures reference={pic}/>           
            </Wrapper>
         
        )
}

export default About
