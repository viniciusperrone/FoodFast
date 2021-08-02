import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useCategory } from '../../../hooks/app';
import { useNavigation } from '@react-navigation/core';

import Header from '../../../components/Header';
import ButtonBack from '../../../components/ButtonBack';
import CardFood from '../../../components/CardFood';

import { style } from './style';
import { theme } from '../../../global/styles/global';

import { foodsCategories } from '../../../utils/recipeDetails.json';

const CategorySelected: React.FC = () => {

    const { category } = useCategory();
    const navigation = useNavigation();

    function handleRecipeDetails() {
        navigation.navigate('RecipeDetails');
    }
    return (
        <View style={style.container}>
            <Header>
                <ButtonBack />
                <View style={{ marginRight: 20 }}>
                    <Text style={style.title}>
                        {category.name}
                    </Text>
                    <Text style={style.subtitle}>
                        Popular recipes
                    </Text>
                </View>

                <View>

                </View>
            </Header>

            <View style={{ flex: 1 }}>
                {
                    foodsCategories.map(categoryDetais => {
                        if (categoryDetais.id_category === category.id) {
                            return (
                                <View key={categoryDetais.id}>
                                    <CardFood
                                        id={categoryDetais.id}
                                        title={categoryDetais.title}
                                        subtitle={categoryDetais.subtitle}
                                        url={categoryDetais.image_uri}
                                    />

                                </View>
                            )
                        }
                        return;
                    })
                }
            </View>
        </View>
    );
}

export default CategorySelected;