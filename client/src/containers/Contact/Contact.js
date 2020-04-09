import React, { useRef, useEffect, useState} from 'react'
import styled from 'styled-components'
import ContactHeader from '../../components/ContactHeader/ContactHeader'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactLinks from '../../components/ContactLinks/ContactLinks'
import Loading from '../../components/Loading/Loading'

const Wrapper = styled.section`
align-items: center;
display: flex;
opacity: 0;
animation: showContact 1s forwards 3s;
`

function Contact() {
    let wrapper = useRef(null);
    let text = useRef(null);
    let ignore = useRef(false);
    const [ sent, setSent ] = useState(false)


    useEffect(() => {
        document.querySelector('body').style.overflow = "hidden"
        const arrow = document.querySelector('.scroll-icon')
        window.scrollTo(0,0)


        window.addEventListener('mousewheel', (e) => {
            if(ignore.current) return;
            if(e.deltaY === 100) {
                wrapper.current.classList.add("contact-header__visibility")
                if(window.innerWidth < 676) return;
                    arrow.classList.add('rotateArrow')
            } else if (e.deltaY === -100) {
                wrapper.current.classList.remove("contact-header__visibility")
                if(window.innerWidth < 676) return;
                    arrow.classList.remove('rotateArrow')             
            }
        })

        return () => ignore.current = true
        }, [])


    function handleHeader(e) {
          wrapper.current.classList.toggle("contact-header__visibility")   
    }

    function mailSent() {
        setSent(true)
        wrapper.current.classList.remove("contact-header__visibility")
    }


    return (
        <>
            <Loading />
            <Wrapper>
                <ContactHeader wrapper={wrapper} text={text} click={handleHeader} sent={sent} />  
                <ContactForm mailSent={mailSent}/>
                <ContactLinks />       
            </Wrapper>
        </>
    )
}

export default Contact
