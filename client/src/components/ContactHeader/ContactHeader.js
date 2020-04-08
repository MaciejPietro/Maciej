import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
height: 89vh;
width: 60vw;
margin: 5.5vh 5vw;
position: absolute;
top: 0;
right: 0;
background-color: #8ee4af;
display: flex;
align-items: center;
flex-direction: row;
transition: 1.6s;
box-sizing: content-box;
padding-left: 10vw;

`
const Header = styled.div`
font-size: 10vw;
color: #1C1B20;
line-height: 8vw;
transform: translateX(-20vw);
letter-spacing: -5px;
position: absolute;

`

const Text = styled.div`
width: 30rem;
font-family: 'Barlow Condensed', sans-serif;
font-weight: 600;
font-size: 4vw;
color: black;
line-height: 3rem;
letter-spacing: 1.2px;
transition: 1s;
padding-left: 20vw;
height: 9rem;
word-break: break-all;
overflow: hidden;
&:first-line {
    color: whitesmoke;
}
`

function ContactHeader({wrapper}) {
    return (
        <Wrapper ref={wrapper}>
            <Header>CONT<br/>ACT.</Header>
            <Text>
                Fill the form and click send
                if you have any questions or proposals.
            </Text>
        </Wrapper>
    )
}

export default ContactHeader
