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
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.dark_grey,
        marginLeft: 30
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.brown,
        marginLeft: 30
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        color: theme.colors.brown,
        marginTop: 15,
        marginLeft: 30
    },
    textSecondary: {
        fontSize: 12,
        fontWeight: 'bold',
        color: theme.colors.brown,
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
        backgroundColor: theme.colors.white_grey,
        paddingLeft: 15,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20

    },
    button: {
        width: 60,
        height: 60,
        backgroundColor: theme.colors.dark_orange,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});