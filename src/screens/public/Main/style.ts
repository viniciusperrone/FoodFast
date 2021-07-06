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
        backgroundColor: '#fff'
    },
    image: {
        flex: 1,
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
    }
});