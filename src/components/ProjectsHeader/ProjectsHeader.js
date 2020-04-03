import React from 'react'
import styled from 'styled-components'
import {Diamond} from '../../contexts/LanguageIcons'

const Wrapper = styled.div`
width: 70vw;
height: 50vh;

position : absolute;
z-index: 5;
margin: 4vh 0 0 0;
display: flex;
flex-direction: row;
`
const Heading = styled.div`
color: white;
width: 50%;
font-size : 8rem;
line-height: 7rem;
margin-top: 8vh;

`

const Text = styled.div`
color: white;
width: 50%;
font-family: 'Barlow Condensed', sans-serif;
font-weight: 100;
font-size: 1rem;
color: whitesmoke;
line-height: 2.2rem;
margin-top: 20vh;
letter-spacing: 1.6px;
padding: 3vw 10vw 5vw 5vw;
h4 {
    b {
        font-weight: 600;
    }
    font-weight: 100;
    font-size: 1.5rem;
}
p {
    letter-spacing: 2px;
}
`

const DiamondWrapper = styled.span`
display: block;
position: absolute;
left: 30%;
top: 14vh;
width: 30rem;
height: 12rem;
transform: rotate(40deg);
`

function ProjectsHeader() {
    return (
        <Wrapper>
            <Heading>
                My <DiamondWrapper><Diamond /></DiamondWrapper><br />
                Projects.
            </Heading>
            <Text>
                <h4>
                    <b>Lista ostatnich</b><br />
                    3 projektow.
                </h4>
                <p>
                    Sa to moje najswiezsze projekty, ktore pokazuja moje umiejetnosci front-endowe.
                </p>
            </Text>
            
        </Wrapper>
    )
}

export default ProjectsHeader
