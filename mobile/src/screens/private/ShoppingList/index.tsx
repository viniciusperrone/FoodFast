import React from 'react';
import { View, Text } from 'react-native';

import { useClickDashboard } from '../../../hooks/app';

import Header from '../../../components/Header';
import ButtonMenu from '../../../components/ButtonMenu';
import Dashboard from '../../../components/Dashboard';
import Button from '../../../components/Button';
import Footer from '../../../components/Footer';

import { style } from './style';

const ShoppingList: React.FC = () => {

    const { openDashboard } = useClickDashboard();

    return (
        <View style={style.container}>
            <Header>
                <Text style={style.title}>Shopping List</Text>
                <ButtonMenu />
            </Header>

            <View style={style.line}/>

            <Text style={style.textContent}>
                No items yet
            </Text>
            <Footer>
                <Button title="Add item to buy" privateButton />
            </Footer>

            { openDashboard && <Dashboard /> }

        </View>
    );
}

export default ShoppingList;