import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.span`
    display: inline-block;
    width: 60px;
    height: 60px;
    position: relative;
    border: 4px solid #Fff;
    top: 0%;
    animation: loader 1.6s infinite ease, loaderFadeOut .6s forwards 1.6s;

`

const Fill = styled.span`
    vertical-align: top;
    display: inline-block;
    width: 100%;
    background-color: #fff;
    animation: loader-inner 1.6s infinite ease-in;
`

function Loading() {
    return (
        <Wrapper >
            <Fill></Fill>
        </Wrapper>
    )
}

export default Loading
