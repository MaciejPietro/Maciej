import React from 'react'
import styled from 'styled-components'

const Hr = styled.hr`
width: 100%;
border: none;
`

const LetterH = styled.div`
width: 150px;
height: 160px;
`

const LetterE = styled.div`
width: 150px;
height: 160px;
page-break-after: always; 
break-after: always; 

`
const LetterL = styled.div`
width: 100px;
height: 160px;
`

const LetterO = styled.div`
width: 180px;
height: 180px;
border-radius: 50%;
`

const Circle = styled.circle`
    fill: none;
    stroke: #1C1B20;
    stroke-width: 70px;
    fill: none;
    stroke-dasharray: 650;
    stroke-dashoffset: 650;
    transform: scale(1);
    origin: center;
    animation: fillCircle 1s linear forwards;
    animation-delay: 2.6s;
`


const VerLine = styled.span`
display:flex;
position: absolute;
width: 44px;
height: 0px;
background-color: #1C1B20;
animation: verLine 2s;
`

const HorLine = styled.span`
        display:flex;
        position: absolute;
        background-color: #1C1B20;
        width: 0px;
        height: 50px;
        margin-left: 44px;
        margin-top: 60px;  
        animation: horLine 2s;    
`


function Letters() {
    return (
        <>
                <LetterH>
                <VerLine style={{
                    animation: "verLine .6s forwards", 
                    animationDelay: "2s"}}/>
                <HorLine style={{
                    animation: "horLine .6s forwards", 
                    animationDelay: "2.5s"}}/>
                <VerLine style={{
                    marginLeft: "88px",
                    animation: "verLine .6s forwards", 
                    animationDelay: "2.3s"}}/>
            </LetterH>








            <LetterE>
                <VerLine style={{
                    animation: "verLine .6s forwards", 
                    animationDelay: "2.5s"}}/>

                <HorLine style={{
                    marginTop: "120px", 
                    height: "40px", 
                    animation: "horLineE .6s forwards", 
                    animationDelay: "3.1s"}}/>

                <HorLine style={{
                    height: "40px",
                    animation: "horLine .6s forwards", 
                    animationDelay: "3.3s"}}/>

                <HorLine style={{
                    marginTop: "-0px", 
                    height: "40px",
                    animation: "horLineE .6s forwards", 
                    animationDelay: "3.5s"}}/>

            </LetterE>

            <Hr />

            <LetterL>
                <VerLine style={{
                    animation: "verLine .6s forwards", 
                    animationDelay: "2.3s"}}/>

                <HorLine style={{
                    marginTop: "120px", 
                    height: "40px",
                    animation: "horLineE .6s forwards", 
                    animationDelay: "2.9s"}}/>
            </LetterL>


            <LetterL>
                <VerLine style={{
                    animation: "verLine .6s forwards", 
                    animationDelay: "2.6s"}}/>

                <HorLine style={{
                    marginTop: "120px", 
                    height: "40px",
                    animation: "horLineE .6s forwards", 
                    animationDelay: "3.1s"}}/>
            </LetterL>

            <LetterO>
                <svg viewBox="0 0 290 290" xmlns="http://www.w3.org/2000/svg">
                    <Circle cx="135" cy="135" r="100"/>
                </svg>
            </LetterO>
    </>
    )
}

export default Letters
