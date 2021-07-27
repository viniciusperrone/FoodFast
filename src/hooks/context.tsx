import React, { createContext, useState, useContext } from 'react';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
}

export const Context = createContext({});

export default function ContextProvider({ children } : Props){

    const [openDashboard, setOpenDashboard] = useState(false);

    return (
    <Context.Provider value={{
        openDashboard,
        setOpenDashboard
    }}>
        { children }
    </Context.Provider>
    )
}

export function useClickDashboard(){
    const context = useContext(Context);

    const { openDashboard, setOpenDashboard} = context;

    return {openDashboard, setOpenDashboard};
}