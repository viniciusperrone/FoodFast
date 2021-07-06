import React, { ReactNode } from 'react';

import { View } from 'react-native';


import { style } from './style';

type Props = {
    children: ReactNode;
}

const Header: React.FC<Props> = ({ children }) => {
  return (
      <View style={style.container}>
          { children }
      </View>
  );
}

export default Header;