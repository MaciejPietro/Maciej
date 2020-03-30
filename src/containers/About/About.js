import React, { useRef, useEffect } from 'react'

import Introduce from '../../components/Introduce/Introduce'
import Pictures from '../../components/Pictures/Pictures'
import {TimelineMax, Bounce } from "gsap";
import styled from 'styled-components'

const Wrapper = styled.section`
z-index:1;
position: absolute;
`

const ImgWrapper = styled.div`
position: absolute;
right: 3rem;
bottom: 3rem;
`

const About = () => {
 
        return (    
            <Wrapper>
                <Pictures />
            </Wrapper>
        )
}

export default About
