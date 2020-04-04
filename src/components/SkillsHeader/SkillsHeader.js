import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import skillsLaptop from '../../img/skillsLaptop.jpg'
import ScrollIcon from '../ScrollIcon/ScrollIcon'

const Wrapper = styled.div`
position: absolute;
height: 200vh;
padding: 0 6vw 0 0;
z-index: 1;
`
const My = styled.div`
position: absolute;
width: 40rem;
top: ${window.innerWidth < 676 ? "21.6vh" : "41.6vh"};
left: -30vw;
font-size: 11rem;
font-family: 'Rockout';
margin: 0;
line-height: 5.7rem;
color: #1C1B20;
transform: rotateX(-90deg);
opacity: 0;
animation: skillsMyShowUp .8s forwards 2.6s;
}
`

const Skills = styled.div`
position: absolute;
width: 40rem;
top: ${window.innerWidth < 676 ? "30.6vh" : "50.6vh"};
left: -30vw;
font-size: 10rem;
font-family: 'Rockout';
margin: 0;
line-height: 5.7rem;
color: white;
transform: translateY(-5vh) rotateX(-90deg);
transform-origin: top;
opacity: 0;
animation: skillsSkillsShowUp .8s forwards 2.2s;
z-index: 0;
}
`

const Image = styled.div`
position: absolute;
top: 50vh;
left: 0;
margin-left: 7vw;
width: 41vw;
height: 42vh;
background-image: url(${({img}) => img});
background-size: 240%;
background-position: center;
opacity: 0;
animation: skillsScaleImage 2s forwards 1.2s;
overflow: hidden;
z-index: -1;
    &:before {
        content: '';
        width: 41vw;
        height: 51vh;
        position: absolute;
        top: 0;
        left: 0;
        margin-top: 0vh;
        background-color: #1C1B20;
        animation: skillsImage 1s forwards 2.22s;
    }
@media (max-width: 991px) {
    animation: none;
    background-size: cover;
    opacity: 1;
}
@media (max-width: 676px) {
    display: none;
}
`


const Text = styled.div`
z-index: 4;
position: absolute;
width: 45vw;
padding: 1vw 10vw;
top: ${window.innerWidth < 676 ? "51.6vh" : "71.6vh"};
left: -40vw;
font-size: 1rem;
font-family: 'Rockout';
margin: 0;
line-height: 1.6rem;
letter-spacing: 1.6px;
color: white;
@media (max-width: 676px) {
    width: 90vw;
    padding: 1vw 5vw;
}
`


function SkillsHeader({txtWrapper}) {



    return (
        <Wrapper>
            <ScrollIcon top={"86vh"} left={"-40vw"} color={"white"}/>
            <My>MY </My><br/>
            <Skills>Skills </Skills>
            <Image img={skillsLaptop}/>
            <Text id="text" ref={txtWrapper}>
            </Text>
       
        </Wrapper>
    )
}

export default SkillsHeader
