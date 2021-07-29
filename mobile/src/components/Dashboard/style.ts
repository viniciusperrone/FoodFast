import {
    StyleSheet
} from 'react-native';

import { theme } from '../../global/styles/global';

export const style = StyleSheet.create({
    container: {
        width: '95%',
        height: '94%',
        backgroundColor: theme.colors.light_blue,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        position: 'absolute',
        zIndex: 2,
        right: 0,
        bottom: 0,
        marginBottom: '3%'

    },
    header: {
        width: '100%',
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        color: theme.colors.white
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginHorizontal: 45,
        paddingBottom: 30
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.colors.white,
        marginRight: 20
    },
    textSecondary: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.white,
        marginRight: 15,
    },
    title: {
        fontSize: 15,
        color: theme.colors.white

    },
    subtitle: {
        fontSize: 12,
        fontWeight: '200',
        color: theme.colors.light_grey,
        marginTop: 5,
        alignSelf: 'flex-end'
    }
});