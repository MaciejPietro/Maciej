import React, { useContext } from 'react'
import styled from 'styled-components'
import { NavbarContext } from '../../contexts/NavbarContext'

const Wrapper = styled.div`
font-weight: 500;
font-size: 1.2rem;
position: absolute;
transition: .6s;
top: ${({isBarOpen}) => isBarOpen ? "7.6rem" : "0.8rem" };
left: ${({isBarOpen}) => isBarOpen ? "25vw" : "3.1rem" };
color: black;
z-index:6;
animation: slideFromTop 3s forwards;
@media (max-width: 676px) {
    display:none;
}
`

function Logo() {

    const { isBarOpen } = useContext(NavbarContext);

    return (
        <Wrapper isBarOpen={isBarOpen}>
            by Maciej Pietrolaj
        </Wrapper>
    )
}

export default Logo
