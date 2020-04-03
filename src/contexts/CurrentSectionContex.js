
    import React, { useState, createContext } from 'react'

    export const CurrentSectionContext = createContext({section: "home"})
    
    export const CurrentSectionProvider = props => {
    const [section, setSection] = useState("home");
      const value = { section, setSection };

      // window.addEventListener('wheel', event => {
      //   const delta = Math.sign(event.deltaY);
      //   console.info(delta);
      // })
    
            return (
                <CurrentSectionContext.Provider value={value}>
                    {props.children}
                </CurrentSectionContext.Provider>
            )
    }
    
    