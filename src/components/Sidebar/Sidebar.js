import React from 'react'
import styled from 'styled-components'
import Menu from '../Menu/Menu'

const Wrapper = styled.div`
height: 100vh;
width:  80vw;
transition: 1s;
transform: ${({isVisible, isBarOpen}) => {
    if(isBarOpen === true) {
        return "translate(-12vw)"    
    } else if(isBarOpen === false) {
        return isVisible ? "translate(-60vw)" : "translate(-66vw)"
    } 
}};
position: absolute;
z-index: 2;
background-color: white;
display: flex;
animation: sidebar 2s;
`
const MenuContainter = styled.div`

`

const Sidebar = ({isVisible, isBarOpen}) => {
    return (
        <Wrapper isVisible={isVisible} isBarOpen={isBarOpen}>
            <MenuContainter>
                <Menu isBarOpen={isBarOpen}/>
            </MenuContainter>
        </Wrapper>
    )
}

export default Sidebar
