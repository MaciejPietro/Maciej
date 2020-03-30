
    import React, { useState, createContext } from 'react'

    export const NavbarContext = createContext({section: "home"}, {isBarOpen: false} , {isBarVisible: false})
    
    export const NavbarProvider = props => {
    const [section, setSection] = useState("home");
    const [isBarOpen, setBarOpen] = useState(false);
    const [isBarVisible, setBarVisible] = useState(false);

    const value = { section, setSection, isBarOpen, setBarOpen, isBarVisible, setBarVisible };

            return (
                <NavbarContext.Provider value={value}>
                    {props.children}
                </NavbarContext.Provider>
            )
    }
    