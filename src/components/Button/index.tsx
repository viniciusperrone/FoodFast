import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { theme } from '../../global/styles/global';
import { style } from './style';

type Props = TouchableOpacityProps & {
    title: string;
    actionPress?: () => void;
    registered?: boolean;
    privateButton?: boolean;
}

const Button: React.FC<Props> = ({
    title,
    registered = false,
    privateButton = false,
    actionPress,
    ...rest
}) => {
    return (
        <>
            {
                privateButton
                    ? <TouchableOpacity
                        {...rest}
                        style={[style.container, {
                        backgroundColor: theme.colors.dark_orange
                    }]}>
                        <Text
                            style={{
                                color: theme.colors.title,
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}
                        >{ title }</Text>
                    </TouchableOpacity>

                    : <TouchableOpacity
                        {...rest}
                        style={[style.container, { backgroundColor: registered ? theme.colors.light_blue : theme.colors.white }]}
                    >
                        <Text
                            style={{
                                color: registered ? theme.colors.white : theme.colors.light_blue,
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}
                        >
                            { title }
                        </Text>
                    </TouchableOpacity>
            }
        </>

    );
}

export default Button;