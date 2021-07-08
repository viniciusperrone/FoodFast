import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../../components/Header';
import ButtonMenu from '../../../components/ButtonMenu';
import Input from '../../../components/Input';

import { style } from './style';
import { theme } from '../../../global/styles/global';

const Favorites: React.FC = () => {
    return (
        <View style={style.container}>
            <Header>
                <Text style={style.title}>Favorites</Text>
                <ButtonMenu onOpen={() => null} />
            </Header>
            <Input />

            <View style={style.line}/>

            <Text style={style.textContent}>No favorite recipes</Text>

        </View>
    );
}

export default Favorites;