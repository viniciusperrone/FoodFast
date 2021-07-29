import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { AntDesign } from '@expo/vector-icons';

import Header from '../../../components/Header';
import CardFood from '../../../components/CardFood';

import { style } from './style';
import { theme } from '../../../global/styles/global';

const CategorySelected: React.FC = () => {

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }
    return (
        <View style={style.container}>
            <Header>
                <TouchableOpacity style={style.buttonGoBack} onPress={goBack}   >
                    <AntDesign
                        name="arrowleft"
                        size={35}
                        color={theme.colors.light_blue}
                    />
                </TouchableOpacity>
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
                <CardFood />
            </View>
        </View>
    );
}

export default CategorySelected;