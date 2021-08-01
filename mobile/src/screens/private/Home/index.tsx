import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, FlatList } from 'react-native';

import { useClickDashboard } from '../../../hooks/context';
import { useNavigation } from '@react-navigation/core';

import { FontAwesome5, Entypo } from '@expo/vector-icons';

import Dashboard from '../../../components/Dashboard';
import Profile from '../../../components/Profile';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ButtonMenu from '../../../components/ButtonMenu';
import FoodSelect from '../../../components/FoodSelect';
import Input from '../../../components/Input';

import { style } from './style';
import { theme } from '../../../global/styles/global';

import { categories } from '../../../utils/categories';

interface Categories {
    id: number;
    name: string;
    icon: JSX.Element
}

const Home: React.FC = () => {

    const navigation = useNavigation();

    const { openDashboard, setOpenDashboard } = useClickDashboard();

    const [categoriesData, setCategoriesData] = useState<Categories[]>([]);

    function handleProfile() {
        navigation.navigate('Profile');
    }

    useEffect(() => {
        setCategoriesData(categories);
    }, []);

    return (
        <View style={[style.container, { flexDirection: openDashboard ? 'row' : 'column' }]}>
            <Header>
                <Profile onPress={handleProfile} />
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
                    {
                        categoriesData.map(category => (
                            <View key={category.id}>
                                <FoodSelect
                                    category={category.name}
                                    Icon={category.icon}
                                />
                            </View>
                        ))
                    }
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