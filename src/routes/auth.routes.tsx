import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../screens/public/Main';
import Home from '../screens/private/Home';
import Favorites from '../screens/private/Favorites';
import Invetory from '../screens/private/Invetory';
import InvetorySelected from '../screens/private/InvetorySelected';
import ShoppingList from '../screens/private/ShoppingList';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: 'transparent'
            }
        }}
    >
        <Screen
            name="Main"
            component={Main}
        />
        <Screen
            name="Home"
            component={Home}
        />
        <Screen
            name="Favorites"
            component={Favorites}
        />
        <Screen
            name="Invetory"
            component={Invetory}
        />
        <Screen
            name="InvetorySelected"
            component={InvetorySelected}
        />
        <Screen
            name="ShoppingList"
            component={ShoppingList}
        />
    </Navigator>
  );
}

export default AuthRoutes;