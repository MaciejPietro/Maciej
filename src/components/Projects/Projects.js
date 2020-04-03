import React from 'react'
import styled from 'styled-components'
import Project1 from '../../img/Project1.jpg'
import Project2 from '../../img/Project2.jpg'
import Project3 from '../../img/Project3.jpg'
import Project4 from '../../img/Project4.webp'

const Wrapper = styled.div`
width: 90vw;
height: 300vh;
position: absolute;
background-color: #cca32b;
top: 50vh;
left: 5vw;
margin-top: 3vw;
display: flex;
flex-direction: column;
flex-wrap: wrap;
flex-basis: 1;
`
const Project = styled.div`
width: 40vw;
height: 50vh;
background-image: url(${({img}) => img});
background-size: cover;
`

const Text = styled.div`
width: 40vw;
height: 50vh;
background-size: cover;
padding: 10vw;
`

const Row = styled.div`
width: 90vw;
height: 30rem;
border: 2px solid blue;
display: flex;
flex-direction: row;
`


function Projects() {
    return (
        <Wrapper>
            <Row>
                <Project img={Project3}/>
                <Text>
                    Stack: Html, Css, Javascrip, Bootstrap, React, and others
                </Text>
            </Row>

            <Row >
                <Text>
                    Stack: Html, Css, Javascrip, Bootstrap, React, and others
                </Text>
                <Project  img={Project2}/>
            </Row>

            <Row>
                <Project  img={Project1}/>
                <Text>
                    Stack: Html, Css, Javascrip, Bootstrap, React, and others
                </Text>
            </Row>
            

        </Wrapper>
    )
}

export default Projects
