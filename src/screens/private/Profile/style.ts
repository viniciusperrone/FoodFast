import {
    StyleSheet
} from 'react-native';

import { theme } from '../../../global/styles/global';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        paddingTop: 20,
        paddingBottom: 20
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    addIcon: {
        width: 200,
        height: 60,
        borderRadius: 25,
        backgroundColor: theme.colors.light_blue,
        marginRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.white
    },
    label: {
        marginLeft: 30,
        fontSize: 12,
        fontWeight: 'bold',
        color: theme.colors.dark_grey
    },
    containerInput: {
        width: '85%',
        height: 50,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center'
    },
    input: {
        width: '90%',
        height: 50,
        marginLeft: 5,
        color: theme.colors.dark_grey
    },
    lineForm: {
        width: '85%',
        height: 2,
        backgroundColor: theme.colors.light_blue,
        alignSelf: 'center',
        marginBottom: 10
    }
});