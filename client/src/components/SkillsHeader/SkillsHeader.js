import React, { useContext } from 'react'
import styled from 'styled-components'
import skillsLaptop from '../../img/skillsLaptop.jpg'
import ScrollIcon from '../ScrollIcon/ScrollIcon'
import { LanguageContext } from '../../contexts/LanguageContext'

const Wrapper = styled.div`
position: absolute;
height: 200vh;
padding: 0 6vw 0 0;
z-index: 3;
transition: 1s;
opacity: ${({isBarOpen}) => isBarOpen ? ".6" : "1"};

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
animation: skillsMyShowUp .8s forwards 3.1s;
@media (max-width: 676px) {
    font-size: 6rem;
    left: -40vw;
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
animation: skillsSkillsShowUp .8s forwards 2.9s;
z-index: 0;
@media (max-width: 676px) {
    font-size: 8rem;
    left: -40vw;
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
animation: skillsScaleImage 1.6s forwards 2.6s;
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
        animation: skillsImage 1s forwards 2.8s;
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
font-family: 'Barlow Condensed', sans-serif;
font-size: 1.2rem;
letter-spacing: 1.4px;
font-weight: 400;
color: white;
top: 66.6vh;
left: -40vw;
margin: 0;
line-height: 1.6rem;
color: white;
@media (max-width: 1500px) {
    width: 50vw;
    padding: 1vw 5vw;
}
@media (max-width: 991px) {
    font-size: 1rem;
    padding: 0vw 5vw;
    top: 62.6vh;
}
@media (max-width: 767px) {
    font-size: 0.8rem;
}
@media (max-width: 676px) {
    top : 46.6vh;
    width: 90vw;
    padding: 1vw 5vw;
    font-size: 1.2rem;
}
@media (max-width: 410px) {
    top: 50vh;
    padding: 1vw 5vw;
    font-size: 1.2rem;
}
`


function SkillsHeader({txtWrapper, isBarOpen}) {

    const { language } = useContext(LanguageContext);

    return (
        <Wrapper isBarOpen={isBarOpen}>
            <My>{language === "PL" ? "MOJE" : "MY"} </My><br/>
            <Skills>{language === "PL" ? "Skille" : "Skills"}</Skills>
            <Image img={skillsLaptop}/>
            <Text id="text" ref={txtWrapper}/>    
        </Wrapper>
    )
}

export default SkillsHeader
