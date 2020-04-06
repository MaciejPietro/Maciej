import React, { useContext } from 'react'
import styled from 'styled-components'
import { LanguageContext } from '../../contexts/LanguageContext'


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
font-family: 'Barlow Condensed', sans-serif;
font-size: 1.3rem;
letter-spacing: 1.4px;
font-weight: 400;
color: black;

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
    const { language } = useContext(LanguageContext);
    return (
        <Wrapper ref={reference}>
            <Heading>
            Front End
            </Heading>
            <Heading2>
            Developer
            </Heading2>
            <Text>
            {language === "PL" ?
            "Cześć. Nazywam się Maciej Pietrołaj, mam 23 lata, jestem absolwentem PWSZ w Pile na kierunku filologia angielska, a rok temu zainteresowałem się programowaniem. Wybór padł na programowanie po stronie Front Endu. Nigdy nie żałowałem tej decyzji ponieważ programowanie stało się moją pasją, co skutkowało zaniedbaniem wielu innych zajęć. Poświęciłem setki godzin na kodowanie i setki złotych na kursy online. Poza pisaniem kodu gram na gitarze, jeżdżę na rowerze i okazjonalnie czytam książki o tematyce II wojnie światowej. Ponad programowanie stawiam tylko moją dziewczynę Darię. Aktualnie szukam pierwsze pracy lub stażu jako Junior Front End developerem i jestem skłonny relokować do każdego miasta w Polsce" :
            "Hi. My name is Maciej Pietrolaj, I'm 23 years old, I've graduated PWSZ in Pila(English Philology) and one year ago I became interested in programming. The choice fell on Front End Development. I have never regretted this decision because programming became my passion, which resulted in many other activities being neglected. I have spent hundreds of hours coding and hundreds of PLN on online courses. In addition to writing the code, I play the guitar, I ride a bike and occasionally read books about World War II. I only put my girlfriend Daria over programming :). I am currently looking for a first job or internship as a Junior Front End developer and I am willing to relocate everywhere in Poland "
            }
            </Text>

        </Wrapper>

    )
}

export default Introduce
