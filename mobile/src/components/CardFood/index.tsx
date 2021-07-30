import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { FontAwesome, Feather } from '@expo/vector-icons';
import { style } from './style';

// import { Container } from './styles';

const CardFood: React.FC<TouchableOpacityProps> = ({ ...rest }) => {
    return (
        <View style={style.container}>
            <View style={style.content}>

            </View>
            <View style={style.footer}>
                <TouchableOpacity style={style.button} { ...rest }>
                    <Feather name="arrow-right" size={24} style={style.icon} />
                </TouchableOpacity>

                <FontAwesome name="star" size={24} color="black" style={style.iconStar} />
                <Text style={style.textStar}> 5.0 </Text>

            </View>
        </View>

    );
}

export default CardFood;