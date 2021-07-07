import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text } from 'react-native';

import { theme } from '../../global/styles/global';
import { style } from './style';

type Props = RectButtonProps & {
    title: string;
    registered?: boolean;
    privateButton?: boolean;
}

const Button: React.FC<Props> = ({
    title,
    registered = false,
    privateButton = false,
    ...rest
}) => {
    return (
        <>
            {
                privateButton
                    ? <RectButton style={[style.container, {
                        backgroundColor: theme.colors.button_create
                    }]}>
                        <Text
                            style={{
                                color: theme.colors.title,
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}
                        >{ title }</Text>
                    </RectButton>
                    : <RectButton
                        {...rest}
                        style={[style.container, { backgroundColor: registered ? theme.colors.button_inside : theme.colors.button_around }]}
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
            }
        </>

    );
}

export default Button;