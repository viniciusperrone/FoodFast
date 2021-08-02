import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { useCategory } from '../../../src/hooks/app';

import { AntDesign, FontAwesome } from '@expo/vector-icons';

import { style } from './style';
import { theme } from '../../global/styles/global';

type DataFood = {
    id: number;
    categoryName: string;
    Icon: JSX.Element;
}

const FoodSelect: React.FC<DataFood> = ({ id, categoryName, Icon }) => {

    const { category , setCategory } = useCategory();
    const navigation = useNavigation();

    function handleCategorySelected(id:number, categoryName:string){
        setCategory({
            id: id,
            name: categoryName
        });

        navigation.navigate('CategorySelected');
    }
    return (
        <View style={style.container}>
            {/* <FontAwesome name="camera" size={30} style={style.icon} /> */}
            {
                Icon
            }
            <Text style={style.text}>{ categoryName }</Text>
            <TouchableOpacity style={style.button} onPress={() => handleCategorySelected(id, categoryName)}>
                <AntDesign name="arrowright" size={24} color={theme.colors.white_grey} />
            </TouchableOpacity>
        </View>
    );
}

export default FoodSelect;