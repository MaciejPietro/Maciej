import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
`
const Button = styled.div`
width: 60px;
height: 60px;
position: absolute;
top: 46vh;
transition: 1s;
left: ${({isOpen}) => isOpen ? "13vw" : "2vw"};
z-index: 3;
animation: slideFromLeft 3s forwards;
    &:hover {
        span:first-child {
            width: ${({isOpen}) => isOpen ? "2rem" : "1.8rem"};
            margin-left: ${({isOpen}) => isOpen ? "0rem" : "-0.2rem"};
        }
        span:nth-child(2) {
            width: 2.2rem;
            margin-left: -0.6rem;
        }
        span:nth-child(3) {
            width: ${({isOpen}) => isOpen ? "2rem" : "2rem"};
            margin-left: ${({isOpen}) => isOpen ? "0rem" : "-0.4rem"};
        }
        h6 {
            transform: rotate(0deg);
        }
    }
    @media (max-width: 676px) {
        top: 2rem;
        left: 74vw;
        background-color: white;
        border-radius: 50%;
        height: 40px;
        width: 52px;
        padding: 20px 0 0 8px;
        animation: slideFromRight 3s forwards;
    }
`

const Top = styled.span`
width: ${({isOpen}) => isOpen ? "2rem" : "1.4rem"};
height: 2px;
border-radius: 10%;
background-color: black;
display: block;
margin-bottom: 4px;
transition: .5s;
margin-left: ${({isOpen}) => isOpen ? "0rem" : "0.2rem"};
transform: ${({isOpen}) => isOpen ? "rotate(-45deg) translateY(8px)" : "rotate(0deg)"};
`
const Center = styled.span`
width: 1.6rem;
height: 2px;
border-radius: 10%;
background-color: black;
display: block;
opacity: ${({isOpen}) => isOpen ? "0" : "1"};
margin-bottom: 4px;
transition: .5s;
`
const Bottom = styled.span`
width: ${({isOpen}) => isOpen ? "2rem" : "1.2rem"};
height: 2px;
border-radius: 10%;
background-color: black;
display: block;
transition: .5s;
margin-left: ${({isOpen}) => isOpen ? "0rem" : "0.4rem"};
transform: ${({isOpen}) => isOpen ? "rotate(45deg) translateY(-10px)" : "rotate(0deg)"};
@media (max-width: 676px) {
}
`
const Text = styled.h6`
color:black;
position: absolute;
top: -2.4rem;
left:2rem;
transform: ${({isOpen}) => isOpen ? "rotate(20deg)" : "rotate(90deg)"};
font-size: 1rem;
font-weight: 400;
letter-spacing: 2px;
transition: 0.6s;
opacity: ${({isOpen}) => isOpen ? "0" : "1"};
@media (max-width: 676px) {
    display: none;
}
`

const NavButton = ({enter, hide, toggle, isOpen}) => {
    return (
        <Wrapper>
            <Button onMouseEnter={enter} onMouseLeave={hide} onClick={toggle} isOpen={isOpen}>
                <Top isOpen={isOpen}/>
                <Center isOpen={isOpen}/>
                <Bottom isOpen={isOpen}/>    
                
                <Text isOpen={isOpen}>
                    Menu
                </Text>
            </Button>
       
            
        </Wrapper>
    )
}

export default NavButton
