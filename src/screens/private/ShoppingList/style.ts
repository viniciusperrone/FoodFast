import {
    StyleSheet
} from 'react-native';

import { theme } from '../../../global/styles/global';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 30
    },
    textContent: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.text,
        alignSelf: 'center',
        marginTop: 40
    },
    line: {
        borderBottomColor: 'black',
        width: 290,
        borderBottomWidth: 1,
        alignSelf: 'center'
    },
});