import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
font-family: 'Baloo Da 2', cursive;
font-weight: 600;
font-size: 1.2rem;
position: absolute;
top: 0;
left: 3rem;
color: black;
right: 1.6rem;
`

function Logo() {
    return (
        <Wrapper>
            by Maciej Pietrolaj
        </Wrapper>
    )
}

export default Logo
