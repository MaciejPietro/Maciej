import React, {useEffect, useRef, useContext} from 'react'
import {NavLink} from 'react-router-dom'
import '../../animations/animations.css'
import styled from 'styled-components'

import { LanguageContext } from '../../contexts/LanguageContext'
import { NavbarContext } from '../../contexts/NavbarContext'
import { CursorContext } from '../../contexts/CursorContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import {TimelineMax} from 'gsap'


const Wrapper = styled.div`
position: absolute;
right: 30%;
top: 22vh;
    @media (max-width: 1367px) {
        right: 24%;
    }
    @media (max-width: 1200px) {
        right: 16%;
    }
    @media (max-width: 991px) {
        right: 0%;
    }
`
const List = styled.ul`
    
`
const StyledLink = styled(NavLink)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const ListItem = styled.li`
color: black;
font-size: 3rem;
letter-spacing: 0.2rem;
list-style: none;
line-height: 3.6rem;
z-index:0;
transform: rotateX(-90deg);
transform-origin: bottom;
    &::before {
        background-color: ${({pink, blue, yellow, dark, creme}) => {
            if(pink) {
                return "#FF5851"
            } else if(blue) {
                return "#72a0b8"
            } else if(dark) {
                return "#1C1B20"
            } else if(yellow) {
                return "#F3C130"
            } else if(creme) {
                return "#B49A85"
            } 
        }};
        opacity: .5;
    }
    @media (max-width: 676px) {
        font-size: 2rem;
        letter-spacing: 0.14rem;
        list-style: none;
    }
`
const Contact = styled.div`
width: 100%;
height: 6rem;
padding: 0 0 0 2.1rem;
font-family: 'Montserrat', sans-serif;
letter-spacing: 1.3px;
color: black;
line-height: 2px;
`

const SocialMedia = styled.div`
width: 100%;
height: 8rem;
padding: 0 0 0 2.1rem;
 svg{ 
     transition: .6s;
     margin-right: 10px;
     &:hover {
        color: black;
        curson: pointer;
     }
 } 
`

const Adress = styled.h5`
font-weight: 400;
font-size: .7rem;
`
const ContactDetails = styled.h4`
font-weight: 500;
font-size: .8rem;

`


function Menu({ changeSection }) {
    let contact = useRef(null);
    let social = useRef(null);
    let item = useRef(null);
    let item2 = useRef(null);
    let item3 = useRef(null);
    let item4 = useRef(null);
    let item5 = useRef(null);
    const { setCursor } = useContext(CursorContext); 
    const { language } = useContext(LanguageContext);
    const { isBarOpen } = useContext(NavbarContext);


    useEffect(() => {
        const fadeIn = () => {
            const tl = new TimelineMax()
            if(isBarOpen) {
                tl.delay(0.6).to(contact.current, 0.3, {opacity: "1", transform: "translateY(0)"})
                .to(social.current, 0.3, {opacity: "1", transform: "translateY(0)"});
            } else if(!isBarOpen) {
                tl.to(contact.current, 0.3, {opacity: "0", transform: "translateY(200px)"})
                .to(social.current, 0.3, {opacity: "0", transform: "translateY(200px)"}, '-=0.3');
            }
        }

        const cos = () => {
            item.current.style.animation = isBarOpen ? "flip-in-menu .8s ease-out .25s forwards" : "flip-out-menu 1s"
            item2.current.style.animation = isBarOpen ? "flip-in-menu .8s ease-out .40s forwards" : "flip-out-menu 1s"
            item3.current.style.animation = isBarOpen ? "flip-in-menu .8s ease-out .55s forwards" : "flip-out-menu 1s"
            item4.current.style.animation = isBarOpen ? "flip-in-menu .8s ease-out .70s forwards" : "flip-out-menu 1s"
            item5.current.style.animation = isBarOpen ? "flip-in-menu .8s ease-out .85s forwards" : "flip-out-menu 1s"

        }
            cos()
            fadeIn()
            return () => {
                cos()
                fadeIn()
            }
    }, [isBarOpen])

  const enterItem = (e) => {
      e.target.classList.add('active')
      setCursor("hoverAble")
  }
  const leaveItem = (e) => {
    e.target.classList.remove('active')
    setCursor("default")
  }
    return (
        
        <Wrapper>
            <List >
                <StyledLink exact to='/'>
                    <ListItem isBarOpen={isBarOpen} ref={item}  delay={"0.5s"} data-key="home" onMouseEnter={enterItem} onMouseLeave={leaveItem} onClick={changeSection} pink>
                        {language === "PL" ? "Glowna." : "Home."}
                    </ListItem>
                </StyledLink>

                <StyledLink to='/about'>
                    <ListItem isBarOpen={isBarOpen} ref={item2} delay={"0.5s"} data-key="about" onMouseEnter={enterItem} onMouseLeave={leaveItem} onClick={changeSection}  blue>
                        {language === "PL" ? "O mnie." : "About."}
                    </ListItem>
                </StyledLink>

                <StyledLink to='/skills'>
                    <ListItem  isBarOpen={isBarOpen} ref={item3} delay={"0.5s"} data-key="skills" onMouseEnter={enterItem} onMouseLeave={leaveItem} onClick={changeSection}  dark>
                        {language === "PL" ? "Umiejetnosci." : "Skills."}
                    </ListItem>
                </StyledLink>

                <StyledLink to='/projects'>
                    <ListItem isBarOpen={isBarOpen} ref={item4} delay={"0.5s"} data-key="projects"onMouseEnter={enterItem} onMouseLeave={leaveItem} onClick={changeSection} yellow>
                        {language === "PL" ? "Projekty." : "My Projects."}
                    </ListItem>
                </StyledLink>

                <StyledLink to='/contact'>
                    <ListItem isBarOpen={isBarOpen} ref={item5} delay={"0.5s"} onMouseEnter={enterItem} onMouseLeave={leaveItem} creme>
                        {language === "PL" ? "Kontakt." : "Contact."}
                    </ListItem>
                </StyledLink>
            </List> 
            <Contact ref={contact}>
                <Adress>Polska, Wyrzysk</Adress>
                <ContactDetails>tel: 663417209</ContactDetails>
                <ContactDetails>mail: mpietrolaj1@wp.pl</ContactDetails>
            </Contact>
            <SocialMedia ref={social} onMouseOver={() => setCursor("hoverAble")} onMouseLeave={() => setCursor("default")}>
                <FontAwesomeIcon icon={faGithub} color="gray" size="lg"/>
                <FontAwesomeIcon icon={faFacebook} color="gray" size="lg" />
                <FontAwesomeIcon icon={faYoutube} color="gray" size="lg"/>                       
            </SocialMedia>      
        </Wrapper>
    )
}

export default Menu
