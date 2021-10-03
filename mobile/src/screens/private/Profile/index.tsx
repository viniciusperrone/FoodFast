import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';

import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import { useNavigation } from '@react-navigation/core';
import { useClickDashboard } from '../../../hooks/app';
import { useAuth } from '../../../hooks/auth';

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import ProfileIcon from '../../../components/Profile';
import Header from '../../../components/Header';
import ButtonBack from '../../../components/ButtonBack';
import ButtonMenu from '../../../components/ButtonMenu';
import Button from '../../../components/Button';
import Dashboard from '../../../components/Dashboard';

import { style } from './style';
import { theme } from '../../../global/styles/global';

interface UserUpdate{
    avatarIsUpdate: boolean;
    username: string;
    password: string;
    confirm: string;
}

const Profile: React.FC = () => {

    const { openDashboard } = useClickDashboard();
    const { user, setUser } = useAuth();
    const[userUpdate, setUserUpdate] = useState<UserUpdate>({} as UserUpdate);

    const navigation = useNavigation();

    const [security, setSecurity] = useState(true);
    const [securityConfirm, setSecurityConfirm] = useState(true);
    const [error, setError] = useState(false);
    const [lineColor, setLineColor] = useState(theme.colors.light_blue);

    async function ImagePickerCall() {
        if (Constants.platform?.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

            if (status !== 'granted') {
                alert('Precisamos dessa permissão');
                return;
            }

        }

        const data = await ImagePicker.launchImageLibraryAsync({});

        if (data.cancelled) {
            return;
        }
        if (!data.uri) {
            return;
        }

        setUser({
            username: user.username,
            email: user.email,
            password: user.password,
            avatar: data,
            token: user.token
        });
    }

    return (
        <View style={style.container}>
            <Header>
                <ButtonBack />
                <Text style={style.title}>Profile</Text>
                <ButtonMenu />
            </Header>
            <View style={style.profile}>
                <ProfileIcon />
                <TouchableOpacity style={style.addIcon} onPress={ImagePickerCall}>
                    <Text style={style.textButton}>Add image profile</Text>
                </TouchableOpacity>
            </View>

            <View style={style.content}>
                <Text style={style.label}>Username</Text>

                <View style={style.containerInput}>
                    <Feather name="user" size={24} color={theme.colors.black} />
                    <TextInput
                        autoCorrect={false}
                        style={style.input}
                    />
                </View>
                <View style={[style.lineForm, { backgroundColor: lineColor }]} />

                <Text style={style.label}>Email</Text>

                <View style={style.containerInput}>
                    <MaterialCommunityIcons name="email-outline" size={24} color={theme.colors.black} />
                    <TextInput
                        autoCorrect={false}
                        style={style.input}
                    />
                </View>
                <View style={[style.lineForm, { backgroundColor: lineColor }]} />

                <Text style={style.label}>Password</Text>

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
                        secureTextEntry={security}
                    />
                </View>
                <View style={[style.lineForm, { backgroundColor: lineColor }]} />

                <Text style={style.label}>Confirm Password</Text>

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
                        secureTextEntry={securityConfirm}
                    />
                </View>
                <View style={[style.lineForm, { backgroundColor: lineColor }]} />
            </View>



            <Button title="Save Change" registered />
            {openDashboard && <Dashboard />}
        </View>
    )
}

export default Profile;