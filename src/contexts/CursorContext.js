import React, { useState, createContext } from 'react'

export const CursorContext = createContext()

export const CursorProvider = props => {
    const [cursor, setCursor] = useState(true);
    const value = { cursor, setCursor };
    
    return (
        <CursorContext.Provider value={value}>
            {props.children}
        </CursorContext.Provider>
    )
}

