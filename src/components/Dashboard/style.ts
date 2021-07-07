import {
    StyleSheet
} from 'react-native';

import { theme } from '../../global/styles/global';

export const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: theme.colors.dashboard
    },
    header: {
        width: '100%',
        height: 150,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 30
    },
    content: {
        width: '100%',
        height: 420,
    },
    button: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    icon: {
        marginRight: 50,
        color: theme.colors.title_default
    },
    footer: {
        width: '100%',
        height: 180,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.colors.title_default,
        marginRight: 20
    },
    textSecondary: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.colors.title_default
    },
    title: {
        fontSize: 15,
        color: theme.colors.title_default

    },
    subtitle: {
        fontSize: 12,
        color: theme.colors.text,
        alignSelf: 'flex-end'
    }
});