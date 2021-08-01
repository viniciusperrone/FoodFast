import React, { useContext } from 'react';

import { Context } from "./context";

export function useClickDashboard(){
    const context = useContext(Context);

    const { openDashboard, setOpenDashboard } = context;

    return {
        openDashboard,
        setOpenDashboard
    };
}