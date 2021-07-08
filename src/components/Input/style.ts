import {
    StyleSheet
} from 'react-native';

import { theme } from '../../global/styles/global';

export const style = StyleSheet.create({
    container: {
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