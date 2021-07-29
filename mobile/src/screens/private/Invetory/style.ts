import {
    StyleSheet
} from 'react-native';

import { theme } from '../../../global/styles/global';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 30
    },
    textContent: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: theme.colors.light_grey
    }
});