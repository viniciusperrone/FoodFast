import {
    StyleSheet
} from 'react-native';

import { theme } from '../../global/styles/global';

export const style = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        backgroundColor: theme.colors.white,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
});