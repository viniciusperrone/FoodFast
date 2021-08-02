import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { style } from './style';
import { theme } from '../../global/styles/global';


const ButtonBack: React.FC<TouchableOpacityProps> = ({ ...rest }) => {

    return (
        <TouchableOpacity
            style={style.container}
            {...rest}
        >
            <AntDesign
                name="arrowleft"
                size={35}
                color={theme.colors.light_blue}
            />
        </TouchableOpacity>
    );
}

export default ButtonBack;