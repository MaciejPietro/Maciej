import React, { useRef, useEffect, useContext } from 'react'
import { TimelineMax} from "gsap";
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
        const tl = new TimelineMax()

            const contentEntrance = () => {
                if(isBarOpen) { 
                    tl.to(intro.current, 0.6,{ opacity: "0"});
                    tl.delay(2.5).to(pic.current, 0.6,{ opacity: "0"});
            
                    } else if (!isBarOpen) {
                        tl.delay(2.5).fromTo(intro.current, 0.6,{transform: "translate(0, 20rem)", opacity: "0"}, {transform: "translate(0, 0rem)", opacity: "1"})
                        .fromTo(pic.current, 0.6,{transform: "translate(0, 20rem)", opacity: "0"}, {transform: "translate(0, 0rem)", opacity: "1"}, '-=0.3');
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
