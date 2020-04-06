import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components'
import Project1 from '../../img/Project1.jpg'
import Project3 from '../../img/Project3.jpg'
import { Mug, Rocket } from '../../contexts/LanguageIcons'


const Wrapper = styled.div`
width: ${window.innerWidth > 676 ? "90vw" : "100vw"};
height: 0%;
position: absolute;
background-color: #cca32b;
top: 46vh;
margin-top: 3vw;
left: ${window.innerWidth < 676 ? "0" : "5vw"};
display: flex;
flex-wrap: wrap;
flex-basis: 1;
transition: 1s;
@media (max-width: 676px) {
    height: 200%;
}
`

const Row = styled.div`
margin-top: 6rem;
width: 90vw;
height: 40vh;
display: flex;
flex-direction: row;
transition: .8s;
opacity: ${({isBarOpen}) => isBarOpen ? "0" : "1"};
@media (max-width: 676px) {
    flex-direction: column;
}
`
// transform: ${({toRight}) => toRight ? "perspective(80rem) rotateY(30deg) translateY(10rem)" : "perspective(80rem) rotateY(-30deg) translateY(10rem)"};
const Project = styled.div`
width: ${window.innerWidth < 676 ? "100vw" : "45vw"};
height: 40vh;
transition: .3s;
display: flex;
justify-content:center;
align-items: center;
overflow: hidden;
transform: none;
opacity: 0;
    &:before {
        content: '';
        width: 45vw;
        height: 40vh;
        background-image: url(${({img}) => img});
        background-size: cover;
        background-position: center;
        position: absolute;
        transition: .5s;
    }
    &:hover {
        &:before {
            filter: brightness(30%);
        }
    }
    &:hover {
        span:first-child {
            opacity: 1;
        }
        span:last-child {
            &:after, &:before {
                opacity: 1;
                transform: translate(0);
            }
        }
    }
    
`
const Icon = styled.span`
display: block;
width:  5rem;
height: 5rem;
border-radius: 50%;
border: 3px solid white;
position: absolute;
opacity: 0;
transition: .6s;
    &:before {
        content: '';
        width: 40%;
        height: 3px;
        background-color: white;
        position: absolute;
        top: 50%;
        left: 30%;
    }
    &:after {
        content: '';
        width: 40%;
        height: 3px;
        background-color: white;
        position: absolute;
        top: 50%;
        left: 30%;
        transform: rotate(90deg);
        &:hover {
            background-color: black;
        }
    }
    &:hover {
        transform: rotate(90deg);
        border: 3px solid transparent;
        background-color: white;
        &:after, &:before {
            background-color: black;
        }
    }
`

const Lines = styled.span`
position: absolute;
display: block;

    &:before {
        content: '';
        width: 8vw;
        height: 3px;
        background-color: white;
        position: absolute;
        left: 5vw;
        transform: translate(20vw);
        transition: 1s;
        opacity: 0;
    }
    &:after {
        content: '';
        width: 8vw;
        height: 3px;
        background-color: white;
        position: absolute;
        left: -13vw;
        transform: translate(-20vw);
        transition: 1s;
        opacity: 0;
    }

`

const Description = styled.div`
width: ${window.innerWidth < 676 ? "100vw" : "45vw"};
height: 40vh;
opacity: 0;
transform: translateY(10rem);
`

const Text = styled.div`
color: white;
font-family: 'Barlow Condensed', sans-serif;
font-weight: 100;
font-size: 1rem;
color: whitesmoke;
line-height: 2.2rem;
letter-spacing: 1.6px;
padding: ${({toRight}) => toRight ? "3rem 15vw 0 0" : "3rem 0 0 15vw"};
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

const IconWrapper = styled.span`
display: block;
position: absolute;
width: 30rem;
height: 10rem;
margin-top: -9rem;
margin-left: 16vw;
`




function Projects({isBarOpen}) {
let wrapp = useRef(null)
let des1 = useRef(null)
let des2 = useRef(null)
let pro1 = useRef(null)
let pro2 = useRef(null)
const body = document.querySelector('body')
let ignore = useRef(false)

useEffect(() => {
 let i = 0;
body.style.overflowY = "hidden"


if(ignore.current) return;

const scroll = e => {
    i += e.deltaY / 100
    console.log(i)
    if(i > 3) {
        console.log("weszlo")
        wrapp.current.style.height = "120%";
    }
    if(i > 6) {
        body.style.overflowY = "scroll"
    }
    if(i > 8) {
        des1.current.style.animation = "fadeIn .8s forwards"
        pro1.current.style.animation = "fadeInLeft .8s forwards .6s"
    }
    if(i > 11)  {
        des2.current.style.animation = "fadeIn .8s forwards"
        pro2.current.style.animation = "fadeInRight .8s forwards .6s"
    }
}
window.addEventListener('mousewheel', (e) => {
  scroll(e)
})

return  () => ignore.current = true
}, [body.style.overflowY])

     


    return (       
        <Wrapper ref={wrapp}>
                <Row isBarOpen={isBarOpen}>
                    <Description ref={des1}>
                        <IconWrapper><Mug /></IconWrapper>
                        <Text>
                            <h4>
                                <b>My Portfolio</b><br />
                                JSX, CSS(only for keyframes), React, JavaScript, GSAP, styled components
                            </h4>
                            <p>
                                My personal porfolio which has goal to presents my current programming and web developing skills
                                and helps fing first job as a Junior Front End Developer.
                            </p>
                        </Text>
                    </Description>
                    <Project className="ml-auto " img={Project3} ref={pro1} isBarOpen={isBarOpen}>
                        <Icon></Icon>
                        <Lines></Lines>
                    </Project> 
                </Row>




                <Row isBarOpen={isBarOpen}>
                <Project className="mr-auto" img={Project1} ref={pro2} toRight >  
                    <Icon></Icon>
                    <Lines></Lines>     
                </Project>
                <Description ref={des2}>
                    <IconWrapper><Rocket/></IconWrapper>
                    <Text  toRight>
                        <h4>
                            <b>Guitar teacher</b><br />
                            JSX, CSS(only for keyframes), React, JavaScript, GSAP, styled components
                        </h4>
                        <p>
                            Site of the guitar teacher. Initially It was my site to promte my guitar lessons but the aim had changed during developing.
                        </p>
                    </Text>
                </Description>
                </Row>
        </Wrapper>

    )
}

export default Projects
