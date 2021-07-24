import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesome5, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import {
    View,
    Text,
    Image,
    TextInput
} from 'react-native';

import Button from '../../../components/Button';
import Background from '../../../components/Background';

import LogoImg from '../../../assets/logo_foodfast.png';

import { style } from './style';
import { theme } from '../../../global/styles/global';

const Main: React.FC = () => {

    const [clikedSignIn, setClikedSignIn] = useState(false);
    const [clikedSignUp, setClikedSignUp] = useState(false);

    const SignIn = () => {
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
                        <Text style={style.label}>Email</Text>
                        <View style={style.containerInput}>
                            <MaterialCommunityIcons name="email-outline" size={24} color="black" />
                            <TextInput style={style.input} />
                        </View>
                        <View style={style.lineForm} />
                        <Text style={style.label}>Password</Text>
                        <View style={style.containerInput}>
                            <Feather name="lock" size={24} color="black" />
                            <TextInput secureTextEntry={true} style={style.input} />
                        </View>
                        <View style={style.lineForm} />
                        <Button title="Sign up" registered />
                    </View>

                </View>
            </Modal>
        );
    };

    const SignUp = () => {
        return (
            <Modal isVisible={clikedSignUp} >
                <View style={[style.containerModal, { height: 600 }]}>
                    <TouchableOpacity style={style.iconButton} onPress={() => setClikedSignUp(false)}>
                        <FontAwesome5 name="arrow-down" size={35} color={theme.colors.light_blue} />
                    </TouchableOpacity>

                    <Text style={style.textModal}>
                        New
                        {'\n'}
                        Account
                    </Text>

                    <View style={style.form}>
                        <Text style={style.label}>Username</Text>
                        <View style={style.containerInput}>
                            <Feather name="user" size={24} color="black" />
                            <TextInput style={style.input} />
                        </View>
                        <View style={style.lineForm} />

                        <Text style={style.label}>Email</Text>
                        <View style={style.containerInput}>
                            <MaterialCommunityIcons name="email-outline" size={24} color="black" />
                            <TextInput style={style.input} />
                        </View>
                        <View style={style.lineForm} />

                        <Text style={style.label}>Password</Text>
                        <View style={style.containerInput}>
                            <Feather name="lock" size={24} color="black" />
                            <TextInput secureTextEntry={true} style={style.input} />
                        </View>
                        <View style={style.lineForm} />

                        <Button title="Sign up" registered />
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

export default Main;
