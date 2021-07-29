import {
    StyleSheet
} from 'react-native';

import { theme } from '../../../global/styles/global';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white
    },
    buttonGoBack: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: theme.colors.light_grey,
        borderRadius: 10,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.dark_grey
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.black
    }
});