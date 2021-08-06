import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Entypo, AntDesign } from '@expo/vector-icons';


import { style } from './style';
import { theme } from '../../global/styles/global';

const ItemBuy: React.FC = () => {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <AntDesign
                    style={style.icon}
                    name="close"
                    size={28} />
                <Entypo
                    style={style.icon}
                    name="round-brush"
                    size={28}
                />
            </View>
            <View style={style.content}>
                <View style={style.contentChild}>
                    <Text style={[style.title, { marginLeft: 20 }]}>LOREM E IPSUM</Text>
                    <Text style={[style.title, { marginLeft: 50 }]}>QTY</Text>
                    <Text style={[style.title, { marginLeft: 30 }]}>SIZE</Text>
                </View>
                <View style={style.contentChild}>
                    <Text style={[style.subtitle, { fontWeight: 'bold', marginLeft: 60 }]}>Item I</Text>
                    <Text style={[style.subtitle, { marginLeft: 100}]}>1</Text>
                    <Text style={[style.subtitle, { marginLeft: 45 }]}>200</Text>
                </View>
                <View style={[style.contentChild, { flex: 1, alignItems: 'center'}]}>
                    <Text style={[style.subtitle, {fontWeight: 'bold'}]}>Did you buy this item?</Text>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <TouchableOpacity style={style.button}>
                            <Text style={{ color: theme.colors.tea_green}}>
                                Yes
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.button}>
                            <Text style={{ color: theme.colors.light_spanish}}>
                                No
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            <View style={style.footer}>
                <Text style={style.text}>
                    Warning: when pressing yes, your {'\n'}
                    inventory's ingredients will be increased
                </Text>
            </View>
        </View>
    );
}

export default ItemBuy;