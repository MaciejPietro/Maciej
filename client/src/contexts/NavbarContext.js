
    import React, { useState, createContext } from 'react'

    export const NavbarContext = createContext()
    
    export const NavbarProvider = props => {
    const [isBarOpen, setBarOpen] = useState(false);
    const [isBarVisible, setBarVisible] = useState(false);

    const value = { isBarOpen, setBarOpen, isBarVisible, setBarVisible };

            return (
                <NavbarContext.Provider value={value}>
                    {props.children}
                </NavbarContext.Provider>
            )
    }
    