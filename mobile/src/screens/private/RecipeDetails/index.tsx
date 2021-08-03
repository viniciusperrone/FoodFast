import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

import { FontAwesome, AntDesign } from '@expo/vector-icons';

import { useRecipes } from '../../../hooks/app';

import Header from '../../../components/Header';
import ButtonBack from '../../../components/ButtonBack';

import { style } from './style';
import { theme } from '../../../global/styles/global';

const RecipeDetails: React.FC = () => {

    const { recipeDetails } = useRecipes();
    const [starClick, setStarClick] = useState(true);
    const [shopping, setShopping] = useState(false);

    return (
        <View style={style.container}>
            <Header>
                <ButtonBack />
                <View style={{ flexDirection: 'row', marginRight: 20 }}>
                    <TouchableOpacity style={style.button} onPress={() => setShopping(!shopping)}>
                        <FontAwesome name="shopping-bag" size={24} color={shopping ? theme.colors.light_blue : theme.colors.white_grey} />
                    </TouchableOpacity>
                    {
                        starClick
                            ?
                            <TouchableOpacity style={style.button} onPress={() => setStarClick(!starClick)}>
                                <AntDesign name="star" size={24} color={theme.colors.gold} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={style.button} onPress={() => setStarClick(!starClick)}>
                                <AntDesign name="staro" size={24} color={theme.colors.light_grey} />
                            </TouchableOpacity>
                    }
                </View>
            </Header>

            <ScrollView>
                <View style={{
                    width: '100%',
                    height: '100%',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    marginBottom: 50
                }}>

                    <Text style={[style.title, { marginBottom: 20 }]}>
                        {recipeDetails.title}
                        {'\n'}
                        {recipeDetails.subtitle}
                    </Text>

                    <Image
                        style={style.image}
                        source={{
                            uri: recipeDetails.image_uri,
                        }}
                    />

                    <Text style={style.title}>Description</Text>

                    <View style={{ marginTop: 20, marginBottom: 20 }}>
                        <Text style={style.text}>
                            {
                                recipeDetails.description
                            }
                        </Text>
                    </View>

                    <Text style={style.title}>Ingredients</Text>

                    <View style={{ marginTop: 20, marginBottom: 20 }}>
                            {
                                recipeDetails.ingredients.map(ingredient => (
                                    <Text style={style.text}>
                                        - {ingredient}
                                    </Text>
                                ))
                            }
                            {/* - Lorem Ipsum {'\n'}
                            - is simply dummy text {'\n'}
                            - of the printing and typesetting {'\n'}
                            - industry. Lorem Ipsum {'\n'}
                            - has been the industry's standard {'\n'} */}
                    </View>

                    <Text style={style.title}>Steps</Text>

                    <View style={{ marginTop: 20, marginBottom: 20 }}>
                        {
                            recipeDetails.steps.map(step => (
                                <Text style={style.text}>
                                    - {step}
                                </Text>
                            ))
                        }
                        {/* <Text style={style.text}>
                            1. Lorem Ipsum {'\n'}
                            2. is simply dummy text {'\n'}
                            3. of the printing and typesetting {'\n'}
                            4. industry. Lorem Ipsum {'\n'}
                            5. has been the industry's standard {'\n'}
                        </Text> */}
                    </View>

                    <Text style={style.title}>Video Tutorial</Text>

                    <View style={style.containerVideo}>
                        <Text style={style.textVideo}>Video Tutorial</Text>
                    </View>
                </View>

            </ScrollView>

        </View>
    );
}

export default RecipeDetails;