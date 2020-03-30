import React, { useContext } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'
import { LanguageContext } from '../../contexts/LanguageContext'

const Wrapper = styled.span`
width: 3rem;
height: 5rem;
display: flex;
flex-direction: column;
padding: 2rem 1rem;
position: absolute;
left: 52vw;
bottom: 0;
animation: slideFromBottom 3s forwards;
`
const Text = styled.p`
color:black;
font-size: .8rem;
letter-spacing: 1px;
transform: rotate(-90deg);
transform-origin: left;
margin: 0.4rem 0 0 0.24rem;
@media (max-width: 676px) {
    
}
`

function ScrollIcon() {
    const { language } = useContext(LanguageContext);
    return (
        <Wrapper>
            <Text>{language === "PL" ? "Przewin" : "Scroll"}</Text>
            <FontAwesomeIcon className="scroll-icon" icon={faLongArrowAltDown} size="sm" color="black"/>
        </Wrapper>
    )
}

export default ScrollIcon
