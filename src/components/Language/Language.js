import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
position: absolute;
top: -1rem;
right: 5rem;
display: flex;
flex-direction: row;
color: black;
`
const Pl = styled.h6`
font-size: 1.2rem;
margin-right: 0.6rem;
font-family: 'Amatic SC', cursive;
font-weight: 700;
letter-spacing: 2px;
`

const Eng = styled.h6`
font-size: 1.2rem;
margin-left: 0.9rem;
letter-spacing: 1.6px;
color: grey;
`

const Language = () => {
    return (
        <Wrapper>
            <Pl>PL</Pl>
            <Eng>Eng</Eng>
        </Wrapper>
    )
}

export default Language
