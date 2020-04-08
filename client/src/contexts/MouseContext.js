import React, { useState, createContext } from 'react'

export const MouseContext = createContext()

export const MouseProvider = props => {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    
window.addEventListener('mousemove', (e) => {
    setMouseX(e.clientX) 
    setMouseY(e.clientY)
})

const value = { mouseX, mouseY};

        return (
            <MouseContext.Provider value={value}>
                {props.children}
            </MouseContext.Provider>
        )
}
