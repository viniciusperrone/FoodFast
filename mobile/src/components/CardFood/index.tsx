import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps, Image } from 'react-native';

import { FontAwesome, Feather } from '@expo/vector-icons';
import { style } from './style';
import { theme } from '../../global/styles/global';

type Props = TouchableOpacityProps & {
    styleProps?: Object;
    id: number;
    title: string;
    subtitle: string;
    url: string;
}
const CardFood: React.FC<Props> = ({
    styleProps,
    id,
    title,
    subtitle,
    url,
    ...rest }) => {
    return (
        <View style={[style.container, styleProps]}>
            <View style={style.content}>
                <Text style={style.title}>
                    { title }
                    {'\n'}
                    { subtitle }
                </Text>
                <Image
                    style={style.image}
                    source={{
                        uri: url,
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