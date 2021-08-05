import {
    StyleSheet
} from 'react-native';

import { theme } from '../../global/styles/global';

export const style = StyleSheet.create({
    container: {
        width: 280,
        height: 500,
        backgroundColor: theme.colors.white,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 8,
    },
    header: {
        width: '100%',
        height: 60,
        backgroundColor: theme.colors.light_blue,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    content: {},
    containerItem: {
        width: '100%',
        height: 120,
        justifyContent: 'space-evenly',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.dark_grey,
        marginLeft: 20
    },
    description: {
        fontSize: 14,
        fontWeight: 'bold',
        color: theme.colors.grey
    },
    text: {
        fontSize: 12,
        color: theme.colors.brown
    },
    line: {
        width: '85%',
        height: 2,
        backgroundColor: theme.colors.brown,
        alignSelf: 'center',
        marginTop: 10
    }
});