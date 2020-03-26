import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
div {
    background-color: transparent;
    width: 12px;
    border:  1px solid black;
    transition: all 0.9s;
    cursor: pointer;
    position: absolute;
    right: 30px;
    border-radius: 50%;
    transform: translate(100px);    
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
`
const HomeCircle = styled.div`
top: 44vh;
animation: navLineEntrance .4s forwards;
animation-delay: 1.6s;

`

const About = styled.div`
top: 47vh;
animation: navLineEntrance .4s forwards;
animation-delay: 1.75s;
`

const Skills = styled.div`
top: 50vh;
animation: navLineEntrance .4s forwards;
animation-delay: 1.9s;

`
const Projects = styled.div`
top: 53vh;
animation: navLineEntrance .4s forwards;
animation-delay: 2.05s;
`
const Contact = styled.div`
top: 56vh;
animation: navLineEntrance .4s forwards;
animation-delay: 2.2s;
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
