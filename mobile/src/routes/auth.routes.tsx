import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../screens/public/Main';

import Home from '../screens/private/Home';
import CategorySelected from '../screens/private/CategorySelected';
import RecipeDetails from '../screens/private/RecipeDetails';
import SearchRecipes from '../screens/private/SearchRecipes';
import Search from '../screens/private/Search';
import Schedule from '../screens/private/Shedule';
import Favorites from '../screens/private/Favorites';
import Invetory from '../screens/private/Invetory';
import InvetorySelected from '../screens/private/InvetorySelected';
import ShoppingList from '../screens/private/ShoppingList';
import Profile from '../screens/private/Profile';

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
                name="CategorySelected"
                component={CategorySelected}
            />
            <Screen
                name="RecipeDetails"
                component={RecipeDetails}
            />
            <Screen
                name="SearchRecipes"
                component={SearchRecipes}
            />
            <Screen
                name="Search"
                component={Search}
            />
            <Screen
                name="Schedule"
                component={Schedule}
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
            <Screen
                name="Profile"
                component={Profile}
            />


        </Navigator>
    );
}

export default AuthRoutes;