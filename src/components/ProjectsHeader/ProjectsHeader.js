import React, { useContext } from 'react'
import styled from 'styled-components'
import {Diamond} from '../../contexts/LanguageIcons'
import { LanguageContext } from '../../contexts/LanguageContext'
import ScrollIcon from '../../components/ScrollIcon/ScrollIcon'

const Wrapper = styled.div`
width: 70vw;
height: 50vh;
position : absolute;
z-index: 1;
margin: 4vh 0 0 0;
display: flex;
flex-direction: row;
@media (max-width: 676px) {
    width: 100vw;
    padding: 0 10vw;
}
`
const Heading = styled.div`
color: white;
width: 50%;
font-size : 8rem;
line-height: 7rem;
margin-top: 8vh;
z-index: 1;
transform: translateY(10rem);
animation: fadeIn .7s forwards 2.4s;
transition: .6s;
opacity: ${({isBarOpen}) => isBarOpen ? "0" : "0"};
@media (max-width: 1200px) {
    font-size: 6rem;
    line-height: 5rem;
    margin-top: 20vh;
}
@media (max-width: 991px) {
    margin-top: 26vh;
}
@media (max-width: 676px) {
    margin-top: 20vh;
}
@media (max-width: 476px) {
    margin-top: 24vh;
    font-size: 4rem;
}
`

const Text = styled.div`
color: white;
width: 50%;
font-family: 'Barlow Condensed', sans-serif;
font-weight: 100;
font-size: 1rem;
color: whitesmoke;
line-height: 2.2rem;
margin-top: 20vh;
letter-spacing: 1.6px;
padding: 3vw 0vw 5vw 12vw;
opacity: 0;
transform: translateY(10rem);
animation: fadeIn .7s forwards 2.8s;
h4 {
    b {
        font-weight: 600;
    }
    font-weight: 100;
    font-size: 1.5rem;
}
p {
    letter-spacing: 2px;
}
@media (max-width: 991px) {
    padding: 0;
    margin-top: 16vh;
}
@media (max-width: 676px) {
    margin-top: 10vh;
    padding: 0;
    width: 60vw;
    text-align: justify;
    line-height: 1.6rem;
}
`

const DiamondWrapper = styled.span`
display: block;
position: absolute;
left: 50%;
top: 14vh;
width: 30rem;
height: 12rem;
transform: rotate(40deg);
@media (max-width: 991px) {
    top: 0vh;
    left: 0%;
}
@media (max-width: 676px) {
    top: 0vh;
    left: -10vw;
}
@media (max-width: 476px) {
    top: 0vh;
    left: -18vw;
}
`

function ProjectsHeader() {
    const { language } = useContext(LanguageContext);
    return (
        <Wrapper>
            <Heading>
                {language === "PL" ? "Moje" : "My"} <DiamondWrapper><Diamond /></DiamondWrapper><br />
                {language === "PL" ? "Projekty" : "Projects"}
            </Heading>
            <ScrollIcon top={"40vh"} left={"-5vw"}/>
            <Text>
                {language === "PL" ? 
                <h4>
                    <b>Lista ostatnich</b><br />
                    dwóch projektów.
                </h4>
                :
                <h4>
                <b>List of two</b><br />
                    recent projects.
                </h4>
                }
                
                <p>
                    {language === "PL" ? "Są to moje najświeższe projekty, które pokazują moje aktualne umiejętności front endowe." : "These are my latest projects that show my current front end skills." }
                    
                </p>
            </Text>
            
        </Wrapper>
    )
}

export default ProjectsHeader
