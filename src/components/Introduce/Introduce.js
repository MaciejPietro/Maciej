import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
opacity: 0;
transform: translate(0, 20rem);
width: 46vw;
height: 90vh;
padding: 5rem 0 0 5rem;
box-sizing: border-box;
@media (max-width: 1200px) {
    padding: 4rem 0 0 1rem;
    h2 {
        font-size: 4rem;
    }
}
@media (max-width: 991px) {
    width: 90vw;
    height: 60vh;
    min-height: 34rem!important;
}
@media (max-width: 767px) {
    min-height: 42rem!important;
}
@media (max-width: 576px) {
    padding: 5rem 0 0 0;
}
`
const Heading = styled.h2`
font-size: 5rem;
font-family: 'Rockout';
color: 	#72a0b8;
margin: 0;
    &::before {
        height: 2px;
        animation: drawLine3 0.8s forwards ease-out 3.2s;
        background-color: grey;
        opacity: .6;
        content: '';
        position: absolute;  
        margin-top: -1.4rem;  
    }
    @media (max-width: 1200px) {
        &::before {
            width: 18rem;   
        }
        &::after {
            top: -8rem;
        }
    }
    @media (max-width: 576px) {
        padding: 5rem 0 0 0;
        text-align: center;
        &::before {
            margin-left: -10vw; 
        }
    }

` 
const Heading2 = styled.h2`
font-size: 5rem;
font-family: 'Rockout';
margin: 0;
transform: translate(9rem);
&::after {
    height: 2px;
    animation: drawLine4 0.8s forwards ease-out 3.2s;
    background-color: grey;
    opacity: .6;
    content: '';
    position: absolute;
    top: 7rem; 

}
@media (max-width: 1200px) {
        &::after {
            width: 17rem;   
        }
    }
    @media (max-width: 576px) {
        text-align: center;
        transform: translate(0);
        &::after {
            margin-left: 10vw; 
        }
` 

const Text = styled.main`
padding: 4rem 5rem;
    &::after {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background-color: translate;
        border: 3px solid  #414A6B;
        opacity: .3;
        content: '';
        position: absolute;
        margin-top: 7rem;
        margin-left: -4rem;
    }
@media (max-width: 576px) {
    padding: 5rem 10vw 0 10vw;
    text-align: justify;
}
`

function Introduce({reference}) {
    return (
        <Wrapper ref={reference}>
            <Heading>
            Front End
            </Heading>
            <Heading2>
            Developer
            </Heading2>
            <Text>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the mo
                re obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, d
                iscovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extrem
                es of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissanc
                e. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Text>

        </Wrapper>

    )
}

export default Introduce
