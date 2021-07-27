import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

import { AntDesign } from '@expo/vector-icons';

import Button from '../Button';
import Footer from '../Footer';

import { style } from './style';
import { styleButton } from '../../global/components/button';
import { theme } from '../../global/styles/global';

type Props = {
    modalInventory?: number;
}

const ModalComponent: React.FC<Props> = ({ modalInventory }) => {
    const [visible, setVisible] = useState(true);

    const navigation = useNavigation();

    function handleVisible() {
        setVisible(false);
    }

    function handleInvetorySelected(){
        navigation.navigate('InvetorySelected')
    }

    const AddModal = () => (
        <Modal isVisible={visible}>
            <View style={style.container}>
                <TouchableOpacity style={style.iconButton} onPress={handleVisible}>
                    <AntDesign name="close" size={40} color={theme.colors.dark_orange} />
                </TouchableOpacity>

                <View style={style.content}>
                    <TextInput style={style.input} />
                    <TextInput style={[style.input, { marginTop: 40 }]} />
                </View>

                <Footer>
                    <Button title="Add" privateButton />
                </Footer>
            </View>
        </Modal>
    )

    const UpdateModal = () => (
        <Modal isVisible={visible}>
            <View style={style.container}>
                <TouchableOpacity style={style.iconButton} onPress={handleVisible}>
                    <AntDesign name="close" size={40} color={theme.colors.dark_orange} />
                </TouchableOpacity>

                <View style={style.content}>
                    <TextInput style={style.input} />
                    <TextInput style={[style.input, { marginTop: 30 }]} />
                </View>

                <Footer>
                    <TouchableOpacity style={styleButton.container} onPress={handleInvetorySelected}>
                        <Text style={styleButton.text}>Update</Text>
                    </TouchableOpacity>
                </Footer>
            </View>
        </Modal>
    )

    const ItemAddModal = () => (
        <Modal isVisible={visible}>
            <View style={style.container}>
                <TouchableOpacity style={style.iconButton} onPress={handleVisible}>
                    <AntDesign name="close" size={40} color={theme.colors.dark_orange} />
                </TouchableOpacity>

                <View style={style.content}>
                    <TextInput style={style.input} />
                    <TextInput style={[style.input, { marginTop: 30 }]} />
                    <TextInput style={[style.input, { marginTop: 30 }]} />
                    <TextInput style={[style.input, { marginTop: 30 }]} />
                </View>

                <Footer>
                    <Button title="Add" privateButton />
                </Footer>
            </View>
        </Modal>
    );
    const ItemUpdateModal = () => (
        <Modal isVisible={visible}>
            <View style={style.container}>
                <TouchableOpacity style={style.iconButton} onPress={handleVisible}>
                    <AntDesign name="close" size={40} color={theme.colors.dark_orange} />
                </TouchableOpacity>

                <View style={style.content}>
                    <TextInput style={style.input} />
                    <TextInput style={[style.input, { marginTop: 30 }]} />
                    <TextInput style={[style.input, { marginTop: 30 }]} />
                    <TextInput style={[style.input, { marginTop: 30 }]} />
                </View>

                <Footer>
                    <Button title="Update" privateButton />
                </Footer>
            </View>
        </Modal>
    );

    return (
        <>
            {
                modalInventory === 1 ? <AddModal /> : <></>
            }

            {
                modalInventory === 2 ? <UpdateModal /> : <></>
            }

            {
                modalInventory === 3 ? <ItemAddModal /> : <></>
            }

            {
                modalInventory === 4 ? <ItemUpdateModal /> : <></>
            }
        </>
    );
}

export default ModalComponent;