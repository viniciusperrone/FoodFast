import React from 'react';
import { View, Text } from 'react-native';

import { useClickDashboard } from '../../../hooks/app';

import Header from '../../../components/Header';
import ButtonMenu from '../../../components/ButtonMenu';
import Dashboard from '../../../components/Dashboard';
import Input from '../../../components/Input';

import { style } from './style';

const Favorites: React.FC = () => {

    const { openDashboard } = useClickDashboard();
    return (
        <View style={style.container}>
            <Header>
                <Text style={style.title}>Favorites</Text>
                <ButtonMenu />
            </Header>
            <Input />

            <View style={style.line}/>

            <Text style={style.textContent}>No favorite recipes</Text>

            { openDashboard && <Dashboard />}

        </View>
    );
}

export default Favorites;