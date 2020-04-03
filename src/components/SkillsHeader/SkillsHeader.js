import React from 'react'
import styled from 'styled-components'
import skillsLaptop from '../../img/skillsLaptop.jpg'
import ScrollIcon from '../ScrollIcon/ScrollIcon'

const Wrapper = styled.div`
position: absolute;
height: 200vh;
padding: 0 6vw 0 0;
z-index: 9;
`
const Header = styled.div`
position: absolute;
width: 40rem;
top: ${window.innerWidth < 676 ? "21.6vh" : "41.6vh"};
left: -30vw;
font-size: 11rem;
font-family: 'Rockout';
margin: 0;
line-height: 5.6rem;
color: white;
 &:first-line {
     color: #1C1B20;
     font-size: 10rem;
 }
@media (max-width: 676px) {

}
}
`

const Image = styled.div`
position: absolute;
top: 50vh;
left: 0;
margin-left: 7vw;
width: 41vw;
height: 50vh;
background-image: url(${({img}) => img});
background-size: cover;
overflow: hidden;
@media (max-width: 676px) {
    display: none;
}
`


const Text = styled.div`
z-index: 4;
position: absolute;
width: 45vw;
padding: 1vw 10vw;
top: ${window.innerWidth < 676 ? "51.6vh" : "71.6vh"};
left: -40vw;
font-size: 1rem;
font-family: 'Rockout';
margin: 0;
line-height: 1.6rem;
letter-spacing: 1.6px;
color: white;
@media (max-width: 676px) {
    width: 90vw;
    padding: 1vw 5vw;
}

`



function SkillsHeader() {
    return (
        <Wrapper>
            <ScrollIcon top={"86vh"} left={"-40vw"} color={"white"}/>
            <Header>MY <br/>SKILLS</Header>
            <Image img={skillsLaptop}/>
            <Text>
                Lady, running down to the riptide
                Taken away to the dark side
                I wanna be your left hand man
                I love you when you're singing that song and
                I got a lump in my throat 'cause
                You're gonna sing the words wrong
                Is this movie that I think you'll like
                This guy decides to quit his job and heads to New York City
                This cowboy's running from himself
                And she's been living on the highest shelf
            </Text>
       
        </Wrapper>
    )
}

export default SkillsHeader
