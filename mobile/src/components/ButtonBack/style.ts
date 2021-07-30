import {
    StyleSheet
} from 'react-native';

import { theme } from '../../global/styles/global';


export const style = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: theme.colors.light_grey,
        borderRadius: 10,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});