import React, { useRef, useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { Modalize } from 'react-native-modalize';

import Dashboard from '../../../components/Dashboard';
import Profile from '../../../components/Profile';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ButtonMenu from '../../../components/ButtonMenu';
import FoodSelect from '../../../components/FoodSelect';
import Input from '../../../components/Input';

import { style } from './style';

const Home: React.FC = () => {
    const [openBar, setOpenBar] = useState(true);
    const modalizeRef = useRef<Modalize>(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    return (
        <View style={[style.container, { flexDirection: openBar ? 'row' : 'column' }]}>
            <Header>
                <Profile />
                <ButtonMenu onOpen={onOpen} />
            </Header>

            <Text style={style.title}>FoodFast</Text>

            <Text style={style.subtitle}>Hi viniciusperrone,</Text>

            <Text style={style.text}>What would you like to cook today?</Text>

            <ScrollView style={{
                flex: 1
            }}>
                <View style={{
                    width: '100%',
                    height: '100%',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                }}>
                    <FoodSelect />
                    <FoodSelect />
                    <FoodSelect />
                    <FoodSelect />

                </View>
            </ScrollView>

            <Footer>
                <Text style={style.textSecondary}>What to search something specific?</Text>

                <Input />

            </Footer>

            {
                openBar && <Dashboard open={openBar}/>
            }

        </View>
    );
}

export default Home;