import React, { ReactNode } from 'react';

import { ImageBackground, SafeAreaView } from 'react-native';

import { style } from './style';

import BackgroundImg from '../../assets/background_foodfast.png';

type Props = {
    children: ReactNode;
}

const Background = ({ children }: Props) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={BackgroundImg}
                style={style.container}
            >
                {children}
            </ImageBackground>
        </SafeAreaView>

    );
}

export default Background;