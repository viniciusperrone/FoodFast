import React from 'react';
import {
    Ionicons,
    MaterialCommunityIcons,
    FontAwesome5,
    Entypo
} from '@expo/vector-icons';

import { theme } from '../global/styles/global';

export const categories = [
    {
        id: 1,
        name: "beef",
        icon: <MaterialCommunityIcons name="food-steak" size={30} color={theme.colors.dark_grey} />
    },
    {
        id: 2,
        name: "cakes",
        icon:  <Entypo name="cake" size={30} color={theme.colors.dark_grey} />
    },
    {
        id: 3,
        name: "candy",
        icon: <FontAwesome5 name="candy-cane" size={30} color={theme.colors.dark_grey} />
    },
    {
        id: 4,
        name: "cookies",
        icon: <FontAwesome5 name="cookie-bite" size={30} color={theme.colors.dark_grey} />
    },
    {
        id: 5,
        name: "coffe",
        icon: <FontAwesome5 name="coffee" size={30} color={theme.colors.dark_grey} />
    },
    {
        id: 6,
        name: "chicken",
        icon: <MaterialCommunityIcons name="food-drumstick" size={30} color={theme.colors.dark_grey} />
    },
    {
        id: 7,
        name: "drinks",
        icon: <Entypo name="drink" size={30} color={theme.colors.dark_grey} />
    },
    {
        id: 8,
        name: "fruits",
        icon: <MaterialCommunityIcons name="food-apple" size={30} color={theme.colors.dark_grey} />
    },
    {
        id: 9,
        name: "hamburguers",
        icon: <FontAwesome5 name="hamburger" size={30} color={theme.colors.dark_grey} />
    },
    {
        id: 10,
        name: "pizza",
        icon: <FontAwesome5 name="pizza-slice" size={30} color={theme.colors.dark_grey} />
    },
    {
        id: 11,
        name: "snacks",
        icon: <Ionicons name="fast-food" size={30} color={theme.colors.dark_grey} />
    },
    {
        id: 12,
        name: "vitamins",
        icon: <MaterialCommunityIcons name="food-variant" size={30} color={theme.colors.dark_grey} />
    }
]