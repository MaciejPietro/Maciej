import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
font-weight: 500;
font-size: 1.2rem;
position: absolute;
transition: 1s;
top: ${({isMoved}) => isMoved ? "1.6rem" : "0.8rem" };
left: ${({isMoved}) => isMoved ? "6.2rem" : "3.1rem" };
color: black;
z-index:3;
animation: slideFromTop 3s forwards;
@media (max-width: 676px) {
    display:none;
}
`

function Logo({isBarOpen}) {
    return (
        <Wrapper isMoved={isBarOpen}>
            by Maciej Pietrolaj
        </Wrapper>
    )
}

export default Logo
