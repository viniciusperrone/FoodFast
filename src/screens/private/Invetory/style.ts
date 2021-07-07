import {
    StyleSheet
} from 'react-native';

import { theme } from '../../../global/styles/global';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
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
        color: theme.colors.modal_background
    }
});