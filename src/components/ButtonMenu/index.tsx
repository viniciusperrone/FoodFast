import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { useClickDashboard } from '../../hooks/context';

import { style } from './style';

const ButtonMenu: React.FC = () => {

    const { setOpenDashboard } = useClickDashboard();
    return (
        <TouchableOpacity style={style.container} onPress={() => setOpenDashboard(false)}>
            <Entypo name="menu" size={40} color="black" />
        </TouchableOpacity>
    )
}

export default ButtonMenu;