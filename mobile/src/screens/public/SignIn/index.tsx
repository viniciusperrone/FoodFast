import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { theme } from '../../../global/styles/global';
import { style } from './style';
import {
  FontAwesome5,
  Feather,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import Button from '../../../components/Button';
import { useAuth } from '../../../hooks/auth';
import { useNavigation } from '@react-navigation/native';

type SignInProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function SignIn({ open = true, setOpen }: SignInProps) {
  const [lineColor, setLineColor] = useState<string>(theme.colors.light_blue);
  const [securityLogin, setSecurityLogin] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const navigation = useNavigation();

  const { user, setUser, reset } = useAuth();

  const controlledInputEmail = user?.email?.length || 0;
  const controlledInputPassword = user?.password?.length || 0;

  function onChange(value: string, key: string) {
    setUser({ ...user, [key]: value });
  }

  function handleCloseModal() {
    setOpen(false);
    setError(false);
    setUser({
      email: '',
      password: '',
    });
  }

  function handleSignIn() {
    if (!user?.email || !user?.password) {
      setError(true);
      return;
    }

    if (controlledInputEmail < 10 || controlledInputPassword < 8) {
      setError(true);
      return;
    }

    setOpen(false);
    setError(false);
    setUser({
      email: '',
      password: '',
    });
    navigation.navigate('Home');
  }

  return (
    <Modal isVisible={open} animationIn="slideInUp">
      <View style={[style.container, { height: 500 }]}>
        <TouchableOpacity style={style.iconButton} onPress={handleCloseModal}>
          <FontAwesome5
            name="arrow-down"
            size={35}
            color={theme.colors.light_blue}
          />
        </TouchableOpacity>
        <Text style={style.textModal}>Enter</Text>

        <View style={style.form}>
          <Text
            style={[
              style.label,
              {
                color:
                  error && controlledInputEmail < 10
                    ? theme.colors.red
                    : theme.colors.dark_grey,
              },
            ]}
          >
            Email
          </Text>
          <View style={style.containerInput}>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color={
                error && controlledInputEmail < 10
                  ? theme.colors.red
                  : theme.colors.black
              }
            />
            <TextInput
              autoCorrect={false}
              underlineColorAndroid="transparent"
              style={style.input}
              defaultValue={user?.email}
              onChangeText={e => onChange(e, 'email')}
            />
          </View>
          <View
            style={[
              style.lineForm,
              {
                backgroundColor:
                  error && controlledInputEmail < 10
                    ? theme.colors.red
                    : lineColor,
                height: 2,
              },
            ]}
          />

          <Text
            style={[
              style.label,
              {
                color:
                  error && controlledInputPassword < 8
                    ? theme.colors.red
                    : theme.colors.dark_grey,
              },
            ]}
          >
            Password
          </Text>
          <View style={style.containerInput}>
            <TouchableOpacity onPress={() => setSecurityLogin(!securityLogin)}>
              {securityLogin ? (
                <Feather
                  name="lock"
                  size={24}
                  color={
                    error && controlledInputPassword < 8
                      ? theme.colors.red
                      : theme.colors.black
                  }
                />
              ) : (
                <Feather
                  name="unlock"
                  size={24}
                  color={
                    error && controlledInputPassword < 8
                      ? theme.colors.red
                      : theme.colors.black
                  }
                />
              )}
            </TouchableOpacity>
            <TextInput
              autoCorrect={false}
              underlineColorAndroid="transparent"
              secureTextEntry={securityLogin}
              style={style.input}
              defaultValue={user?.password}
              onChangeText={e => onChange(e, 'password')}
            />
          </View>
          <View
            style={[
              style.lineForm,
              {
                backgroundColor:
                  error && controlledInputPassword < 8
                    ? theme.colors.red
                    : lineColor,
              },
            ]}
          />
          <Button title="Sign in" registered onPress={handleSignIn} />
          {error && (
            <Text
              style={{
                color: theme.colors.red,
                fontWeight: 'bold',
                alignSelf: 'center',
              }}
            >
              invalid fields
            </Text>
          )}
        </View>
      </View>
    </Modal>
  );
}
