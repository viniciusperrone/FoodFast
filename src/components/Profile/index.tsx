import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { style } from './style';

const Profile: React.FC = () => {
  return (
      <View style={style.container}>
        <Ionicons
            name="person-outline"
            size={30}
            style={style.user}
        />
      </View>
  );
}

export default Profile;