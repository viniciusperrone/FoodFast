import {
    StyleSheet
} from 'react-native';

import { theme } from '../../global/styles/global';

export const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        backgroundColor: theme.colors.white,
        position: 'absolute',
        zIndex: 1,
        bottom: 0
    },
});