import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesome5 } from '@expo/vector-icons';

import {
    View,
    Text,
    Image
} from 'react-native';

import Button from '../../../components/Button';
import Background from '../../../components/Background';

import LogoImg from '../../../assets/logo_foodfast.png';

import { style } from './style';
import { theme } from '../../../global/styles/global';

const Main: React.FC = () => {

    const [clikedSignIn, setClikedSignIn] = useState(false);
    const [clikedSignUp, setClikedSignUp] = useState(true);

    const SignIn = () => {
        return (
            <Modal isVisible={clikedSignIn} animationIn="slideInUp">
                <View style={style.containerModal}>
                    <TouchableOpacity style={style.iconButton} onPress={() => setClikedSignUp(false)}>
                        <FontAwesome5 name="arrow-down" size={24} color={theme.colors.light_blue} />
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    };

    const SignUp = () => {
        return (
            <Modal isVisible={clikedSignUp} >
                <View style={style.containerModal}>
                    <TouchableOpacity style={style.iconButton}>
                        <FontAwesome5 name="arrow-down" size={35} color={theme.colors.light_blue}/>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    };

    useEffect(() => {
        console.log(clikedSignUp);
    }, [clikedSignUp])

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
                    <Button title="Sign up" registered onPress={() => setClikedSignIn(true)} />
                    <Button title="Sign in" onPress={() => setClikedSignUp(true)} />
                </View>
                { clikedSignUp ? <SignUp /> : null }

            </View>
        </Background>
    )
}

export default Main;
