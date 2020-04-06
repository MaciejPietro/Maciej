import React, { useContext, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'
import { LanguageContext } from '../../contexts/LanguageContext'

const Wrapper = styled.span`
width: 3rem;
height: 5rem;
display: flex;
top: ${({top}) => top};
left: ${({left}) => left};
flex-direction: column;
padding: 2rem 1rem;
position: absolute;
animation: slideFromBottom 3s forwards;
z-index: 4;
transition: 1s;
color: white;
`
const Text = styled.p`
color: ${({color}) => color};
font-size: .8rem;
letter-spacing: 1.3px;
transform: rotate(-90deg);
transform-origin: left;
margin: 0.4rem 0 0 0.24rem;
@media (max-width: 676px) {
    
}
`

function ScrollIcon({top, left, color, opacity}) {
    const { language } = useContext(LanguageContext);
    let icon = useRef();
    

    return (
        <Wrapper top={top} left={left} opacity={opacity} color={color} ref={icon}>
            <Text color={color}>{language === "PL" ? "Przewin" : "Scroll"}</Text>
            <FontAwesomeIcon className="scroll-icon" icon={faLongArrowAltDown} size="sm" color={"white"}/>
        </Wrapper>
    )
}

export default ScrollIcon
