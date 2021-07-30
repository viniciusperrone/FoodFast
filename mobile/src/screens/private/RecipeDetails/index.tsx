import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { FontAwesome, AntDesign } from '@expo/vector-icons';

import Header from '../../../components/Header';
import ButtonBack from '../../../components/ButtonBack';

import { style } from './style';
import { theme } from '../../../global/styles/global';

const RecipeDetails: React.FC = () => {

    const [starClick, setStarClick] = useState(true);
    const [shopping, setShopping] = useState(false);

    return (
        <View style={style.container}>
            <Header>
                <ButtonBack />
                <View style={{ flexDirection: 'row', marginRight: 20 }}>
                    <TouchableOpacity style={style.button} onPress={() => setShopping(!shopping)}>
                        <FontAwesome name="shopping-bag" size={24} color={ shopping ? theme.colors.light_blue : theme.colors.white_grey}/>
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

        </View>
    );
}

export default RecipeDetails;