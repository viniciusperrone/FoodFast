import {
    StyleSheet
} from 'react-native';
import { theme } from '../styles/global';

export const styleButton = StyleSheet.create({
    container: {
        width: 300,
        height: 60,
        borderRadius: 25,
        backgroundColor: theme.colors.button_create,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 15,
    },
    text: {
        color: theme.colors.title,
        fontSize: 18,
        fontWeight: 'bold'
    }
});