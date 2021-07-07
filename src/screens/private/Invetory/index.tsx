import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../../components/Header';
import Button from '../../../components/Button';
import ButtonMenu from '../../../components/ButtonMenu';
import Footer from '../../../components/Footer';

import { style } from './style';
import { theme } from '../../../global/styles/global';


const Invetory: React.FC = () => {
  return (
      <View style={style.container}>
          <Header>
            <Text style={style.title}>Inventory</Text>
            <ButtonMenu onOpen={() => null}>

            </ButtonMenu>
          </Header>
          <Button title="Add category" privateButton/>

          <Footer>
              <Text style={style.textContent}>
                  No categories
              </Text>
          </Footer>

      </View>
  );
}

export default Invetory;