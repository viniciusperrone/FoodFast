import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { useAuth } from '../../../hooks/auth';
import { useClickDashboard } from '../../../hooks/app';
import { useNavigation } from '@react-navigation/core';

import Dashboard from '../../../components/Dashboard';
import Profile from '../../../components/Profile';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ButtonMenu from '../../../components/ButtonMenu';
import FoodSelect from '../../../components/FoodSelect';
import Input from '../../../components/Input';

import { style } from './style';

import { categories } from '../../../utils/categories';

interface Categories {
    id: number;
    name: string;
    icon: JSX.Element
}

const Home: React.FC = () => {

    const { user } = useAuth();
    const navigation = useNavigation();

    const { openDashboard } = useClickDashboard();

    const [categoriesData, setCategoriesData] = useState<Categories[]>([]);

    useEffect(() => {
        setCategoriesData(categories);
    }, []);

    return (
        <View style={[style.container, { flexDirection: openDashboard ? 'row' : 'column' }]}>
            <Header>
                <Profile />
                <ButtonMenu />
            </Header>

            <Text style={style.title}>FoodFast</Text>

            <Text style={style.subtitle}>Hi {user.username},</Text>

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
                                    id={category.id}
                                    categoryName={category.name}
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