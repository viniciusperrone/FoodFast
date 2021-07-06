import React from 'react';

import { View } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import { style } from './style';

const ButtonMenu: React.FC = () => {
  return (
      <View style={style.container}>
          <Entypo name="menu" size={40} color="black" />
      </View>
  );
}

export default ButtonMenu;