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

        elevation: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
});