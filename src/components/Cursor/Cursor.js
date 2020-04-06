import React, { useContext, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { CursorContext } from '../../contexts/CursorContext'

const MouseCursor = styled.div`
z-index: 10;
width: 11px;
height: 11px;
border-radius: 50%;
position: absolute;
transform: translate(-50%, -50%);
pointer-events: none;

transition-property: background, transform;
background-color: #545454;
filter: invert(1);
mix-blend-mode: difference;
`

const MouseCircle = styled.div`
z-index: 10;
width: 55px;
height: 55px;
border-radius: 50%;
position: absolute;
transform: translate(-50%, -50%);
pointer-events: none;
transition: all 0.065s ease;
border: 1.6px solid #545454;
`

const Cursor = () => {
    let mouseCursor = useRef(null);
    let mouseCircle = useRef(null)

    const { cursor } = useContext(CursorContext); 

    function mouse(e) {
        mouseCursor.current.style.top = e.pageY + "px";
        mouseCursor.current.style.left = e.pageX + "px";
        mouseCircle.current.style.top = e.pageY + "px";
        mouseCircle.current.style.left = e.pageX + "px";

    //    if(cursor === "default") {
    //     mouseCircle.current.style.width = "55px";
    //     mouseCircle.current.style.height = "55px";
    //     mouseCircle.current.style.transition = "all 0.065s ease";
    //    } else if (cursor === "hoverAble") {
    //     mouseCircle.current.style.width = "75px";
    //     mouseCircle.current.style.height = "75px";
    //     mouseCircle.current.style.transition = "all 0.3s ease";
    //    }        
    }

useEffect(() => {
    function mouse(e) {
        mouseCursor.current.style.top = e.pageY + "px";
        mouseCursor.current.style.left = e.pageX + "px";
        mouseCircle.current.style.top = e.pageY + "px";
        mouseCircle.current.style.left = e.pageX + "px";
    }
    window.addEventListener("mousemove", mouse)
})


    return (
        <>
            <MouseCursor ref={mouseCursor}/>
            <MouseCircle ref={mouseCircle}/>
        </>
    )
}

export default Cursor
