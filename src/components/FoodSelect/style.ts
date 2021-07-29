import {
    StyleSheet
} from 'react-native';
import { theme } from '../../global/styles/global';

export const style = StyleSheet.create({
    container: {
        width: 150,
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
        marginVertical: 10,
        marginHorizontal: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginRight: 10
    },
    icon: {
        color: theme.colors.dark_grey
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.dark_grey
    },
    button: {
        width: 40,
        height: 40,
        backgroundColor: theme.colors.light_orange,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
});