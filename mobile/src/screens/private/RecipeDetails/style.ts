import {
    StyleSheet
} from 'react-native';

import { theme } from '../../../global/styles/global';


export const style = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: theme.colors.light_grey,
        borderRadius: 10,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.black,
        marginLeft: 20
    },
    text: {
        fontSize: 18,
        marginLeft: 20,

    },
    containerVideo: {
        width: 300,
        height: 200,
        backgroundColor: theme.colors.dark_grey,
        borderRadius: 20,
        marginTop: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textVideo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.colors.white_grey
    }

});