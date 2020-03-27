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
animation: button 3s forwards;
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
        top: ${({isOpen}) => isOpen ? "18vh" : "46vh"};
        left: ${({isOpen}) => isOpen ? "10vw" : "2vw"};
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
`

const NavButton = ({enter, leave, open, isOpen}) => {
    return (
        <Wrapper>
            <Button onMouseEnter={enter} onMouseLeave={leave} onClick={open} isOpen={isOpen}>
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
