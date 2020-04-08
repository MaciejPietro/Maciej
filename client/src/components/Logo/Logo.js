import React, { useContext } from 'react'
import styled from 'styled-components'
import { NavbarContext } from '../../contexts/NavbarContext'
import { LanguageContext } from '../../contexts/LanguageContext'
import { CurrentSectionContext } from '../../contexts/CurrentSectionContex'

const Wrapper = styled.div`
font-weight: 500;
font-size: 1.2rem;
position: absolute;
transition: .6s;
top: ${({isBarOpen}) => isBarOpen ? "4vh" : "1vh" };
left: ${({isBarOpen}) => isBarOpen ? "10vw" : "5.6vw" };
color: black;
z-index: 10;
animation: slideFromTop 3s forwards;
display: flex;
flex-direction: row;
@media (max-width: 676px) {
    display:none;
}
`
const Current = styled.div`
font-family: 'Barlow Condensed', sans-serif;
font-weight: 200;
font-size: 1rem;
color: black;
margin-left: 1.2rem;
letter-spacing: 1.4px;
transition: 0.8s;
`

function Logo() {
    const { language } = useContext(LanguageContext);
    const { isBarOpen } = useContext(NavbarContext);
    const { section } = useContext(CurrentSectionContext);

    const currentSection = () => {
     
        if(section === "home") {
            return language === "PL" ? "Strona glowna" : "Main"
        } else if(section === "about") {
            return language === "PL" ? "O mnie" : "About"
        } else if(section === "skills") {
            return language === "PL" ? "Umiejetnosci" : "Skills"
        } else if(section === "projects") {
            return language === "PL" ? "Projekty" : "Projects"
        } else if(section === "contact") {
            return language === "PL" ? "Kontakt" : "Contact"
        }
    }

    return (
        <Wrapper isBarOpen={isBarOpen}>
            by Maciej Pietrolaj
            <Current>
                {currentSection()}
            </Current>
        </Wrapper>
    )
}

export default Logo
