import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text } from 'react-native';

import { theme } from '../../global/styles/global';
import { style } from './style';

type Props = RectButtonProps & {
    title: string;
    registered?: boolean;
}

const Button: React.FC<Props> = ({ title, registered = false,...rest }) => {
    return (
        <RectButton
            {...rest}
            style={[style.container, { backgroundColor: registered ? theme.colors.button_inside : theme.colors.button_around}]}
        >
            <Text
                style={{
                    color: registered ? theme.colors.button_around : theme.colors.button_inside,
                    fontSize: 18,
                    fontWeight: 'bold'
                }}
            >
                { title }
            </Text>
        </RectButton>
    );
}

export default Button;