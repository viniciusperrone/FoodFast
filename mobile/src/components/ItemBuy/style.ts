import {
    StyleSheet
} from 'react-native';

import { theme } from '../../global/styles/global';

export const style = StyleSheet.create({
    container: {
        width: 320,
        height: 200,
        backgroundColor: theme.colors.white_grey,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 8,
        alignSelf: 'center',
        marginTop: 30
    },
    header: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
    },
    icon: {
        color: theme.colors.light_orange,
        marginLeft: 15,
        alignSelf: 'center'
    },
    content: {
        flex: 1
    },
    contentChild: {
        flexDirection: 'row',
    },
    button: {
        width: 50,
        height: 30,
        borderWidth: 1.25,
        borderColor: theme.colors.dark_grey,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: theme.colors.dark_grey,
        marginLeft: 20
    },
    subtitle: {
        fontSize: 15,
        color: theme.colors.brown,
        marginLeft: 20
    },
    text: {
        color: theme.colors.dark_grey,
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: 20
    },
    footer: {
        width: '100%',
        height: 50
    }
});