import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { useClickDashboard } from '../../../hooks/context';

import { AntDesign, FontAwesome5, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import ProfileIcon from '../../../components/Profile';
import Header from '../../../components/Header';
import ButtonMenu from '../../../components/ButtonMenu';
import Button from '../../../components/Button';
import Dashboard from '../../../components/Dashboard';

import { style } from './style';
import { theme } from '../../../global/styles/global';

const Profile: React.FC = () => {

    const { openDashboard } = useClickDashboard();
    const navigation = useNavigation();

    const [security, setSecurity] = useState(false);
    const [securityConfirm, setSecurityConfirm] = useState(false);
    const [error, setError] = useState(false);
    const [lineColor, setLineColor] = useState(theme.colors.light_blue);

    const goBack = () => {
        navigation.goBack()
    }
    return (
        <View style={style.container}>
            <Header>
                <AntDesign
                    name="arrowleft"
                    size={35}
                    color={theme.colors.light_blue}
                    style={{
                        marginLeft: 20
                    }}
                    onPress={goBack}
                />
                <Text style={style.title}>Profile</Text>
                <ButtonMenu />
            </Header>
            <View style={style.profile}>
                <ProfileIcon />
                <TouchableOpacity style={style.addIcon}>
                    <Text style={style.textButton}>Add image profile</Text>
                </TouchableOpacity>
            </View>

            <Text>Username</Text>

            <View style={style.containerInput}>
                <Feather name="user" size={24} color={theme.colors.black} />
                <TextInput
                    autoCorrect={false}
                    style={style.input}
                />
            </View>
            <View style={[style.lineForm, { backgroundColor: lineColor }]} />

            <Text>Email</Text>

            <View style={style.containerInput}>
                <MaterialCommunityIcons name="email-outline" size={24} color={theme.colors.black} />
                <TextInput
                    autoCorrect={false}
                    style={style.input}
                />
            </View>
            <View style={[style.lineForm, { backgroundColor: lineColor }]} />

            <Text>Password</Text>

            <View style={style.containerInput}>
                <TouchableOpacity onPress={() => setSecurity(!security)}>
                    {
                        security
                            ? <Feather name="lock" size={24} color={error ? theme.colors.red : theme.colors.black} />
                            : <Feather name="unlock" size={24} color={error ? theme.colors.red : theme.colors.black} />
                    }
                </TouchableOpacity>
                <TextInput
                    autoCorrect={false}
                    style={style.input}
                />
            </View>
            <View style={[style.lineForm, { backgroundColor: lineColor }]} />

            <Text>Confirm Password</Text>

            <View style={style.containerInput}>
                <TouchableOpacity onPress={() => setSecurityConfirm(!securityConfirm)}>
                    {
                        securityConfirm
                            ? <Feather name="lock" size={24} color={error ? theme.colors.red : theme.colors.black} />
                            : <Feather name="unlock" size={24} color={error ? theme.colors.red : theme.colors.black} />
                    }
                </TouchableOpacity>
                <TextInput
                    autoCorrect={false}
                    style={style.input}
                />
            </View>
            <View style={[style.lineForm, { backgroundColor: lineColor }]} />

            <Button privateButton title="Save Change"/>
            {openDashboard && <Dashboard />}
        </View>
    )
}

export default Profile;