import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Wrapper = styled.div`
position: absolute;
left: 22vw;
width: 35vw;
display: flex;
justify-content: center;
z-index: 0;
@media (max-width: 1400px) {
    width: 45vw;
}
@media (max-width: 676px) {
    width: 65vw;
    left: 12vw;
}
`
const Form = styled.form`
width: 100%;
text-align: center;
`

const Row = styled.div`
font-family: 'Barlow Condensed', sans-serif;
letter-spacing: 1.4px;
font-weight: 500;
font-size: 1.1rem;
color: black;

`
const Label = styled.label`

`
const Input = styled.input`
width: 80%;
border: none;
border-bottom: 1px solid grey;
margin: 1rem 0rem;
padding: 10px;
outline: none;
`
const Textarea = styled.textarea`
width: 80%;
border: none;
border-bottom: 1px solid grey;
padding: 10px;
outline: none;
margin: 2rem 0rem;
`

const Button = styled.button`
width: 40%;
height: 10%;
border: none;
background-color: #B49A85;
color: white;
letter-spacing: 2px;
transition: 0.8s;
overflow: hidden;
z-index: 1;
&:after {
    display: block;
    content: '';
    position: absolute;
    margin-top: 30px;
    margin-left: -20px;
    border-left: 300px solid goldenrod;
    border-bottom: 60px solid goldenrod;
    border-top: 300px solid transparent;
    transition: 1s;
    z-index: -1;
    opacity: 0;
}
&:hover {
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .3);
    transform: translateY(-10px);
    &:after {
        margin-top: -300px;
        opacity: 1;
    }
}
`

function ContactFrom({mailSent}) {
    const [name, setName] = useState("Name")
    const [email, setEmail] = useState("E-mail")
    const [message, setMessage] = useState("Enter your message")


    const sendMail = async(e) => {
        e.preventDefault()
        const form = await axios.post('/api/form', {
            name,
            email,
            message
        })
    }

    const fillMail = (e) => {
        switch (e.target.name) {
            case "name": 
                setName(e.target.value)
                break;
            case "email": 
                setEmail(e.target.value)
                break;
            case "feedback": 
                setMessage(e.target.value)
                break;
            default:
                alert("error")
        }
    }

    return (

	<Wrapper>
		<Form onSubmit={sendMail}  name="contactForm">
			<Row >
				<Label htmlfor="userName">
					
				</Label>
				<Input name="name" type="text" placeholder={name} onChange={fillMail}></Input>
			</Row>
			<Row>
				<Label htmlfor="userEmail">
				
				</Label>
				<Input name="email" type="email" placeholder={email} onChange={fillMail}></Input>
			</Row>
			<Row>
				<Textarea name="feedback" rows="10" placeholder={message} onChange={fillMail}></Textarea>
			</Row>
            <Button type="submit" onClick={mailSent}>Send</Button>
	
		</Form>
	</Wrapper>

    )
}

export default ContactFrom
