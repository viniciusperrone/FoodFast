import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { AntDesign, FontAwesome } from '@expo/vector-icons';

import { style } from './style';
import { theme } from '../../global/styles/global';

const FoodSelect: React.FC = () => {

    const navigation = useNavigation();

    function handleCategorySelected(){
        navigation.navigate('CategorySelected');
    }
    return (
        <View style={style.container}>
            <FontAwesome name="camera" size={30} style={style.icon} />
            <Text style={style.text}>Category</Text>
            <TouchableOpacity style={style.button} onPress={handleCategorySelected}>
                <AntDesign name="arrowright" size={24} color={theme.colors.white_grey} />
            </TouchableOpacity>
        </View>
    );
}

export default FoodSelect;