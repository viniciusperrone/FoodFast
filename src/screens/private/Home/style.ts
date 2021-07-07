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
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.text,
        marginLeft: 30
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.title,
        marginLeft: 30
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        color: theme.colors.title,
        marginTop: 15,
        marginLeft: 30
    },
    textSecondary: {
        fontSize: 12,
        fontWeight: 'bold',
        color: theme.colors.title,
        marginLeft: 30,
    },
    containerInput: {
        width: 350,
        height: 60,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    input: {
        width: 290,
        height: 60,
        backgroundColor: theme.colors.card,
        paddingLeft: 15,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20

    },
    button: {
        width: 60,
        height: 60,
        backgroundColor: theme.colors.button,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});