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

type CategoryData = {
    id: number;
    name: string;
}

export default function ContextProvider({ children } : Props){

    const [user, setUser] = useState<UserData>({
        username: '',
        email: '',
        password: '',
        avatar: null
    });
    const [openDashboard, setOpenDashboard] = useState(false);
    const [category, setCategory] = useState<CategoryData>({} as CategoryData);

    return (
    <Context.Provider value={{
        openDashboard,
        setOpenDashboard,
        user,
        setUser,
        category,
        setCategory
    }}>
        { children }
    </Context.Provider>
    )
}
