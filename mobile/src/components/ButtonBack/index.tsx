import React from 'react';
import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { AntDesign } from '@expo/vector-icons';

import { style } from './style';
import { theme } from '../../global/styles/global';


const ButtonBack: React.FC = () => {

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }
    return (
        <TouchableOpacity style={style.container} onPress={goBack}>
            <AntDesign
                name="arrowleft"
                size={35}
                color={theme.colors.light_blue}
            />
        </TouchableOpacity>
    );
}

export default ButtonBack;