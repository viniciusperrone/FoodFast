import { useContext } from 'react';

import { Context } from "./context";

export function useAuth(){
    const context = useContext(Context);

    const {
        user,
        setUser
    } = context;

    return{
        user,
        setUser
    }
}
