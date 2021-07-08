import {
    StyleSheet
} from 'react-native';
import { theme } from '../../global/styles/global';

export const style = StyleSheet.create({
    container: {
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
    content: {
        flex: 1,
        paddingTop: 20,
    },
    iconButton: {
        width: 50,
        height: 50,
        marginLeft: 40,
        marginTop: -10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: 350,
        height: 50,
        backgroundColor: '#D6D6D6',
        borderRadius: 15,
        paddingLeft: 10,
        alignSelf: 'center',
    },
    footer: {
        bottom: 0,
    }
});