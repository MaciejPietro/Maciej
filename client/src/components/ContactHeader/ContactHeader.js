import React from 'react'
import styled from 'styled-components'
import ScrollIcon from '../ScrollIcon/ScrollIcon'


const Wrapper = styled.div`
height: 90vh;
width: 60vw;
margin: 5vh 5vw;
position: absolute;
top: 0;
right: 0;
background-color: #8ee4af;
display: flex;
align-items: center;
flex-direction: row;
transition: 1s;
box-sizing: content-box;
padding-left: 10vw;
z-index: 1;

`
const Header = styled.div`
font-size: 10vw;
color: #1C1B20;
line-height: 8vw;
transform: translateX(-20vw);
letter-spacing: -5px;
position: absolute;
@media (max-width: 676px) {
    font-size: 5rem;
    line-height: 3.6rem;
}
`

const Text = styled.div`
font-family: 'Barlow Condensed', sans-serif;
font-weight: 600;
font-size: 2vw;
color: black;
line-height: 3rem;
letter-spacing: 1.2px;
transition: .6s;
padding: 5vw 0 0 14vw;
white-space: nowrap; 
overflow: hidden;
&:first-line {
    color: whitesmoke;
}
@media (max-width: 991px) {
    font-size: 2rem;
}
@media (max-width: 676px) {
    display: none;
}
`

const Button = styled.button`           
position: absolute;
bottom: 3rem;
margin-left: -2rem;
border: 1px solid gray;
background-color: transparent;
width: 4rem;
height: 4rem;
overflow: hidden;
transition: 0.6s;
z-index: 3;
&:focus {
    outline:none; 
}
&::before {
    content: '';
    width: 1.6rem;
    height: 2px;
    position: absolute;
    background: grey;
    transform: rotate(36deg);
    margin-left: -.8rem;
    margin-top: -.5rem;
    transition: 0.8s;
    z-index: 2;
}
&::after {
    content: '';
    width: 1.6rem;
    height: 2px;
    position: absolute;
    background: grey;
    transform: rotate(-36deg);
    margin-left: -.8rem;
    margin-top: .5rem;
    transition: 0.6s;
    z-index: 2;
}
&:hover {
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .2);
    transform: translateY(-10px);
}
`

const Icon = styled.div`
width: 5.4rem;
height: 8rem;
position: absolute;
bottom: -2vh;
left: 1vw;
z-index: 1;
`


function ContactHeader({wrapper, text, sent, click}) {
    return (
        <Wrapper ref={wrapper}>
            <Header>CONT<br/>ACT.</Header>
            
            <Text ref={text}>
                {sent ? `Your mail was sent succesfully` : 
                `Fill the form and click send`}
                
            </Text>
            {window.innerWidth < 676 ? <Button onClick={click}/> : <Icon onClick={click}>
                <ScrollIcon top={"0vh"} left={"0vw"}/>
            </Icon>} 


        </Wrapper>
    )
}

export default ContactHeader
