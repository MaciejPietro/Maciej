import React, { useContext } from 'react'
import styled from 'styled-components'
import Project1 from '../../img/Project1.jpg'
import Project3 from '../../img/Project3.jpg'
import { Rocket } from '../../contexts/LanguageIcons'
import { LanguageContext } from '../../contexts/LanguageContext'


const Wrapper = styled.div`
width: ${window.innerWidth > 676 ? "90vw" : "100vw"};
height: 0%;
position: absolute;
background-color: #cca32b;
top: 50vh;
left: ${window.innerWidth < 676 ? "0" : "5vw"};
display: flex;
flex-wrap: wrap;
flex-basis: 1;
transition: 1s;
@media (max-width: 676px) {
    height: 200%;
}
@media (max-width: 547px) {
    padding-top: 12rem;
}
@media (max-width: 400px) {
    padding-top: 16rem;
}
`

const Row = styled.div`
width: 90vw;
display: flex;
flex-direction: row;
transition: .8s;
padding: 0 1vw;
opacity: ${({isBarOpen}) => isBarOpen ? "0" : "1"};
@media (max-width: 676px) {
    width: 100vw;
    flex-direction: column;
    height: 80vh;
    padding: 0 5vw;
}
`

const Text = styled.div`
width: 45vw;
height: 40vh;
font-family: 'Barlow Condensed', sans-serif;
font-weight: 100;
font-size: 1rem;
color: whitesmoke;
line-height: 2.2rem;
letter-spacing: 1.6px;
padding: 3rem 8vw;
opacity: 0;
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
@media (max-width: 676px) {
    width: 100vw;
    text-align: center;
    padding: 0 10vw 0 0;
    height: 30vh;
}
@media (max-width: 547px) {
    opacity: 1;
    height: 40vh;
    margin-top: ${({toRight}) => toRight ? "2rem" : "0"};
}
`

const Project = styled.div`
width: 45vw;
height:40vh;
transition: .3s;
display: flex;
justify-content:center;
align-items: center;
overflow: hidden;
opacity: 0;
z-index: 5;
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
    @media (max-width: 676px) {
        opacity: 1;
        width: 90vw;
        &:before {
            width: 90vw;
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




const IconWrapper = styled.span`
display: block;
position: absolute;
width: 30rem;
height: 10rem;
margin-top: -9rem;
margin-left: 16vw;
@media (max-width: 676px) {
    display: none;
 }
`




function Projects({ isBarOpen, wrapper, des1, des2, pro1, pro2}) {
const { language } = useContext(LanguageContext);

    return (       
        <Wrapper ref={wrapper}>
                <Row isBarOpen={isBarOpen}>
                    <Text ref={des1}>
                            {language === "PL" ? 
                            <>
                                <h4>
                                    <b>Moje portfolio</b><br />
                                    JSX, CSS(only for keyframes), React, JavaScript, GSAP, styled components
                                </h4>
                                <p>
                                    Moje osobiste portfolio, którego celem jest zaprezentowanie moich dotychczasowo zdobytych umiejętności i pomoc w 
                                    znalezieniu przyszłej pracy lub stażu. Portfolio jest dostępne w języku polskim i angielskim.
                                </p>
                            </>
                                :
                            <>
                                <h4>
                                    <b>My Portfolio</b><br />
                                    JSX, CSS(only for keyframes), React, JavaScript, GSAP, styled components
                                </h4>
                                <p>
                                    My personal portfolio, which aims to present my previously acquired skills and help in finding a future job or internship. The portfolio is available in Polish and English.
                                </p>
                            </>
                            }
                    </Text>
                    <Project className="ml-auto " img={Project3} ref={pro1} isBarOpen={isBarOpen}>
                        <Icon></Icon>
                        <Lines></Lines>
                    </Project> 
                </Row>




                <Row isBarOpen={isBarOpen} toRight>
                    <Project className="mr-auto" img={Project1} ref={pro2} toRight >  
                        <Icon></Icon>
                        <Lines></Lines>     
                    </Project>
                    <Text  toRight ref={des2}>
                    <IconWrapper><Rocket/></IconWrapper>
                            {language === "PL" ? 
                            <>
                                <h4>
                                    <b>
                                    Nauczyciel gry na gitarze
                                    </b><br />
                                    JSX, CSS(only for keyframes), React, JavaScript, GSAP, styled components
                                </h4>
                                <p>
                                    Strona nauczyciela gry na gitarze, która początkowo miałabyć stroną oferującą korepetycje dla początkujących.
                                    Strona nie jest jeszcze skończona.
                                </p>
                            </>
                                :
                            <>
                                <h4>
                                    <b>Guitar Teacher</b><br />
                                    JSX, CSS(only for keyframes), React, JavaScript, GSAP, styled components
                                </h4>
                                <p>
                                    Strona nauczyciela gry na gitarze, która początkowo miałabyć stroną oferującą korepetycje dla początkujących. 
                                    Strona nie jest jeszcze skończona.
                                </p>
                            </>
                            }
                    </Text>
                </Row>
        </Wrapper>

    )
}

export default Projects
