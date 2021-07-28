import React from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { style } from './style';

type Props = TouchableOpacityProps & {
    styleComponent?: Object;
}

const Profile: React.FC<Props> = ({ styleComponent, ...rest }) => {
    return (
        <TouchableOpacity
            style={[style.container, styleComponent]}
            {...rest}
        >
            <Ionicons
                name="person-outline"
                size={30}
                style={style.user}
            />
        </TouchableOpacity>
    );
}

export default Profile;