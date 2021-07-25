import React, { useState, memo } from 'react';
import Modal from 'react-native-modal';
import { FontAwesome5, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

import Button from '../../../components/Button';
import Background from '../../../components/Background';

import LogoImg from '../../../assets/logo_foodfast.png';

import { style } from './style';
import { theme } from '../../../global/styles/global';

interface UserRegisterData {
    username: string;
    email: string;
    password: string;
}

interface UserLoginData{
    username: string;
    password: string;
}

const Main: React.FC = () => {
    console.log('Geral');

    const [clikedSignIn, setClikedSignIn] = useState(false);
    const [clikedSignUp, setClikedSignUp] = useState(false);

    const navigation = useNavigation();

    const SignIn: React.FC = () => {
        console.log('SignIn');

        const [userLogin, setUserLogin] = useState<UserLoginData>({
            username: "",
            password: ""
        });

        const [lineColor, setLineColor] = useState(theme.colors.light_blue);

        const [securityLogin, setSecurityLogin] = useState(true);

        return (
            <Modal isVisible={clikedSignIn} animationIn="slideInUp">
                <View style={[style.containerModal, { height: 500 }]}>
                    <TouchableOpacity style={style.iconButton} onPress={() => setClikedSignIn(false)}>
                        <FontAwesome5 name="arrow-down" size={35} color={theme.colors.light_blue} />
                    </TouchableOpacity>
                    <Text style={style.textModal}>
                        Enter
                    </Text>

                    <View style={style.form}>
                        <Text style={style.label}>Username</Text>
                        <View style={style.containerInput}>
                            <Feather name="user" size={24} color="black" />
                            <TextInput
                                style={style.input}
                                defaultValue={userLogin.username}
                                onChangeText={e => setUserLogin({
                                    username: e,
                                    password: userLogin.password
                                })}
                            />
                        </View>
                        <View style={[style.lineForm, { backgroundColor: lineColor }]} />

                        <Text style={style.label}>Password</Text>
                        <View style={style.containerInput}>
                            <TouchableOpacity onPress={() => setSecurityLogin(!securityLogin)}>
                                {
                                    securityLogin
                                        ? <Feather name="lock" size={24} color="black" />
                                        : <Feather name="unlock" size={24} color="black" />
                                }
                            </TouchableOpacity>
                            <TextInput
                                secureTextEntry={securityLogin}
                                style={style.input}
                                defaultValue={userLogin.password}
                                onChangeText={e => setUserLogin({
                                    username: userLogin.username,
                                    password: e
                                })}
                            />
                        </View>
                        <View style={[style.lineForm, { backgroundColor: lineColor }]} />
                        <Button title="Sign up" registered />
                    </View>

                </View>
            </Modal>
        );
    };

    const SignUp = () => {

        const [userRegister, setUserRegister] = useState<UserRegisterData>({
            username: "",
            email: "",
            password: "",
        });

        const [securityRegister, setSecurityRegister] = useState(true);
        const [lineColor, setLineColor] = useState(theme.colors.light_blue);
        const [error, setError] = useState(false);

        function handleUserRegister(){
            if(userRegister.username.length >= 8 && userRegister.email.length >= 8 && userRegister.password.length >= 8){
                navigation.navigate('Home');
            }
            else{
                setLineColor(theme.colors.red);
                setError(true);
            }
        }

        return (
            <Modal isVisible={clikedSignUp} >
                <View style={[style.containerModal, { height: 600 }]}>
                    <TouchableOpacity style={style.iconButton} onPress={() => setClikedSignUp(false)
                    }>
                        <FontAwesome5 name="arrow-down" size={35} color={theme.colors.light_blue} />
                    </TouchableOpacity>

                    <Text style={style.textModal}>
                        New
                        {'\n'}
                        Account
                    </Text>

                    <View style={style.form}>
                        <Text style={[style.label, {color: error ? theme.colors.red : theme.colors.dark_grey}]}>Username</Text>
                        <View style={style.containerInput}>
                            <Feather name="user" size={24} color={error ? theme.colors.red : theme.colors.black} />
                            <TextInput
                                style={style.input}
                                defaultValue={userRegister.username}
                                onChangeText={e => setUserRegister({
                                    username: e,
                                    email: userRegister.email,
                                    password: userRegister.password
                                })}
                            />
                        </View>
                        <View style={[style.lineForm, { backgroundColor: lineColor }]} />

                        <Text style={[style.label, {color: error ? theme.colors.red : theme.colors.dark_grey}]}>Email</Text>
                        <View style={style.containerInput}>
                            <MaterialCommunityIcons name="email-outline" size={24} color={error ? theme.colors.red : theme.colors.black} />
                            <TextInput
                                style={style.input}
                                defaultValue={userRegister.email}
                                onChangeText={e => setUserRegister({
                                    username: userRegister.username,
                                    email: e,
                                    password: userRegister.password
                                })} />
                        </View>
                        <View style={[style.lineForm, { backgroundColor: lineColor }]} />

                        <Text style={[style.label, {color: error ? theme.colors.red : theme.colors.dark_grey}]}>Password</Text>
                        <View style={style.containerInput}>
                            <TouchableOpacity onPress={() => setSecurityRegister(!securityRegister)}>
                                {
                                    securityRegister
                                        ? <Feather name="lock" size={24} color={error ? theme.colors.red : theme.colors.black} />
                                        : <Feather name="unlock" size={24} color={error ? theme.colors.red : theme.colors.black} />
                                }
                            </TouchableOpacity>
                            <TextInput
                                secureTextEntry={securityRegister}
                                style={style.input}
                                defaultValue={userRegister.password}
                                onChangeText={e => setUserRegister({
                                    username: userRegister.username,
                                    email: userRegister.email,
                                    password: e
                                })}
                            />
                        </View>
                        <View style={[style.lineForm, { backgroundColor: lineColor }]} />

                        <Button title="Sign up" registered onPress={handleUserRegister}/>
                    </View>
                </View>
            </Modal>
        );
    };

    return (
        <Background>
            <View style={style.container}>

                <View style={style.containerImg}>
                    <Image
                        source={LogoImg}
                        style={style.image}
                    />
                </View>

                <Text style={style.text}>
                    Enjoy this new
                    {'\n'}
                    lifestyle
                </Text>

                <View style={style.containerButtons}>
                    <Button title="Sign up" registered onPress={() => setClikedSignUp(true)} />
                    <Button title="Sign in" onPress={() => setClikedSignIn(true)} />
                </View>
                {clikedSignUp ? <SignUp /> : null}
                {clikedSignIn ? <SignIn /> : null}

            </View>
        </Background>
    )
}

export default memo(Main);
