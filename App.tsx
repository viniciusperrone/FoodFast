import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

// import Background from './src/components/Background';

import Routes from './src/routes';

export default function App() {
    return (
        <>
            {/* <Background> */}
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#E0E0E0"
                    translucent
                />
                <Routes />
            {/* </Background> */}

        </>
    );
}

