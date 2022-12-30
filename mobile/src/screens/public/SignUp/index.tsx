import { useState } from 'react';
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
import { useAuth } from '@hooks/auth';

interface UserRegisterData {
  username: string;
  email: string;
  password: string;
}

type SignUpProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function SignUp({ open = true, setOpen }: SignUpProps) {
  const [user, setUser] = useState<UserRegisterData>({} as UserRegisterData);
  const [lineColor, setLineColor] = useState(theme.colors.light_blue);
  const [security, setSecurity] = useState(true);
  const [error, setError] = useState(false);

  function onChange(value: string, key: string) {
    setUser({ ...user, [key]: value });
  }

  function handleSignUp() {
    setOpen(!open);
  }

  return (
    <Modal isVisible={open} animationIn="slideInUp">
      <View style={[style.container, { height: 600 }]}>
        <TouchableOpacity
          style={style.iconButton}
          onPress={() => setOpen(false)}
        >
          <FontAwesome5
            name="arrow-down"
            size={35}
            color={theme.colors.light_blue}
          />
        </TouchableOpacity>

        <Text style={style.textModal}>
          New
          {'\n'}
          Account
        </Text>

        <View style={style.form}>
          <Text
            style={[
              style.label,
              {
                color: error ? theme.colors.red : theme.colors.dark_grey,
              },
            ]}
          >
            Username
          </Text>
          <View style={style.containerInput}>
            <Feather
              name="user"
              size={24}
              color={error ? theme.colors.red : theme.colors.black}
            />
            <TextInput
              autoCorrect={false}
              style={style.input}
              defaultValue={user.username}
              onChangeText={e => onChange(e, 'username')}
            />
          </View>
          <View style={[style.lineForm, { backgroundColor: lineColor }]} />

          <Text
            style={[
              style.label,
              {
                color: error ? theme.colors.red : theme.colors.dark_grey,
              },
            ]}
          >
            Email
          </Text>
          <View style={style.containerInput}>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color={error ? theme.colors.red : theme.colors.black}
            />
            <TextInput
              autoCorrect={false}
              style={style.input}
              defaultValue={user.email}
              onChangeText={e => onChange(e, 'email')}
            />
          </View>
          <View style={[style.lineForm, { backgroundColor: lineColor }]} />

          <Text
            style={[
              style.label,
              {
                color: error ? theme.colors.red : theme.colors.dark_grey,
              },
            ]}
          >
            Password
          </Text>
          <View style={style.containerInput}>
            <TouchableOpacity onPress={() => setSecurity(!security)}>
              {security ? (
                <Feather
                  name="lock"
                  size={24}
                  color={error ? theme.colors.red : theme.colors.black}
                />
              ) : (
                <Feather
                  name="unlock"
                  size={24}
                  color={error ? theme.colors.red : theme.colors.black}
                />
              )}
            </TouchableOpacity>
            <TextInput
              autoCorrect={false}
              secureTextEntry={security}
              style={style.input}
              defaultValue={user.password}
              onChangeText={e => onChange(e, 'password')}
            />
          </View>
          <View style={[style.lineForm, { backgroundColor: lineColor }]} />

          <Button title="Sign up" registered onPress={handleSignUp} />
        </View>
      </View>
    </Modal>
  );
}
