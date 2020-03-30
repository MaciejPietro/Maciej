import React, {useContext} from 'react'
import styled from 'styled-components'
import Menu from '../Menu/Menu'
import Language from '../Language/Language'
import { LanguageContext } from '../../contexts/LanguageContext'
import { NavbarContext } from '../../contexts/NavbarContext'

const Wrapper = styled.div`
height: 100vh;
width:  80vw;
transition: .8s;
transform: ${({isBarVisible, isBarOpen}) => {
    if(isBarOpen === true) {
        return "translate(-16vw)"    
    } else if(isBarOpen === false) {
        return isBarVisible ? `translate(${window.innerWidth < 676 ? "-100vw" : "-84vw"})` : "translate(-100vw)"
    } 
}};
position: absolute;
z-index: 5;
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

const Sidebar = ({ setPL, setENG, changeSection}) => {
    const { language } = useContext(LanguageContext);
    const { isBarOpen } = useContext(NavbarContext);
    const { isBarVisible } = useContext(NavbarContext);

    return (
        <Wrapper isBarVisible={isBarVisible} isBarOpen={isBarOpen}>
            <MenuContainter>
                <Language setPL={setPL}  setENG={setENG} currentLanguage={language}/>
                <Menu changeSection={changeSection}/>
            </MenuContainter>
        </Wrapper>
    )
}

export default Sidebar
