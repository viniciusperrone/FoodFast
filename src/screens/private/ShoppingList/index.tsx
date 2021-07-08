import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../../components/Header';
import Button from '../../../components/Button';
import ButtonMenu from '../../../components/ButtonMenu';
import Footer from '../../../components/Footer';

import { style } from './style';
import { theme } from '../../../global/styles/global';

const ShoppingList: React.FC = () => {
    return (
        <View style={style.container}>
            <Header>
                <Text style={style.title}>Shopping List</Text>
                <ButtonMenu onOpen={() => null}>

                </ButtonMenu>
            </Header>

            <View style={style.line}/>

            <Text style={style.textContent}>
                No items yet
            </Text>
            <Footer>
                <Button title="Add item to buy" privateButton />
            </Footer>

        </View>
    );
}

export default ShoppingList;