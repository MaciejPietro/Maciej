import React, {useEffect, useRef, useContext} from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

import { LanguageContext } from '../../contexts/LanguageContext'
import { NavbarContext } from '../../contexts/NavbarContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import {TimelineMax} from 'gsap'


const Wrapper = styled.div`
position: absolute;
right: 40%;
top: 22vh;
    @media (max-width: 1367px) {
        right: 30%;
    }
    @media (max-width: 1200px) {
        right: 24%;
    }
    @media (max-width: 991px) {
        right: 6%;
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
margin: .7rem 0 0 0;
z-index:0;
    &::before {
        background-color: ${({pink, blue, yellow, darkcyan, green}) => {
            if(pink) {
                return "#FF5851"
            } else if(blue) {
                return "#414A6B"
            } else if(yellow) {
                return "yellow"
            } else if(darkcyan) {
                return "darkcyan"
            } else if(green) {
                return "green"
            } 
        }};
        opacity: .5;
    }
    @media (max-width: 676px) {
        font-size: 2rem;
        letter-spacing: 0.14rem;
        list-style: none;
        margin: .4rem 0 0 0;
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
    let menu = useRef(null);
    const { language } = useContext(LanguageContext);
    const { isBarOpen } = useContext(NavbarContext);


    useEffect(() => {
        const fadeIn = () => {
            const tl = new TimelineMax()
            if(isBarOpen) {
                tl.delay(0.6)
                .to(menu.current, 0.6, {opacity: "1", transform: "translateY(0)"})
            } else if(!isBarOpen) {
                tl.to(menu.current, 0.3, {opacity: "0", transform: "translateY(200px)"})
            }
        }
            fadeIn()
            return () => {
                fadeIn() 
            }
    }, [isBarOpen])

  const enterItem = (e) => {
      e.target.classList.add('active')
  }
  const leaveItem = (e) => {
    e.target.classList.remove('active')
  }
    return (
        
        <Wrapper ref={menu}>
            <List >
                <StyledLink exact to='/'>
                    <ListItem data-key="home" onMouseEnter={enterItem} onMouseLeave={leaveItem} onClick={changeSection} pink>
                        {language === "PL" ? "Glowna" : "Home"}
                    </ListItem>
                </StyledLink>

                <StyledLink to='/about'>
                    <ListItem data-key="about" onMouseEnter={enterItem} onMouseLeave={leaveItem} onClick={changeSection} blue>
                        {language === "PL" ? "O mnie" : "About"}
                    </ListItem>
                </StyledLink>

                <StyledLink to='/skills'>
                    <ListItem onMouseEnter={enterItem} onMouseLeave={leaveItem} onClick={changeSection} yellow>
                        {language === "PL" ? "Umiejetnosci" : "Skills"}
                    </ListItem>
                </StyledLink>

                <StyledLink to='/projects'>
                    <ListItem onMouseEnter={enterItem} onMouseLeave={leaveItem}  darkcyan>
                        {language === "PL" ? "Projekty" : "My Projects"}
                    </ListItem>
                </StyledLink>

                <StyledLink to='/contact'>
                    <ListItem onMouseEnter={enterItem} onMouseLeave={leaveItem} green>
                        {language === "PL" ? "Kontakt" : "Contact"}
                    </ListItem>
                </StyledLink>
            </List> 
            <Contact>
                <Adress>Polska, Wyrzysk</Adress>
                <ContactDetails>tel: 663417209</ContactDetails>
                <ContactDetails>mail: mpietrolaj1@wp.pl</ContactDetails>
            </Contact>
            <SocialMedia>
                <FontAwesomeIcon icon={faGithub} color="gray" size="lg"/>
                <FontAwesomeIcon icon={faFacebook} color="gray" size="lg"/>
                <FontAwesomeIcon icon={faYoutube} color="gray" size="lg"/>
         
               
            </SocialMedia>       
        </Wrapper>
    )
}

export default Menu
