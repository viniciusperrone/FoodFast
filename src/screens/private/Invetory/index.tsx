import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { useClickDashboard } from '../../../hooks/context';

import Header from '../../../components/Header';
import Dashboard from '../../../components/Dashboard';
import Button from '../../../components/Button';
import ButtonMenu from '../../../components/ButtonMenu';
import Footer from '../../../components/Footer';
import ModalComponent from '../../../components/Modal';

import { style } from './style';


const Invetory: React.FC = () => {
    const { openDashboard } = useClickDashboard();
    const [modal, setModal] = useState(false);

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

            { modal && <ModalComponent modalInventory={1} />}

            <Footer>
                <Text style={style.textContent}>
                    No categories
                </Text>
            </Footer>

            { openDashboard && <Dashboard />}

        </View>
    );
}

export default Invetory;