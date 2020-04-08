import React from 'react'
import styled from 'styled-components'
import { Html, Git, JavaScript, ReactIcon, Xd, Hooks, Node, StyledComponents} from '../../contexts/LanguageIcons'

const Wrapper = styled.div`
background-color:#1C1B20;
width: 90vw;
position: absolute;
display: flex;
flex-direction: row;
left: 5vw;
top: 100vh;
z-index: 0;
transition: 1.4s;
opacity: ${({isBarOpen}) => isBarOpen ? "0" : "1"};
@media (max-width: 676px) {
    width: 100vw;
    left: 0;
}
`

const Box = styled.div`
width: 70vw;
background-color: transparent;
left: 0;
margin:10vh 10vw 0;
div:last-child {
    margin-bottom: 8rem;
}
@media (max-width: 375px) {
padding-top: 20vh;
}

`
const Row = styled.div`
height: 6rem;
width: 36vw;
margin-left: ${({right}) => right ? "35vw" : "0"};
display: flex;
flex-direction: column;
font-family: 'Barlow Condensed', sans-serif;
font-weight: 100;
font-size: 1.5rem;
color: white;
line-height: 2rem;

strong{
    font-family: 'Rockout', sans-serif;
    font-size: 2.1rem;
}
h5 {
    transition: .3s;
    transition-timing-function: cubic-bezier(.12,.33,.62,.65);
    font-weight: 300;
}
&:hover {
    color: #1C1B20;
    span {
        &:after{
            height: 100px;
            margin-top: -6rem;
        }
    }
    div {
        opacity: 1;
    }
    h5{  
        margin: ${({right}) => right ? "0.5rem 20% 0 0" : "0.5rem 0 0 16%"};
    }
}
h5{
    margin: 0.5rem 0 0 2vw;
}
@media (max-width: 1067px) {
    strong {
        font-size: 1.6rem;
    }
}
@media (max-width: 991px) {
    width: 54vw;
    margin-left: ${({right}) => right ? "17vw" : "0"};
}
@media (max-width: 676px) {
    width: 72vw;
    margin-left: ${({right}) => right ? "0" : "0"};
    &:hover {
        color: white;
        span {
            &:after{
                height: 0;
            }
        }
        div {
            opacity: 0;
        }
        h5{  
            margin: 0;
        }
    }
}
`
const IconWrapper = styled.div`
width: 4.4rem;
height: 4.4rem;
position: absolute;
${({right}) => right ? "right: 12%" : "left: 10%"};
margin: 0.5rem 0 0 1.4vw;
opacity: 0;
transition: .3s;
transition-timing-function: cubic-bezier(.12,.33,.62,.65);
`
const Line = styled.span`
height: 4px;
background: ${({right}) => !right ? "linear-gradient(90deg, rgba(28,27,32,1) 0%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(28,27,32,1) 100%)"};
width: 35vw;
 &:after {
     transition: .7s;
     content: '';
     position: absolute;
     background-color: white;
     width: 35.5vw;
     height: 0px;
     margin-top: 0rem;
     margin-left: ${({right}) => right ? "-34.5vw" : "0"};
     z-index: -1;
 }
 &:before {
    content: '';
    position: absolute;
    background-color: white;
    margin-left: ${({right}) => right ? "-35.3vw" : "34.6vw"};
    width: 1.8rem;
    height: 1.8rem;
    border-radius:50%;
    margin-top: -.8rem;
    z-index: -1;
 }
 h5 {
     padding-left: 3rem;
 }

@media (max-width: 991px) {
        width: 54vw;
        &:after  {
            width: 55vw;
            margin-left: ${({right}) => right ? "-53vw" : "0"};
        }
        &:before {
            margin-top: -.5rem;
            margin-left: ${({right}) => right ? "-54.4vw" : "53.7vw"};
            width: 1.2rem;
            height: 1.2rem;
        }
}
@media (max-width: 676px) {
    width: 70vw;
    opacity: .3;
    &:after  {
        width: 70vw;
        margin-left: ${({right}) => right ? "-70vw" : "0"};
    }
    &:before {
        display: none;
    }
}
`

const Footer = styled.div`
width: 90vw;
color: white;
text-align: center;
margin-top: 3rem;
font-family: 'Barlow Condensed', sans-serif;
font-size: 1rem;
letter-spacing: 1.4px;
`


const ProgrammingLanguages = ({isBarOpen}) => {
    return (
        <Wrapper isBarOpen={isBarOpen}>
            <Box className="row">
                <Row>
                    <IconWrapper>
                        <JavaScript /> 
                    </IconWrapper>
                    <h5>main language<br /> <strong>JavaScript</strong></h5>
                    <Line className="mt-2 bg-dark"/>
                </Row>

                            <Row right="true" className="text-right">
                                <h5 right="true">main framework<br /> <strong>React</strong></h5>
                                <IconWrapper right="true">
                                    <ReactIcon /> 
                                </IconWrapper>
                                <Line right="true" className="mt-2 ml-auto bg-dark"/>
                            </Row>

                <Row>
                    <IconWrapper>
                        <Hooks /> 
                    </IconWrapper>
                    <h5>keeping state with<br /> <strong>hooks</strong></h5>
                    <Line className="mt-2 bg-dark"/>
                </Row>

                            <Row right="true" className="text-right">
                                <h5 right="true">styles in
                                    {window.innerWidth < 676 ? "" : <br />} 
                                    <strong>Styled Components</strong>
                                </h5>
                                <IconWrapper right="true">
                                    <StyledComponents /> 
                                </IconWrapper>
                                <Line right="true" className="mt-2 ml-auto bg-dark"/>
                            </Row>

                <Row>
                    <IconWrapper>
                        <Node /> 
                    </IconWrapper>
                    <h5>basic of<br /> <strong>Node.js &amp; Redux</strong></h5>
                    <Line className="mt-2 bg-dark"/>
                </Row>
                

                            <Row right="true" className="text-right">
                                <h5 right="true">semantic<br /> <strong>HTML &amp; JSX</strong></h5>
                                <IconWrapper right="true">
                                    <Html /> 
                                </IconWrapper>
                                <Line right="true" className="mt-2 ml-auto bg-dark"/>
                            </Row>

                <Row>
                    <IconWrapper>
                        <Git /> 
                    </IconWrapper>
                    <h5>Version Control System<br /> <strong>GIT</strong></h5>
                    <Line className="mt-2 bg-dark"/>
                </Row>

                            <Row right="true" className="text-right">
                                <h5 right="true">layouts &amp; images<br /> <strong>XD &amp; Illustrator</strong></h5>
                                <IconWrapper right="true">
                                    <Xd /> 
                                </IconWrapper>
                                <Line right="true" className="mt-2 ml-auto bg-dark"/>
                            </Row>

                <Row>
                    <IconWrapper>
                        <ReactIcon /> 
                    </IconWrapper>
                    <h5>plans for<br /> <strong>React Native</strong></h5>
                    <Line className="mt-2 bg-dark"/>
                </Row>
                <Footer>GSAP, npm, yarn, Webpack, RWD, REST API, Fetch Api, basic of: Express.js, MongoDB</Footer>
            </Box>
        </Wrapper>
    )
}

export default ProgrammingLanguages
