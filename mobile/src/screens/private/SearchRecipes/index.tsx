import React from 'react';
import {
    View,
    Text
} from 'react-native';

import Header from '../../../components/Header';
import ButtonBack from '../../../components/ButtonBack';

import { style } from './style';

const SearchRecipes: React.FC = () => {
    return(
        <View style={style.container}>
            <Header>
                <ButtonBack />
                <View style={{ flex: 1 }}>
                    <Text style={style.title}>Lorem</Text>
                    <Text style={style.subtitle}>Popular recipes</Text>
                </View>
            </Header>
        </View>
    )
}

export default SearchRecipes;