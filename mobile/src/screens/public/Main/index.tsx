import React, { useState, memo } from 'react';
import Modal from 'react-native-modal';
import {
  FontAwesome5,
  Feather,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { useAuth } from '../../../hooks/auth';

import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import Button from '../../../components/Button';
import Background from '../../../components/Background';
import { SignIn as SignInDefault } from '../SignIn';
import { SignUp as SignUpDefault } from '../SignUp';

import LogoImg from '../../../assets/logo_foodfast.png';

import { style } from './style';
import { theme } from '../../../global/styles/global';

import api from '../../../server/api';

interface UserRegisterData {
  username: string;
  email: string;
  password: string;
}

interface UserLoginData {
  email: string;
  password: string;
}

const Main: React.FC = () => {
  const [clickedSignIn, setClickedSignIn] = useState<boolean>(false);
  const [clickedSignUp, setClickedSignUp] = useState<boolean>(false);

  const navigation = useNavigation();
  //   const { handleSignIn } = useAuth();

  // async function handleUserLogin() {
  //   if (
  //     userLogin.email.trim().length >= 8 &&
  //     userLogin.password.length >= 8
  //   ) {
  //     const response = await api.post('/sessions', {
  //       email: userLogin.email,
  //       password: userLogin.password,
  //     });

  //     if (response) {
  //       if (response.data.user.avatar) {
  //         setUser({
  //           id: response.data.user.id,
  //           username: response.data.user.name,
  //           email: response.data.user.email,
  //           password: userLogin.password,
  //           avatar: response.data.user.avatar,
  //           token: response.data.token,
  //         });
  //       } else {
  //         setUser({
  //           id: response.data.user.id,
  //           username: response.data.user.name,
  //           email: response.data.user.email,
  //           password: userLogin.password,
  //           avatar: user.avatar,
  //           token: response.data.token,
  //         });
  //         console.log(user);
  //       }

  //       api.defaults.headers.authorization = `Bearer ${response.data.token}`;

  //       setClickedSignIn(false);
  //       navigation.navigate('Home');
  //     } else {
  //       setLineColor(theme.colors.red);
  //       setError(true);
  //     }
  //   } else {
  //     setLineColor(theme.colors.red);
  //     setError(true);
  //   }
  // }

  // async function handleUserRegister() {
  //   if (
  //     userRegister.username.length >= 6 &&
  //     userRegister.email.length >= 8 &&
  //     userRegister.password.length >= 8
  //   ) {
  //     const response = await api.post('/users', {
  //       name: userRegister.username,
  //       email: userRegister.email,
  //       password: userRegister.password,
  //     });
  //     if (!response) {
  //       setError(true);
  //       return;
  //     }
  //     setClickedSignUp(false);
  //     setClickedSignIn(true);
  //   } else {
  //     setLineColor(theme.colors.red);
  //     setError(true);
  //   }
  // }

  return (
    <Background>
      <View style={style.container}>
        <View style={style.containerImg}>
          <Image source={LogoImg} style={style.image} />
        </View>

        <Text style={style.text}>
          Enjoy this new
          {'\n'}
          lifestyle
        </Text>

        <View style={style.containerButtons}>
          <Button
            title="Sign up"
            registered
            onPress={() => setClickedSignUp(true)}
          />
          <Button title="Sign in" onPress={() => setClickedSignIn(true)} />
        </View>

        <SignInDefault open={clickedSignIn} setOpen={setClickedSignIn} />
        <SignUpDefault open={clickedSignUp} setOpen={setClickedSignUp} />
      </View>
    </Background>
  );
};

export default memo(Main);
