import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useCategory, useRecipes } from '../../../hooks/app';
import { useNavigation } from '@react-navigation/core';

import Header from '../../../components/Header';
import ButtonBack from '../../../components/ButtonBack';
import CardFood from '../../../components/CardFood';

import { style } from './style';

import { foodsCategories } from '../../../utils/recipeDetails.json';

const CategorySelected: React.FC = () => {

    const { category } = useCategory();
    const { setRecipeDetails } = useRecipes();
    const navigation = useNavigation();

    function handleRecipeDetails(category: Object) {
        setRecipeDetails({
            id: category.id,
            title: category.title,
            subtitle: category.subtitle;
            image_uri: category.image_uri;
            description: category.description;
            ingredients: category.ingredients;
            steps: category.steps;
            id_category: category.id_category;
        })
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
                                        onPress={() => handleRecipeDetails(categoryDetais)}
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