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
        height: 100
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
        color: theme.colors.dark_grey,
        alignSelf: 'center',
        marginLeft: 10
    },
    textStar: {
        color: theme.colors.dark_grey,
        fontWeight: 'bold',
        marginLeft: 5,
        alignSelf: 'center'
    }
});