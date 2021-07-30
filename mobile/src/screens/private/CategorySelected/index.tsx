import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import Header from '../../../components/Header';
import ButtonBack from '../../../components/ButtonBack';
import CardFood from '../../../components/CardFood';

import { style } from './style';

const CategorySelected: React.FC = () => {

    const navigation = useNavigation();

    function handleRecipeDetails(){
        navigation.navigate('RecipeDetails');
    }
    return (
        <View style={style.container}>
            <Header>
                <ButtonBack />
                <View style={{ marginRight: 20}}>
                    <Text style={style.title}>
                        Lorem
                    </Text>
                    <Text style={style.subtitle}>
                        Popular recipes
                    </Text>
                </View>

                <View>

                </View>
            </Header>

            <View style={{ flex: 1 }}>
                <CardFood onPress={handleRecipeDetails}/>
                <CardFood />
            </View>
        </View>
    );
}

export default CategorySelected;