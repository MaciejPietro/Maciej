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
    margin-left: -10vw;
    margin-top: 3rem;
}
@media (max-width: 991px) {
    margin-left: -20vw;
    margin-top: 3rem;
}
@media (max-width: 767px) {
    margin-left: -34vw;
    margin-top: -3rem;
}
@media (max-width: 576px) {
    margin-left: -22vw;
    margin-top: 3rem;
}
@media (max-width: 476px) {
    margin-left: -30vw;
    margin-top: 8rem;
}
@media (max-width: 400px) {
    margin-left: -40vw;
    margin-top: 14rem;
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
@media (max-width: 576px) {
    width: 8rem;
    height: 8rem;
    transform: rotate(45deg) translate(6.3rem, -12rem)!important;
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
@media (max-width: 576px) {
    width: 8rem;
    height: 8rem;
    transform: rotate(45deg) translate(3.2rem, -3.2rem)!important;
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
@media (max-width: 576px) {
    width: 8rem;
    height: 8rem;
    transform: rotate(45deg) translate(12rem, -7.5rem)!important;
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
@media (max-width: 576px) {
    width: 10rem;
    height: 10rem;
    transform: rotate(45deg) translate(8rem, 3rem)!important;
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
@media (max-width: 576px) {
    width: 6rem;
    height: 6rem;
    transform: rotate(45deg) translate(20rem, 1rem)!important;
}    
`


function Pictures({reference}) {
    const { mouseX, mouseY } = useContext(MouseContext);

    window.addEventListener('mousemove', () => {
    })

    return (
        <Wrapper ref={reference}>
            <LozengeWrapper>
                <Lozenge img={meLaptop} style={{transform: `rotate(45deg) translate(${10 + mouseX/3300}rem, ${-18 + mouseY/3400}rem)`}}/>               
                <Lozenge2 img={water} style={{transform: `rotate(45deg) translate(${5 + -mouseX/2200}rem, ${-5 + -mouseY/2200}rem)`}}/>
                <Lozenge3 img={meBike} style={{transform: `rotate(45deg) translate(${18 + -mouseX/1800}rem, ${-10 + -mouseY/2200}rem)`}}/>
                <Lozenge4 img={norway} style={{transform: `rotate(45deg) translate(${12 + -mouseX/4300}rem, ${4.6 + -mouseY/3900}rem)`}}/>
                <Lozenge5 img={road} style={{transform: `rotate(45deg) translate(${29.5 + mouseX/5900}rem, ${1.6 + mouseY/5400}rem)`}}/>
            </LozengeWrapper>
        </Wrapper>
        
    )
}

export default Pictures
