import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import Button from '../../../components/Button';

import LogoImg from '../../../assets/logo_foodfast.png';

import { style } from './style';

const Main: React.FC = () => {
    return (
        <View style={style.container}>

            <View style={style.containerImg}>
                {/* <Image
                    source={LogoImg}
                    style={style.image}
                /> */}
            </View>

            <Text style={style.text}>
                Enjoy this new
                {'\n'}
                lifestyle
            </Text>

            <View style={style.containerButtons}>
                <Button title="Sign up" registered />
                <Button title="Sign in" />
            </View>

        </View>
    )
}

export default Main;
