import React from 'react';
import { TouchableOpacityProps, TouchableOpacity, Image } from 'react-native';

import { useAuth } from '../../hooks/auth';
import { config } from '../../utils/defaultConfig';

import { style } from './style';

type Props = TouchableOpacityProps & {
    styleComponent?: Object;
}

const Profile: React.FC<Props> = ({ styleComponent, ...rest }) => {
    const { user } = useAuth();
    return (
        <TouchableOpacity
            style={[style.container, styleComponent]}
            {...rest}
        >
            {
                user.avatar
                    ?
                    <Image
                        source={{
                            uri: user.avatar.uri
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