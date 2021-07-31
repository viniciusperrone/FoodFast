import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

import { AntDesign } from '@expo/vector-icons';

import Button from '../Button';
import Footer from '../Footer';

import { style } from './style';
import { theme } from '../../global/styles/global';

type Props = {
    inventory?: number;
}

const ModalComponent: React.FC<Props> = ({ inventory }) => {
    const [visible, setVisible] = useState(true);

    const navigation = useNavigation();

    function handleVisible() {
        setVisible(false);
    }

    function handleInvetorySelected() {
        setVisible(false);
        navigation.navigate('InvetorySelected')
    }

    const AddModal = () => (
        <Modal isVisible={visible}>
            <View style={style.container}>
                <TouchableOpacity style={style.iconButton} onPress={handleVisible}>
                    <AntDesign name="close" size={40} color={theme.colors.dark_orange} />
                </TouchableOpacity>

                <View style={style.content}>
                    <TextInput style={style.input} placeholder="What is the name" placeholderTextColor="#000000" />
                    <TextInput style={[style.input, { marginTop: 40 }]} placeholder="What is the icon" placeholderTextColor="#000000" />
                </View>

                <Footer>
                    <Button title="Add" privateButton onPress={handleInvetorySelected}/>
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
                    <Button title="Update" privateButton onPress={handleInvetorySelected}/>
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
                    <TextInput
                        style={style.input}
                        placeholder="What is the name"
                        placeholderTextColor={theme.colors.black}
                    />

                    <TextInput
                        style={[style.input, { marginTop: 30 }]}
                        placeholder="What is the name"
                        placeholderTextColor={theme.colors.black}
                    />

                    <TextInput
                        style={[style.input, { marginTop: 30 }]}
                        placeholder="What is the size"
                        placeholderTextColor={theme.colors.black}
                        keyboardType={'numeric'}
                    />

                    <TextInput
                        style={[style.input, { marginTop: 30 }]}
                        placeholder="What is the expiration date"
                        placeholderTextColor={theme.colors.black}
                    />
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
                inventory === 1 ? <AddModal /> : <></>
            }

            {
                inventory === 2 ? <UpdateModal /> : <></>
            }

            {
                inventory === 3 ? <ItemAddModal /> : <></>
            }

            {
                inventory === 4 ? <ItemUpdateModal /> : <></>
            }
        </>
    );
}

export default ModalComponent;