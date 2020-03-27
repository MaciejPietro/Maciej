import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
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
const ListItem = styled.li`
color: black;
font-size: 3rem;
letter-spacing: 0.2rem;
list-style: none;
margin: .7rem 0 0 0;
z-index:0;
    &::before {
        background-color: ${({pink, purple, yellow, darkcyan, green}) => {
            if(pink) {
                return "pink"
            } else if(purple) {
                return "purple"
            } else if(yellow) {
                return "yellow"
            } else if(darkcyan) {
                return "darkcyan"
            } else if(green) {
                return "green"
            } 
        }};
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


function Menu({isBarOpen}) {
    let menu = useRef(null)

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
            <List>
                <ListItem onMouseEnter={enterItem.bind(this)} onMouseLeave={leaveItem.bind(this)} pink>Strona Glowna</ListItem>
                <ListItem onMouseEnter={enterItem.bind(this)} onMouseLeave={leaveItem.bind(this)} purple> O mnie</ListItem>
                <ListItem onMouseEnter={enterItem.bind(this)} onMouseLeave={leaveItem.bind(this)} yellow>Ujetnosci</ListItem>
                <ListItem onMouseEnter={enterItem.bind(this)} onMouseLeave={leaveItem.bind(this)} darkcyan>Projekty</ListItem>
                <ListItem onMouseEnter={enterItem.bind(this)} onMouseLeave={leaveItem.bind(this)} green>Kontakt</ListItem>
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
