import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar, LogBox } from 'react-native';

import Routes from './src/routes';

LogBox.ignoreLogs(['Remote debugger']);

export default function App() {
    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#E0E0E0"
                translucent
            />
            <Routes />

        </>
    );
}

