import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { useClickDashboard } from '../../../hooks/app';

import Header from '../../../components/Header';
import Dashboard from '../../../components/Dashboard';
import Button from '../../../components/Button';
import ButtonMenu from '../../../components/ButtonMenu';
import FoodCategory from '../../../components/FoodCategory';
import Footer from '../../../components/Footer';
import Modal from '../../../components/Modal';

import { style } from './style';


const Invetory: React.FC = () => {
    const navigation = useNavigation();
    const { openDashboard } = useClickDashboard();
    const [modal, setModal] = useState(false);

    function handleInvetorySelected() {
        console.log('clickou')
        navigation.navigate('InvetorySelected')
    }
    function handleAddCategory() {
        setModal(!modal);
    }
    return (
        <View style={style.container}>
            <Header>
                <Text style={style.title}>Inventory</Text>
                <ButtonMenu />
            </Header>
            <Button
                title="Add category"
                onPress={handleAddCategory}
                privateButton
            />

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', opacity: openDashboard ? 0 : 1 }}>
                <FoodCategory onPress={handleInvetorySelected}/>
            </View>

            { modal && <Modal inventory={1} /> }

            {/* <Footer>
                <Text style={style.textContent}>
                    No categories
                </Text>
            </Footer> */}

            { openDashboard && <Dashboard /> }

        </View>
    );
}

export default Invetory;