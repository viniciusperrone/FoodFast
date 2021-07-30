import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { FontAwesome, Entypo } from '@expo/vector-icons';

import Header from '../../../components/Header';
import Button from '../../../components/Button';
import ButtonBack from '../../../components/ButtonBack';
import Footer from '../../../components/Footer';
import Modal from '../../../components/Modal';

import { style } from './style';

const InvetorySelected: React.FC = () => {

    const [modal, setModal] = useState(false);

    function handleAddItem() {
        setModal(!modal);
    }

    return (
        <View style={style.container}>
            <Header>
                <ButtonBack />
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={style.title}>Inventory</Text>
                        <Entypo name="round-brush" size={20} style={style.iconBrush} />
                    </View>
                    <Text style={style.subtitle}>LOREM E IPSUM</Text>
                </View>

                <FontAwesome name="camera" size={40} style={style.iconCam} />
            </Header>

            <Text style={style.textContent}>
                No items
            </Text>

            { modal && <Modal inventory={3} />}

            <Footer>
                <Button title="Add item" privateButton onPress={handleAddItem}/>
            </Footer>
        </View>
    );
}

export default InvetorySelected;