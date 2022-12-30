import {
    StyleSheet
} from 'react-native';

import { theme } from '../../../global/styles/global';

export const style = StyleSheet.create({
    container: {
        width: 410,
        backgroundColor: theme.colors.white,
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
    textModal: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 50,
        marginTop: 10
    },
    form: {
        flex: 1,
        justifyContent: 'center'
    },
    label: {
        marginLeft: 30,
        fontSize: 12,
        fontWeight: 'bold',
        color: theme.colors.dark_grey
    },
    containerInput: {
        width: '85%',
        height: 50,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center'
    },
    input: {
        width: '90%',
        height: 50,
        marginLeft: 5,
        color: theme.colors.dark_grey
    },
    lineForm: {
        width: '85%',
        height: 2,
        backgroundColor: theme.colors.light_blue,
        alignSelf: 'center',
        marginBottom: 10
    }
});