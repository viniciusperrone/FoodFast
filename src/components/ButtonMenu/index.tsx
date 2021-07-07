import React from 'react';

import { View, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import { Entypo } from '@expo/vector-icons';

import { style } from './style';

type Props = {
    onOpen: () => void;
}
const ButtonMenu: React.FC<Props> = ({ onOpen }) => (
      <TouchableOpacity style={style.container} onPress={onOpen}>
          <Entypo name="menu" size={40} color="black" />
      </TouchableOpacity>
);

export default ButtonMenu;