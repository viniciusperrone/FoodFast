import React from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useClickDashboard } from '../../hooks/context';

import { style } from './style';

type Props = TouchableOpacityProps & {
    styleComponent?: Object;
}

const Profile: React.FC<Props> = ({ styleComponent, ...rest }) => {
    const { avatar } = useClickDashboard();
    return (
        <TouchableOpacity
            style={[style.container, styleComponent]}
            {...rest}
        >
            {
                avatar
            }
        </TouchableOpacity>
    );
}

export default Profile;