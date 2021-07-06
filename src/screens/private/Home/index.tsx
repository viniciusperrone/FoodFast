import React from 'react';

import { View, Text, TextInput, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { FontAwesome5 } from '@expo/vector-icons';

import Profile from '../../../components/Profile';
import Header from '../../../components/Header';
import ButtonMenu from '../../../components/ButtonMenu';
import FoodSelect from '../../../components/FoodSelect';

import { style } from './style';

const Home: React.FC = () => {
    return (
        <View style={style.container}>
            <Header>
                <Profile />
                <ButtonMenu />
            </Header>

            <Text style={style.title}>FoodFast</Text>

            <Text style={style.subtitle}>Hi viniciusperrone</Text>

            <Text style={style.text}>What would you like to cook today?</Text>

            <Text style={style.text}>What to search something specific?</Text>

            <ScrollView style={{
                flex: 1,
                marginBottom: 60
            }}>
                <View style={{
                    width: '100%',
                    height: '100%',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                    <FoodSelect />
                    <FoodSelect />
                    <FoodSelect />
                    <FoodSelect />
                </View>
            </ScrollView>

            <View style={style.containerInput}>
                <TextInput style={style.input} placeholder="search.." />
                <View style={style.button}>
                    <RectButton >
                        <FontAwesome5 name="search" size={20} color="white" />
                    </RectButton>
                </View>
            </View>



        </View>
    );
}

export default Home;