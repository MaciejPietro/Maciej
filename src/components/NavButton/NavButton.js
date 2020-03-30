import React, { useContext } from 'react'
import styled from 'styled-components'
import { NavbarContext } from '../../contexts/NavbarContext'

const Wrapper = styled.div`
`
const Button = styled.div`
width: 60px;
height: 60px;
position: absolute;
top: 46vh;
transition: 1s;
left: ${({isBarOpen}) => isBarOpen ? "13vw" : "2vw"};
z-index: 6;
animation: slideFromLeft 3s forwards;
    &:hover {
        span:first-child {
            width: ${({isBarOpen}) => isBarOpen ? "2rem" : "1.8rem"};
            margin-left: ${({isBarOpen}) => isBarOpen ? "0rem" : "-0.2rem"};
        }
        span:nth-child(2) {
            width: 2.2rem;
            margin-left: -0.6rem;
        }
        span:nth-child(3) {
            width: ${({isBarOpen}) => isBarOpen ? "2rem" : "2rem"};
            margin-left: ${({isBarOpen}) => isBarOpen ? "0rem" : "-0.4rem"};
        }
        h6 {
            transform: rotate(0deg);
        }
    }
    @media (max-width: 676px) {
        top: 2rem;
        left: 76vw;
        background-color: white;
        border-radius: 50%;
        height: 38px;
        width: 52px;
        padding: 20px 0 0 8px;
        animation: slideFromRight 3s forwards;
    }
`

const Top = styled.span`
width: ${({isBarOpen}) => isBarOpen ? "2rem" : "1.4rem"};
height: 2px;
border-radius: 10%;
background-color: black;
display: block;
margin-bottom: 4px;
transition: .5s;
margin-left: ${({isBarOpen}) => isBarOpen ? "0rem" : "0.2rem"};
transform: ${({isBarOpen}) => isBarOpen ? "rotate(-45deg) translateY(8px)" : "rotate(0deg)"};
`
const Center = styled.span`
width: 1.6rem;
height: 2px;
border-radius: 10%;
background-color: black;
display: block;
opacity: ${({isBarOpen}) => isBarOpen ? "0" : "1"};
margin-bottom: 4px;
transition: .5s;
`
const Bottom = styled.span`
width: ${({isBarOpen}) => isBarOpen ? "2rem" : "1.2rem"};
height: 2px;
border-radius: 10%;
background-color: black;
display: block;
transition: .5s;
margin-left: ${({isBarOpen}) => isBarOpen ? "0rem" : "0.4rem"};
transform: ${({isBarOpen}) => isBarOpen ? "rotate(45deg) translateY(-10px)" : "rotate(0deg)"};
@media (max-width: 676px) {
}
`
const Text = styled.h6`
color:black;
position: absolute;
top: -1.9rem;
left:2rem;
transform: rotate(-90deg);
font-size: .8rem;
font-weight: 400;
letter-spacing: 2px;
transition: 0.6s;
opacity: ${({isBarOpen}) => isBarOpen ? "0" : "1"};
@media (max-width: 676px) {
    display: none;
}
`

const NavButton = ({enter, hide, toggle}) => {

    const { isBarOpen } = useContext(NavbarContext);
    
    return (
        <Wrapper>
            <Button onMouseEnter={enter} onMouseLeave={hide} onClick={toggle} isBarOpen={isBarOpen}>
                <Top isBarOpen={isBarOpen}/>
                <Center isBarOpen={isBarOpen}/>
                <Bottom isBarOpen={isBarOpen}/>    
                
                <Text isBarOpen={isBarOpen}>
                    Menu
                </Text>
            </Button>
       
            
        </Wrapper>
    )
}

export default NavButton
