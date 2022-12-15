import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

// is a basic react declare to return the statecontext provider 
export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);

    return (
        <StateContext.Provider
            // value property passed to all of the components in this application
            // is our sidebar currently open or is it closed?
            value={{ 
                activeMenu,
                setActiveMenu,
            }}
        >
            {/* always return children inside of it / whatever is inside the context will be displayed (rendered) */}
            {children}
        </StateContext.Provider>
    )
}
// passing in which context I want to use
// one context in thisu app
export const useStateContext = () => useContext (StateContext)