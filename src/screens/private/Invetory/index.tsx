import React from 'react';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import Header from '../../../components/Header';
import Button from '../../../components/Button';
import ButtonMenu from '../../../components/ButtonMenu';
import Footer from '../../../components/Footer';
import ModalComponent from '../../../components/Modal';

import { style } from './style';
import { theme } from '../../../global/styles/global';

const Invetory: React.FC = () => {
    const navigation = useNavigation();

    function handleAddCategory(){
        navigation.navigate('InvetorySelected');
    }
    return (
        <View style={style.container}>
            <Header>
                <Text style={style.title}>Inventory</Text>
                <ButtonMenu onOpen={() => null}>
                </ButtonMenu>
            </Header>
            <Button title="Add category" privateButton onPress={handleAddCategory} />

            <ModalComponent modalInventory={2} />

            <Footer>
                <Text style={style.textContent}>
                    No categories
                </Text>
            </Footer>

        </View>
    );
}

export default Invetory;