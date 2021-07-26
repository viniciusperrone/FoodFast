import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { style } from './style';

type Props = {
    styleComponent?: Object;
}

const Profile: React.FC<Props> = ({ styleComponent }) => {
  return (
      <View style={[style.container, styleComponent]}>
        <Ionicons
            name="person-outline"
            size={30}
            style={style.user}
        />
      </View>
  );
}

export default Profile;