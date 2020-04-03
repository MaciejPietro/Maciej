import React from 'react'
import styled from 'styled-components'
import { Html, Css, Sass, Bootstrap, Git, JavaScript, ReactIcon, Npm, Xd, Illustrator, Hooks, Node, StyledComponents} from '../../contexts/LanguageIcons'

const Wrapper = styled.div`
background-color:white;
width: 90vw;
height: 20rem;
position: absolute;
display: flex;
flex-direction: row;
left: 5vw;
top: 100vh;
`

const Box = styled.div`
width: 70vw;
height: 50rem;
background-color: transparent;
left: 0;
margin:10vh 10vw 0;
z-index: 100;
`
const Row = styled.div`
height: 6rem;
width: 36vw;
margin-left: ${({toRight}) => toRight ? "35vw" : "0"};
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
        margin: ${({toRight}) => toRight ? "0.5rem 20% 0 0" : "0.5rem 0 0 16%"};

    }
}
h5{
    margin: 0.5rem 0 0 2vw;
}
@media (max-width: 991px) {
    width: 54vw;
    margin-left: ${({toRight}) => toRight ? "17vw" : "0"};
}
@media (max-width: 676px) {
    width: 72vw;
    margin-left: ${({toRight}) => toRight ? "0" : "0"};
}
`
const IconWrapper = styled.div`
width: 4.4rem;
height: 4.4rem;
position: absolute;
${({toRight}) => toRight ? "right: 12%" : "left: 10%"};
margin: 0.5rem 0 0 1.4vw;
opacity: 0;
transition: .3s;
transition-timing-function: cubic-bezier(.12,.33,.62,.65);
`
const Line = styled.span`
height: 4px;
background: ${({toRight}) => !toRight ? "linear-gradient(90deg, rgba(28,27,32,1) 0%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(28,27,32,1) 100%)"};
width: 35vw;
 &:after {
     transition: .7s;
     content: '';
     position: absolute;
     background-color: white;
     width: 35.5vw;
     height: 0px;
     margin-top: 0rem;
     margin-left: ${({toRight}) => toRight ? "-34.5vw" : "0"};
     z-index: -1;
 }
 &:before {
    content: '';
    position: absolute;
    background-color: white;
    margin-left: ${({toRight}) => toRight ? "-35.3vw" : "34.6vw"};
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
            width: 70vw;
            margin-left: ${({toRight}) => toRight ? "-53vw" : "0"};
        }
        &:before {
            margin-left: ${({toRight}) => toRight ? "-54.4vw" : "51.7vw"};
        }
}
@media (max-width: 676px) {
    width: 70vw;
    &:after  {
        width: 70vw;
        margin-left: ${({toRight}) => toRight ? "-70vw" : "0"};
    }
    &:before {
        margin-left: ${({toRight}) => toRight ? "-72vw" : "67.6vw"};
    }
}
`



function ProgrammingLanguages() {
    return (
        <Wrapper>
            <Box className="row">
                <Row>
                    <IconWrapper>
                        <JavaScript /> 
                    </IconWrapper>
                    <h5>main language<br /> <strong>JavaScript</strong></h5>
                    <Line className="mt-2 bg-dark"/>
                </Row>

                            <Row toRight className="text-right">
                                <h5 toRight>main framework<br /> <strong>React</strong></h5>
                                <IconWrapper toRight>
                                    <ReactIcon /> 
                                </IconWrapper>
                                <Line toRight className="mt-2 ml-auto bg-dark"/>
                            </Row>

                <Row>
                    <IconWrapper>
                        <Hooks /> 
                    </IconWrapper>
                    <h5>keeping state with<br /> <strong>hooks</strong></h5>
                    <Line className="mt-2 bg-dark"/>
                </Row>

                            <Row toRight className="text-right">
                                <h5 toRight>styles in
                                    {window.innerWidth < 676 ? "" : <br />} 
                                    <strong>Styled Components</strong>
                                </h5>
                                <IconWrapper toRight>
                                    <StyledComponents /> 
                                </IconWrapper>
                                <Line toRight className="mt-2 ml-auto bg-dark"/>
                            </Row>

                <Row>
                    <IconWrapper>
                        <Node /> 
                    </IconWrapper>
                    <h5>basic of<br /> <strong>Node.js &amp; Redux</strong></h5>
                    <Line className="mt-2 bg-dark"/>
                </Row>
                

                            <Row toRight className="text-right">
                                <h5 toRight>semantic<br /> <strong>HTML &amp; JSX</strong></h5>
                                <IconWrapper toRight>
                                    <Html /> 
                                </IconWrapper>
                                <Line toRight className="mt-2 ml-auto bg-dark"/>
                            </Row>

                <Row>
                    <IconWrapper>
                        <Git /> 
                    </IconWrapper>
                    <h5>Version Control System<br /> <strong>GIT</strong></h5>
                    <Line className="mt-2 bg-dark"/>
                </Row>

                            <Row toRight className="text-right">
                                <h5 toRight>layouts &amp; images<br /> <strong>XD &amp; Illustrator</strong></h5>
                                <IconWrapper toRight>
                                    <Xd /> 
                                </IconWrapper>
                                <Line toRight className="mt-2 ml-auto bg-dark"/>
                            </Row>

                <Row>
                    <IconWrapper>
                        <ReactIcon /> 
                    </IconWrapper>
                    <h5>plans for<br /> <strong>React Native</strong></h5>
                    <Line className="mt-2 bg-dark"/>
                </Row>



            </Box>
        </Wrapper>
    )
}

export default ProgrammingLanguages
