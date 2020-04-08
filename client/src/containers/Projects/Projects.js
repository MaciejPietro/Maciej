/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useContext, useRef} from 'react'
import { NavbarContext } from '../../contexts/NavbarContext'
import ProjectsHeader from '../../components/ProjectsHeader/ProjectsHeader'
import Projects from '../../components/Projects/Projects'
import Loading from '../../components/Loading/Loading'




function Skills() {
    const { isBarOpen } = useContext(NavbarContext);
    const body = document.querySelector('body');
    let ignore = useRef(false)
    let wrapper = useRef(null)
    let des1 = useRef(null)
    let des2 = useRef(null)
    let pro1 = useRef(null)
    let pro2 = useRef(null)

useEffect(() => {
    const ifMobile = window.innerWidth < 676
    ifMobile ? body.style.overflowY = "scroll" : body.style.overflowY = "hidden";
    let i = 0;
    window.scrollTo(0, 0)

    const scroll = e => {
        i += e.deltaY / 100
        console.log(i)
        if(i > 0 && !ifMobile)  {
            wrapper.current.style.height = "120%";
        }
        if(i > 5 && !ifMobile) {
            body.style.overflowY = "scroll"
        }
        if(i > 6 && !ifMobile) {
            des1.current.style.animation = "fadeIn .8s forwards"
            pro1.current.style.animation = "fadeInLeft .8s forwards .6s"
        }
        if(i > 9 && !ifMobile) {
            des2.current.style.animation = "fadeIn .8s forwards"
            pro2.current.style.animation = "fadeInRight .8s forwards .6s"
        }
    }
        
        window.addEventListener('mousewheel', e => {
            if(ignore.current) return;
            scroll(e)
        })
    return () => ignore.current = true
}, [])
    return (
        <>
            <Loading />
            <ProjectsHeader isBarOpen={isBarOpen}/>
            <Projects isBarOpen={isBarOpen} wrapper={wrapper} des1={des1} des2={des2} pro1={pro1} pro2={pro2}/>
        </>
            
        
    )
}

export default Skills
