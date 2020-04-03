import React, { useContext }  from 'react'
import { MouseContext } from '../../contexts/MouseContext'
import styled from 'styled-components'
import water from '../../img/water.jpg'
import meLaptop from '../../img/meLaptop.jpg'
import meBike from '../../img/meBike.jpg'
import norway from '../../img/norway.jpg'
import road from '../../img/road.jpg'

const Wrapper = styled.div`
opacity: 0;
transform: translate(0, 20rem);
width: 46vw;
height: 90vh;
display: flex;
align-items: center;
@media (max-width: 991px) {
    width: 90vw;
    justify-content: center;
}
`

const LozengeWrapper = styled.div`
position: absolute;
width: 30vw;
height: 50vh;
    &::after {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        background-color: translate;
        border: 3px solid  #414A6B;
        opacity: .25;
        content: '';
        position: absolute;
        right: 3rem;
        bottom: 0;
        border-left: 1rem solid transparent;
    }
    &::before {
        width: 1.6rem;
        height: 1.6rem;
        background-color: translate;
        border: 3px solid  #414A6B;
        transform: rotate(45deg);
        opacity: .2;
        content: '';
        position: absolute;
        left: -12rem;
        top: -9rem;
    }
@media (max-width: 1200px) {
    margin-left: -6rem;
    margin-top: 3rem;
}
@media (max-width: 991px) {
    margin-left: -8rem;
}
@media (max-width: 676px) {
    margin-left: -12rem;
}
`

const Lozenge = styled.div`
width: 12rem;
height: 12rem;

transform: rotate(45deg) translate(10rem, -18rem);
z-index: 3;
overflow: hidden;
position: absolute;
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(${({img}) => img});
        background-size: cover;
        background-position: -5.2rem  -5rem;
        transform: rotate(-45deg) scale(1.4);
    }
`
const Lozenge2 = styled.div`
width: 12rem;
height: 12rem;
transform: rotate(45deg) translate(5rem, -5rem);
z-index: 3;
overflow: hidden;
position: absolute;
opacity: 1;
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(${({img}) => img});
        background-size: cover;
        background-position: -1.5rem .7rem;
        transform: rotate(-45deg) scale(1.6);
    }
`

const Lozenge3 = styled.div`
width: 12rem;
height: 12rem;
transform: rotate(45deg) translate(18rem, -10rem);
overflow: hidden;
position: absolute;
z-index: 2;
opacity: 1;
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(${({img}) => img});
        background-size: cover;
        background-position: -2.4rem .3rem;
        transform: rotate(-45deg) scale(1.4);
    }
`
const Lozenge4 = styled.div`
width: 15rem;
height: 15rem;
background-color: #630700;
transform: rotate(45deg) translate(12rem, 4.6rem);
position: absolute;
overflow: hidden;
z-index: 2;
opacity: 1;
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(${({img}) => img});
        background-size: cover;
        background-position: 0rem  2rem;
        transform: rotate(-45deg) scale(1.4);
    }

`
const Lozenge5 = styled.div`
width: 9rem;
height: 9rem;
transform: rotate(45deg) translate(29.5rem, 1.6rem);
position: absolute;
overflow: hidden;
opacity: 1;
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(${({img}) => img});
        background-size: cover;
        background-position: 0rem -3rem;
        transform: rotate(-45deg) scale(1.4);
    }

`

const TextWrapper = styled.div`
display: none;
font-family: 'Monsterrat';
font-size: .8rem;
width: 14rem;
height: 8rem;
position: absolute;
transform: translate(-1.6rem, -18rem) rotate(-45deg);
@media (max-width: 1200px) {
    transform: translate(5.6rem, -20rem) rotate(-45deg) 
}
`


function Pictures({reference}) {

    const { mouseX, mouseY } = useContext(MouseContext);

    window.addEventListener('mousemove', () => {
    })

    return (
        <Wrapper ref={reference}>
            <TextWrapper>
                <b>Poza front endem</b><br/>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in t
            heir exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </TextWrapper>
            <LozengeWrapper>
                <Lozenge img={meLaptop} style={{transform: `rotate(45deg) translate(${10 + mouseX/1900}rem, ${-18 + mouseY/2400}rem)`}}/>               
                <Lozenge2 img={water} style={{transform: `rotate(45deg) translate(${5 + -mouseX/2200}rem, ${-5 + -mouseY/1800}rem)`}}/>
                <Lozenge3 img={meBike} style={{transform: `rotate(45deg) translate(${18 + -mouseX/1800}rem, ${-10 + -mouseY/2200}rem)`}}/>
                <Lozenge4 img={norway} style={{transform: `rotate(45deg) translate(${12 + -mouseX/1300}rem, ${4.6 + -mouseY/900}rem)`}}/>
                <Lozenge5 img={road} style={{transform: `rotate(45deg) translate(${29.5 + mouseX/2900}rem, ${1.6 + mouseY/2400}rem)`}}/>
            </LozengeWrapper>
        </Wrapper>
        
    )
}

export default Pictures
