import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
position: absolute;
top: -1rem;
right: 5rem;
display: flex;
flex-direction: row;
color: black;
animation: slideFromTop 3s forwards;
 @media (max-width: 676px) {
    top: -1rem;
    right: 6%;
 }
`
const Pl = styled.h6`
font-size: .9rem;
margin-right: 0.6rem;
font-family: 'Monsterrat', sans-serif;
font-weight: ${({current}) => current === "PL" ? "600" : "400"};
color: ${({current}) => current === "PL" ? "black" : "grey"};
letter-spacing: 2px;
`

const Eng = styled.h6`
font-size: .9rem;
margin-left: 0.9rem;
letter-spacing: 1.6px;
font-family: 'Monsterrat', sans-serif;
font-weight: ${({current}) => current === "ENG" ? "600" : "400"};
color: ${({current}) => current === "ENG" ? "black" : "grey"};
`

const Language = ({setPL, setENG, currentLanguage}) => {
    return (
        <Wrapper>
            <Pl onClick={setPL} current={currentLanguage}>PL</Pl>
            <Eng onClick={setENG} current={currentLanguage}>Eng</Eng>
        </Wrapper>
    )
}

export default Language
