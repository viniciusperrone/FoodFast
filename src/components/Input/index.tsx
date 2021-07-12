import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View, TextInput } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import { style } from './style';

type Props = {
    value?: string;
    onChange?: () => void;
}

const Input: React.FC<Props> = ({ value, onChange }) => {
    return (
        <View style={style.container}>
            <TextInput style={style.input}
                placeholder="search.."
                value={value}
                onChangeText={onChange}
            />
            <View style={style.button}>
                <RectButton >
                    <FontAwesome5 name="search" size={20} color="white" />
                </RectButton>
            </View>
        </View>
    );
}

export default Input;