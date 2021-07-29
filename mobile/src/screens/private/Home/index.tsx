import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { useNavigation } from '@react-navigation/core';

import { useClickDashboard } from '../../../hooks/context';

import Dashboard from '../../../components/Dashboard';
import Profile from '../../../components/Profile';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ButtonMenu from '../../../components/ButtonMenu';
import FoodSelect from '../../../components/FoodSelect';
import Input from '../../../components/Input';

import { style } from './style';

const Home: React.FC = () => {

    const navigation = useNavigation();

    const { openDashboard, setOpenDashboard } = useClickDashboard();

    function handleProfile(){
        navigation.navigate('Profile');
    }

    return (
        <View style={[style.container, { flexDirection: openDashboard ? 'row' : 'column' }]}>
            <Header>
                <Profile onPress={handleProfile}/>
                <ButtonMenu />
            </Header>

            <Text style={style.title}>FoodFast</Text>

            <Text style={style.subtitle}>Hi viniciusperrone,</Text>

            <Text style={style.text}>What would you like to cook today?</Text>

            <ScrollView style={{
                flex: 1
            }}>
                <View style={{
                    width: '100%',
                    height: '100%',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    marginBottom: 120
                }}>
                    <FoodSelect />
                    <FoodSelect />
                    <FoodSelect />
                    <FoodSelect />
                </View>
            </ScrollView>

            <Footer>
                <Text style={style.textSecondary}>What to search something specific?</Text>

                <Input />

            </Footer>

            {
                openDashboard && <Dashboard />
            }

        </View>
    );
}

export default Home;