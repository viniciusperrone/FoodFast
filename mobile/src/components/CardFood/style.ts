import {
    StyleSheet
} from 'react-native';

import { theme } from '../../global/styles/global';

export const style = StyleSheet.create({
    container: {
        width: 300,
        height: 150,
        backgroundColor: theme.colors.light_grey,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 8,
        marginTop: 20,
        alignSelf: 'center'

    },
    content: {
        width: '100%',
        height: 100,
        flexDirection: 'row'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.dark_grey,
        marginLeft: 20,
        alignSelf: 'center'
    },
    image: {
        width: 99,
        height: 72,
        borderRadius: 10,
        marginLeft: 20,
        alignSelf: 'flex-end'
    },
    footer: {
        flex: 1,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        height: '100%',
        backgroundColor: theme.colors.light_orange,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        color: theme.colors.white_grey
    },
    iconStar:{
        alignSelf: 'center',
        marginLeft: 10
    },
    textStar: {
        color: theme.colors.dark_grey,
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
        alignSelf: 'center'
    },
});