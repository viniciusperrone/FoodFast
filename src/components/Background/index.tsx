import React, { ReactNode } from 'react';

import { ImageBackground } from 'react-native';

import { style } from './style';

import BackgroundImg from '../../assets/background_foodfast.png';

type Props = {
    children: ReactNode;
}

const Background = ({ children }: Props) => {

    return (
      <ImageBackground
        source={BackgroundImg}
        style={style.container}
      >
          { children }
      </ImageBackground>
    );
}

export default Background;