import React, { useState, useEffect } from 'react';

import { RectButton } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { AntDesign, FontAwesome, Ionicons, FontAwesome5 } from '@expo/vector-icons';

import { useClickDashboard } from '../../hooks/context';

import Profile from '../Profile';

import { style } from './style';
import { theme } from '../../global/styles/global';

const Dashboard: React.FC = () => {

    const navigation = useNavigation();

    const { openDashboard, setOpenDashboard } = useClickDashboard();

    const styleComponent = {
        backgroundColor: theme.colors.light_blue,
        borderColor: theme.colors.white
    }

    const handleSearch = () => {
        setOpenDashboard(false);
        navigation.navigate('Search');
    }

    const handleSchedule = () => {
        setOpenDashboard(false);
        navigation.navigate('Schedule');
    }

    const handleFavorites = () => {
        setOpenDashboard(false);
        navigation.navigate('Favorites');
    }

    const handleInventory = () => {
        setOpenDashboard(false);
        navigation.navigate('Invetory');
    }

    const handleMain = () => {
        setOpenDashboard(false);
        navigation.navigate('Main');
    }

    const handleShoppingList = () => {
        setOpenDashboard(false);
        navigation.navigate('ShoppingList');
    }


    const handleProfile = () => {
        setOpenDashboard(false);
        navigation.navigate('Profile');
    }

    return (
        <View style={[style.container, { opacity: openDashboard ? 1 : 0 }]}>
            <View style={style.header}>
                <AntDesign
                    name="arrowright"
                    size={35}
                    color="white"
                    style={{
                        marginLeft: 20
                    }}
                    onPress={() => setOpenDashboard(false)}
                />
                <View style={{ marginLeft: 20 }}>
                    <Text style={style.title}>viniciusperrone@gmail.com</Text>
                    <Text style={style.subtitle}>viniciusperrone</Text>
                </View>

                <Profile styleComponent={styleComponent} onPress={handleProfile}/>
            </View>

            <View style={style.content}>

                <RectButton style={style.button} onPress={handleSearch}>
                    <Text style={style.text}>Recipes Search</Text>
                    <FontAwesome name="search" size={24} style={style.icon} />
                </RectButton>

                <RectButton style={style.button} onPress={handleSchedule}>
                    <Text style={style.text}>Meal Schedule</Text>
                    <FontAwesome5 name="calendar-alt" size={24} style={style.icon} />
                </RectButton>

                <RectButton style={style.button} onPress={handleFavorites}>
                    <Text style={style.text}>Favorite Recipes</Text>
                    <FontAwesome name="star" size={24} style={style.icon} />
                </RectButton>

                <RectButton style={style.button} onPress={handleInventory}>
                    <Text style={style.text}>Food Inventory</Text>
                    <FontAwesome name="th-list" size={24} style={style.icon} />
                </RectButton>

                <RectButton style={style.button} onPress={handleShoppingList}>
                    <Text style={style.text}>Shopping List</Text>
                    <FontAwesome name="shopping-bag" size={24} style={style.icon} />
                </RectButton>

                <RectButton style={style.button} onPress={handleProfile}>
                    <Text style={style.text}>Profile</Text>
                    <Ionicons name="person" size={24} style={style.icon} />
                </RectButton>
            </View>

            <View style={style.footer}>
                <Text style={style.textSecondary}>
                    Log out
                </Text>
                <Text style={style.textSecondary}>
                    |
                </Text>
                <Text style={style.textSecondary}>
                    Settings
                </Text>
                <Ionicons name="ios-settings-sharp" size={24} style={{
                    color: '#fff'
                }}/>
            </View>
        </View>
    );
}

export default Dashboard;