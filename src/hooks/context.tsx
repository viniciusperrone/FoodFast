import React, { createContext, useState, useContext } from 'react';
import { ReactNode } from 'react';

import { config } from '../utils/defaultConfig';

type Props = {
    children: ReactNode;
}

export const Context = createContext({});

export default function ContextProvider({ children } : Props){

    const [openDashboard, setOpenDashboard] = useState(false);
    const [avatar, setAvatar] = useState(config.avatar)

    return (
    <Context.Provider value={{
        openDashboard,
        setOpenDashboard,
        avatar,
        setAvatar
    }}>
        { children }
    </Context.Provider>
    )
}

export function useClickDashboard(){
    const context = useContext(Context);

    const { openDashboard, setOpenDashboard, avatar, setAvatar} = context;

    return {
        openDashboard,
        setOpenDashboard,
        avatar,
        setAvatar
    };
}