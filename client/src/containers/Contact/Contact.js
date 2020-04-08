import React, { useRef, useEffect} from 'react'
import styled from 'styled-components'
import ContactHeader from '../../components/ContactHeader/ContactHeader'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactLinks from '../../components/ContactLinks/ContactLinks'

const Wrapper = styled.section`
display: flex;
align-items: center;
`

function Contact() {
    let wrapper = useRef(null);
    let ignore = useRef(false)
    let ifMobile = window.innerWidth < 676

    useEffect(() => {
        window.scrollTo(0,0)
        document.querySelector('body').style.overflow ="hidden";
        let i = 0;
        window.scrollTo(0, 0)

    
        const scroll = e => {
            if(ignore.current) return
            i += e.deltaY / 100
              if(i < 4)  {
                    wrapper.current.style.width = "60vw";
                    if(i === 0) {
                        
                        i = 2
                    }
                }
                if(i > 15)  {      
                    wrapper.current.style.width = "5vw";
                    if(i === 15) {
                        i = 13
                    }
                }                                  
        } 
            window.addEventListener('mousewheel', e => scroll(e))
        
        return () => ignore.current = true   
        })


    return (
        <Wrapper>
            <ContactHeader wrapper={wrapper}/>
            <ContactForm/>
            <ContactLinks />
        </Wrapper>
    )
}

export default Contact
