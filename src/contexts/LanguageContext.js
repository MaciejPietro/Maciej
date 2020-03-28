import React, { useState, createContext } from 'react'

export const LanguageContext = createContext({language: "PL"})

export const LanguageProvider = props => {
    const [language, setLanguage] = useState("PL");
  const value = { language, setLanguage };

        return (
            <LanguageContext.Provider value={value}>
                {props.children}
            </LanguageContext.Provider>
        )
}

