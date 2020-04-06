import React, { useContext, useRef } from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import { CurrentSectionContext } from '../../contexts/CurrentSectionContex'
import { CursorContext } from '../../contexts/CursorContext'



const Wrapper = styled.div`
    position: absolute;
    top: 42vh;
    right: 30px;
    overflow:auto;
div {
    background-color: transparent;
    width: 20px;
    height: 25px;
    transition: all 0.6s;
    display: flex;
    flex-direction: column;
    cursor: none;
    transform: translate(100px);   
    animation: slideFromRight 3s forwards;
    &:before {
        content: '';
        position: absolute;
        margin-top: 12px;
        width: 16px;
        height: 2px;
        background-color: black;
    }
    &:after {
        content: '';
        position: absolute;
        width: 16px;
        height: 2px;
        margin: 12px 6px 0 0;
        background-color: black;
        transform: rotate(90deg);
        transition: 0.6s;
        opacity: 0;
    }
}


@media (max-width: 676px) {
    display: none;
}
`
const HomeCircle = styled.div`
&:hover {
    span {
        &:before, &:after {
            opacity: 1;
        }
    }
}
span {
    &:before, &:after {
      display: ${({section}) => section === "home" ? "none" : "block"};
    }
}
&:after {
    opacity: ${({section}) => section === "home" ? "1!important" : "0"};
}

`

const About = styled.div`
&:hover {
    span {
        &:before, &:after {
            opacity: 1;
        }
    }
}
span {
    &:before, &:after {
      display: ${({section}) => section === "about" ? "none" : "block"};
    }
}
&:after {
    opacity: ${({section}) => section === "about" ? "1!important" : "0"};
}
`

const Skills = styled.div`
&:hover {
    span {
        &:before, &:after {
            opacity: 1;
        }
    }
}
span {
    &:before, &:after {
      display: ${({section}) => section === "skills" ? "none" : "block"};
    }
}
&:after {
    opacity: ${({section}) => section === "skills" ? "1!important" : "0"};
}
`
const Projects = styled.div`
&:hover {
    span {
        &:before, &:after {
            opacity: 1;
        }
    }
}
span {
    &:before, &:after {
      display: ${({section}) => section === "projects" ? "none" : "block"};
    }
}
&:after {
    opacity: ${({section}) => section === "projects" ? "1!important" : "0"};
}
`
const Contact = styled.div`
&:hover {
    span {
        &:before, &:after {
            opacity: 1;
        }
    }
}
span {
    &:before, &:after {
      display: ${({section}) => section === "contact" ? "none" : "block"};
    }
}
&:after {
    opacity: ${({section}) => section === "contact" ? "1!important" : "0"};
}
`

const StyledLink = styled(NavLink)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }   
`;

const Span = styled.span`
&:before {
    content: '';
    position: absolute;
    margin-left: 10px;
    margin-top: 9px;
    width: 6px;
    height: 2px;
    background-color: black;
    transform: rotate(45deg);
    transition: 0.6s;
    opacity: 0;
}
&:after {
    content: '';
    position: absolute;
    margin-left: 10px;
    margin-top: 15px;
    width: 6px;
    height: 2px;
    background-color: black;
    transform: rotate(-45deg);
    transition: 0.6s;
    opacity: 0;
}
&:hover {
        &:before {
            opacity: 1;
        }
}
`


const LineNav = ({changeSection}) => {
    const { section } = useContext(CurrentSectionContext); 
    const {  setCursor } = useContext(CursorContext); 
    

    return (
        <Wrapper> 

            <StyledLink exact to='/Maciej' >
                <HomeCircle data-key="home" onClick={changeSection} section={section} onMouseOver={() => setCursor("hoverAble")} onMouseLeave={() => setCursor("default")} >
                    <Span data-key="home"/>
                </HomeCircle>
            </StyledLink>

            <StyledLink to='/Maciej/about'>
                <About data-key="about" className="hoverAble" onClick={changeSection} section={section} onMouseOver={() => setCursor("hoverAble")} onMouseLeave={() => setCursor("default")}>
                    <Span data-key="about"/>
                </About>
            </StyledLink>

            <StyledLink to='/Maciej/skills'>
                <Skills data-key="skills" className="hoverAble" onClick={changeSection} section={section} onMouseOver={() => setCursor("hoverAble")} onMouseLeave={() => setCursor("default")} >
                <Span data-key="skills"/></Skills>
            </StyledLink>

            <StyledLink to='/Maciej/projects'>
                <Projects data-key="projects" className="hoverAble" onClick={changeSection} section={section} onMouseOver={() => setCursor("hoverAble")} onMouseLeave={() => setCursor("default")} >
                    <Span data-key="projects"/>
                </Projects>
            </StyledLink>

            <StyledLink to='/Maciej/contact'>
                <Contact data-key="contact" className="hoverAble" onClick={changeSection} onMouseOver={() => setCursor("hoverAble")} onMouseLeave={() => setCursor("default")} >
                    <Span data-key="contact"/>
                </Contact>
            </StyledLink>

        </Wrapper>
    )
}

export default LineNav
