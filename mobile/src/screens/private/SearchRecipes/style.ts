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
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.colors.dark_grey,
        marginLeft: 50
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.black,
        marginLeft: 50
    }
});