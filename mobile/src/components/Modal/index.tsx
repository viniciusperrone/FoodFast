import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import {
    View,
    TouchableOpacity,
    TextInput,
    Text,
    ScrollView
} from 'react-native';
import Modal from 'react-native-modal';

import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';

import Button from '../Button';
import Footer from '../Footer';

import { style } from './style';
import { theme } from '../../global/styles/global';

import { categories } from '../../utils/categories';

type Props = {
    inventory?: number;
    shoppingList?: number;
    mealShedule?: number;
}

interface PropsIconSelected {
    name: string;
    icon: JSX.Element;
}

const ModalComponent: React.FC<Props> = ({ inventory, shoppingList, mealShedule }) => {
    const [visible, setVisible] = useState(true);

    const navigation = useNavigation();

    function handleVisible() {
        setVisible(false);
    }
    function handleInvetorySelected() {
        setVisible(false);
        navigation.navigate('InvetorySelected')
    }

    const AddInventory = () => {
        const [iconAdd, setIconAdd] = useState(false);
        const [iconSelected, setIconSelected] = useState({} as PropsIconSelected);


        function handleIconSelected() {
            setIconAdd(true)
        }

        function closeIconSelected() {
            setIconAdd(false);
        }

        function AddIcon(name: string, icon: JSX.Element) {
            setIconSelected({
                name: name,
                icon: icon
            })
        }
        return (
            <>
                {
                    iconAdd
                        ?
                        <Modal isVisible={iconAdd}>
                            <View style={style.container}>
                                <Ionicons
                                    style={[style.iconButton, { marginTop: 10 }]}
                                    name="ios-arrow-back-sharp"
                                    size={40}
                                    color={theme.colors.dark_orange}
                                    onPress={closeIconSelected}
                                />
                                <ScrollView style={{
                                    flex: 1
                                }}>
                                    <View>
                                        {categories.map(item => (
                                            <TouchableOpacity

                                                style={[
                                                    style.input,
                                                    {
                                                        flexDirection: 'row',
                                                        marginTop: 20,
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        paddingLeft: 20,
                                                        paddingRight: 20
                                                    }
                                                ]}

                                                key={item.id}
                                                onPress={() => AddIcon(item.name, item.icon)}
                                            >
                                                {
                                                    item.icon
                                                }
                                                <Text>
                                                    {item.name}
                                                </Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>

                                </ScrollView>
                            </View>
                        </Modal>
                        :
                        <Modal isVisible={visible}>
                            <View style={style.container}>
                                <TouchableOpacity style={style.iconButton} onPress={handleVisible}>
                                    <AntDesign name="close" size={40} color={theme.colors.dark_orange} />
                                </TouchableOpacity>

                                <View style={style.content}>
                                    <TextInput style={style.input} placeholder="What is the name" placeholderTextColor="#000000" />
                                    {
                                        iconSelected
                                            ?
                                            iconSelected
                                            :
                                            <View
                                                style={[
                                                    style.input,
                                                    {
                                                        marginTop: 30,
                                                        flexDirection: 'row',
                                                        justifyContent: 'space-between'
                                                    }
                                                ]}
                                            >
                                                <Text style={{ alignSelf: 'center' }}>What is the icon</Text>
                                                <MaterialIcons style={{ alignSelf: 'center', marginRight: 10 }} name="arrow-drop-down" size={30} color="black" onPress={handleIconSelected} />
                                            </View>
                                    }
                                </View>

                                <Footer>
                                    <Button title="Add" privateButton onPress={handleInvetorySelected} />
                                </Footer>
                            </View>
                        </Modal>
                }

            </>
        );
    }
    const UpdateInventory = () => (
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
                    <Button title="Update" privateButton onPress={handleInvetorySelected} />
                </Footer>
            </View>
        </Modal>
    );
    const AddItemInventory = () => (
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
    const UpdateItemInventory = () => (
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

    const AddShoppingList = () => (
        <>
        </>
    );
    const UpdateShoppingList = () => (
        <>
        </>
    );

    const AddMealSchedule = () => {
        return (
            <Modal isVisible={visible}>
                <View style={style.container}>
                    <TouchableOpacity style={style.iconButton} onPress={handleVisible}>
                        <AntDesign name="close" size={40} color={theme.colors.dark_orange} />
                    </TouchableOpacity>

                    <View style={style.content}>
                        <View style={style.input}>
                            <Text>
                                Select a meal to cook {'\n'}
                                from your favorite recipes
                            </Text>
                        </View>
                        <View style={style.input}>
                            <Text>
                                When it happen
                            </Text>
                        </View>
                        <View style={style.input}>
                            <Text>
                                Add a note
                            </Text>
                        </View>

                    </View>

                    <Footer>
                        <Button title="Add" privateButton onPress={handleInvetorySelected} />
                    </Footer>
                </View>
            </Modal>
        );
    }
    const UpdateMealShedule = () => (
        <>
        </>
    );

    return (
        <>
            {
                inventory === 1 ? <AddInventory /> : null
            }

            {
                inventory === 2 ? <UpdateInventory /> : null
            }

            {
                inventory === 3 ? <AddItemInventory /> : null
            }

            {
                inventory === 4 ? <UpdateItemInventory /> : null
            }

            {
                shoppingList === 1 ? <AddShoppingList /> : null
            }

            {
                shoppingList === 2 ? <UpdateShoppingList /> : null
            }

            {
                mealShedule === 1 ? <AddMealSchedule /> : null
            }

            {
                mealShedule === 2 ? <UpdateMealShedule /> : null
            }
        </>
    );
}

export default ModalComponent;