import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
div {
    background-color: transparent;
    width: 12px;
    border:  1px solid black;
    transition: all 0.9s;
    position: absolute;
    right: 30px;
    cursor: pointer;
    border-radius: 50%;
    transform: translate(100px);   
    animation: slideFromRight 3s forwards; 
}
.active {
    &::before {
        content: '';
        width: 11px;
        border:  1px solid black;
        background-color: black;
        transform: rotate(90deg);
        position: absolute;
        margin-left: -1px;
        border-radius: 50%;
    }
}
@media (max-width: 676px) {
    display: none;
}
`
const HomeCircle = styled.div`
top: 44vh;
`

const About = styled.div`
top: 47vh;
`

const Skills = styled.div`
top: 50vh;
`
const Projects = styled.div`
top: 53vh;
`
const Contact = styled.div`
top: 56vh;
`


const LineNav = () => {
    return (
        <Wrapper>
            <HomeCircle className="active"/>
            <About />
            <Skills />
            <Projects />
            <Contact />
        </Wrapper>
    )
}

export default LineNav
