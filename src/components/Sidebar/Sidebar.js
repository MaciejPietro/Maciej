import React, {useContext} from 'react'
import styled from 'styled-components'
import Menu from '../Menu/Menu'
import Language from '../Language/Language'
import { LanguageContext } from '../../contexts/LanguageContext'

const Wrapper = styled.div`
height: 100vh;
width:  70vw;
transition: 1s;
transform: ${({isVisible, isBarOpen}) => {
    if(isBarOpen === true) {
        return "translate(-12vw)"    
    } else if(isBarOpen === false) {
        return isVisible ? `translate(${window.innerWidth < 676 ? "-70vw" : "-55vw"})` : "translate(-66vw)"
    } 
}};
position: absolute;
z-index: 2;
background-color: white;
display: flex;
animation: sidebar 2s;
`
const MenuContainter = styled.div`
div:first-child {
   display: none;
}
@media (max-width: 676px) {
    div:first-child {
        display: flex;
        top: 1rem;
    }
 }
`

const Sidebar = ({isVisible, isBarOpen, setPL, setENG, toggle}) => {
    const { language } = useContext(LanguageContext);
    return (
        <Wrapper isVisible={isVisible} isBarOpen={isBarOpen}>
            <MenuContainter>
                <Language setPL={setPL}  setENG={setENG} currentLanguage={language}/>
                <Menu isBarOpen={isBarOpen} toggle={toggle}/>
            </MenuContainter>
        </Wrapper>
    )
}

export default Sidebar
