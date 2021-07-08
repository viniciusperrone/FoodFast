import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View, TextInput } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import { style } from './style';

const Input: React.FC = () => {
    return (
        <View style={style.container}>
            <TextInput style={style.input} placeholder="search.." />
            <View style={style.button}>
                <RectButton >
                    <FontAwesome5 name="search" size={20} color="white" />
                </RectButton>
            </View>
        </View>
    );
}

export default Input;