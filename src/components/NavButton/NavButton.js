import React, {useState} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
`
const Button = styled.div`
width: 60px;
height: 60px;
position: absolute;
top: 46vh;
left: 2.2rem;
z-index: 3;
    &:hover {
        span:first-child {
            width: 1.8rem;
            margin-left: -0.2rem;
        }
        span:nth-child(2) {
            width: 2.2rem;
            margin-left: -0.6rem;
        }
        span:nth-child(3) {
            width: 2rem;
            margin-left: -0.4rem;
        }
        h6 {
            transform: rotate(0deg);
        }
    }
`

const Top = styled.span`
width: 1.4rem;
height: 2px;
border-radius: 30%;
background-color: black;
display: block;
margin-bottom: 4px;
margin-left: 0.2rem;
transition: .5s;
`
const Center = styled.span`
width: 1.6rem;
height: 2px;
border-radius: 30%;
background-color: black;
display: block;
margin-bottom: 4px;
transition: .5s;
`
const Bottom = styled.span`
width: 1.2rem;
height: 2px;
border-radius: 30%;
background-color: black;
display: block;
margin-left: 0.4rem;
transition: .5s;
`
const Text = styled.h6`
color:black;
position: absolute;
top: -1.6rem;
left:2rem;
transform: rotate(-90deg);
font-family: 'Noto Sans', sans-serif;
letter-spacing: 2px;
transition: 0.6s;
`

const NavButton = () => {

const [isBarVisible, setBarVisible] = useState(false)

    const showSidebar = () => {
        setBarVisible(!isBarVisible)
    }

    return (
        <Wrapper>
            <Button onMouseOver={showSidebar}>
                <Top />
                <Center />
                <Bottom />    
                
                <Text>
                    Menu
                </Text>
            </Button>
       
            
        </Wrapper>
    )
}

export default NavButton
