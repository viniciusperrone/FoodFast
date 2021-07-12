import {
    StyleSheet
} from 'react-native';

import { theme } from '../../../global/styles/global';

export const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start'
    },
    containerImg: {
        width: 120,
        height: 120,
        borderRadius: 25,
        marginTop: 70,
        marginLeft: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
    },
    text: {
        color: theme.colors.title_default,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 50,
        marginTop: 10
    },
    containerButtons: {
        marginTop: 230
    },
    containerModal: {
        width: 410,
        height: 500,
        backgroundColor: theme.colors.background,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        position: 'absolute',
        marginLeft: -20,
        marginBottom: -21,
        bottom: 0
    },
    iconButton: {
        width: 50,
        height: 50,
        marginLeft: 40,
        marginTop: -10,
        justifyContent: 'center',
        alignItems: 'center'
    },
});