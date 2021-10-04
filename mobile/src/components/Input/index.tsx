import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View, TextInput } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import SearchRecipes from '../../screens/private/SearchRecipes';

import { style } from './style';

type Props = {
    value?: string;
    onChange?: () => void;
}

const Input: React.FC<Props> = ({ value, onChange }) => {
    const navigation = useNavigation();

    function handleSearch(){
        navigation.navigate('SearchRecipes');
    }

    return (
        <View style={style.container}>
            <TextInput style={style.input}
                placeholder="search.."
                value={value}
                onChangeText={onChange}
            />
            <View style={style.button}>
                <RectButton onPress={handleSearch}>
                    <FontAwesome5 name="search" size={20} color="white" />
                </RectButton>
            </View>
        </View>
    );
}

export default Input;