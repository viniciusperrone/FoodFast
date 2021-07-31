import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps, Image } from 'react-native';

import { FontAwesome, Feather } from '@expo/vector-icons';
import { style } from './style';
import { theme } from '../../global/styles/global';

type Props = TouchableOpacityProps & {
    styleProps?: Object;
}
const CardFood: React.FC<Props> = ({ styleProps, ...rest }) => {
    return (
        <View style={[style.container, styleProps]}>
            <View style={style.content}>
                <Text style={style.title}>
                    Best Whole Wheat
                    {'\n'}
                    Chocolate Chippers
                </Text>
                <Image
                    style={style.image}
                    source={{
                        uri: 'https://th.bing.com/th/id/OIP.s8SkoC1nMuNksvxpVFREkQEsDI?pid=ImgDet&rs=1',
                    }}
                />
            </View>
            <View style={style.footer}>
                <TouchableOpacity style={style.button} {...rest}>
                    <Feather name="arrow-right" size={24} style={style.icon} />
                </TouchableOpacity>

                <FontAwesome name="star" size={24} color={styleProps ? theme.colors.gold : theme.colors.dark_grey} style={style.iconStar} />
                <Text style={[style.textStar, { color: styleProps ? theme.colors.gold : theme.colors.dark_grey }]}> 5.0 </Text>

            </View>
        </View>

    );
}

export default CardFood;