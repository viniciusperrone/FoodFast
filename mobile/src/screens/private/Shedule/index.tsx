import React from 'react';
import { View, Text } from 'react-native';

import { useClickDashboard } from '../../../hooks/app';

import Header from '../../../components/Header';
import ButtonMenu from '../../../components/ButtonMenu';
import Dashboard from '../../../components/Dashboard';
import Button from '../../../components/Button';
import Footer from '../../../components/Footer';

import { style } from './style';
import { theme } from '../../../global/styles/global';

const Shedule: React.FC = () => {
    const { openDashboard } = useClickDashboard();
    return (
        <View style={style.container}>
            <Header>
                <View style={{ flex: 1 }}>
                    <Text style={style.title}>Today's schedule</Text>
                </View>
                <ButtonMenu />
            </Header>

            {/* <Text style={style.subtitle}>Tuesday 26</Text> */}

            <Text style={style.textContent}>No meal schedule</Text>

            <Footer>
                <Button privateButton title="Create a schedule meal"/>
            </Footer>

            {openDashboard && <Dashboard />}
        </View>
    );
}

export default Shedule;