import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { AntDesign, FontAwesome, Entypo } from '@expo/vector-icons';

import Header from '../../../components/Header';
import Button from '../../../components/Button';
import Footer from '../../../components/Footer';
import Modal from '../../../components/Modal';

import { style } from './style';
import { theme } from '../../../global/styles/global';

const InvetorySelected: React.FC = () => {
    const navigation = useNavigation();

    const [modal, setModal] = useState(false);

    const goBack = () => {
        navigation.goBack();
    }

    function handleAddItem() {
        setModal(!modal);
    }

    return (
        <View style={style.container}>
            <Header>
                <TouchableOpacity style={style.buttonGoBack} onPress={goBack}   >
                    <AntDesign
                        name="arrowleft"
                        size={35}
                        color={theme.colors.light_blue}
                    />
                </TouchableOpacity>
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