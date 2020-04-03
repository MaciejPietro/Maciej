import React, { useRef, useEffect, useContext } from 'react'
import { TimelineMax} from "gsap";
import { NavbarContext } from '../../contexts/NavbarContext'
import Introduce from '../../components/Introduce/Introduce'
import Pictures from '../../components/Pictures/Pictures'
import styled from 'styled-components'

const Wrapper = styled.section`
z-index:1;
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

        const tl = new TimelineMax()
        // const tl2 = new TimelineMax()
    
        if(isBarOpen) { 
        tl.to(intro.current, 0.6,{ opacity: "0"});
        tl.delay(2.5).to(pic.current, 0.6,{ opacity: "0"});

        } else if (!isBarOpen) {
            tl.delay(2.5).fromTo(intro.current, 0.6,{transform: "translate(0, 20rem)", opacity: "0"}, {transform: "translate(0, 0rem)", opacity: "1"})
            .fromTo(pic.current, 0.6,{transform: "translate(0, 20rem)", opacity: "0"}, {transform: "translate(0, 0rem)", opacity: "1"}, '-=0.3');
        }
    }, [isBarOpen])

        return (  
       
            <Wrapper>
                    <Introduce reference={intro}/>   
                    <Pictures reference={pic}/>           
            </Wrapper>
         
        )
}

export default About
