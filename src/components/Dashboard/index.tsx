import React from 'react';

import { RectButton } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { FontAwesome, Ionicons, FontAwesome5 } from '@expo/vector-icons';

import Profile from '../Profile';

import { style } from './style';

const Dashboard: React.FC = () => {

    const navigation = useNavigation();

    const handleInventory = () => {
        navigation.navigate('Invetory');
    }

    const handleMain = () => {
        navigation.navigate('Main');
    }

    const handleShoppingList = () => {
        navigation.navigate('ShoppingList');
    }

    const handleFavorites = () => {
        navigation.navigate('Favorites');
    }
    return (
        <View style={style.container}>
            <View style={style.header}>
                <View>
                    <Text style={style.title}>viniciusperrone@gmail.com</Text>
                    <Text style={style.subtitle}>viniciusperrone</Text>
                </View>

                <Profile />
            </View>
            <View style={style.content}>

                <RectButton style={style.button}>
                    <Text style={style.text}>Recipes Search</Text>
                    <FontAwesome name="search" size={24} style={style.icon} />
                </RectButton>

                <RectButton style={style.button}>
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

                <RectButton style={style.button}>
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