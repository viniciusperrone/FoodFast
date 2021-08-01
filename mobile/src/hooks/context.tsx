import React, { createContext, useState } from 'react';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
}

export const Context = createContext({});

type UserData = {
    username: string;
    email: string;
    password: string;
    avatar: any;
}

export default function ContextProvider({ children } : Props){

    const [openDashboard, setOpenDashboard] = useState(false);
    const [user, setUser] = useState<UserData>({
        username: '',
        email: '',
        password: '',
        avatar: null
    });

    return (
    <Context.Provider value={{
        openDashboard,
        setOpenDashboard,
        user,
        setUser
    }}>
        { children }
    </Context.Provider>
    )
}
