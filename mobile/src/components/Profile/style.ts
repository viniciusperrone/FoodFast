import {
    StyleSheet
} from 'react-native';

import { theme } from '../../global/styles/global';


export const style = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        backgroundColor: theme.colors.white,
        borderRadius: 60,
        marginLeft: 30,
        borderWidth: 2,
        borderColor: theme.colors.light_blue,
        justifyContent: 'center',
        alignItems: 'center'

    },
    user: {
        color: theme.colors.dark_grey
    }
});