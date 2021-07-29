import React from 'react';
import { TouchableOpacityProps, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useClickDashboard } from '../../hooks/context';
import { config } from '../../utils/defaultConfig';

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
                    ?
                    <Image
                        source={{
                            uri: avatar.uri
                        }}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 50
                        }}
                    />
                    : config.avatar
            }
        </TouchableOpacity>
    );
}

export default Profile;