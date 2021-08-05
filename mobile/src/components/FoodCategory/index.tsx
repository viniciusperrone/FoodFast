import React from 'react';
import {
    View,
    TouchableOpacity,
    TouchableOpacityProps,
    ScrollView,
    Text
} from 'react-native';

import { style } from './style';

const FoodCategory: React.FC<TouchableOpacityProps> = ({ ...rest }) => {

    const Item = () => (
        <View style={style.containerItem}>
            <Text style={style.title}>
                Item
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text style={style.description}>
                    QTY
                </Text>
                <Text style={style.description}>
                    SIZE
                </Text>
                <Text style={style.description}>
                    EXP.D
                </Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text style={style.text}>
                    1
                </Text>
                <Text style={style.text}>
                    200g
                </Text>
                <Text style={style.text}>
                    10/10/2020
                </Text>
            </View>

            <View style={style.line}/>

            <View>

            </View>
        </View>
    )
    return (
        <View
            style={style.container}
        >
            <TouchableOpacity {...rest} style={style.header}>

            </TouchableOpacity>

            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={{width: '100%', height: '100%'}}>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </View>
            </ScrollView>

        </View>
    );
}

export default FoodCategory;