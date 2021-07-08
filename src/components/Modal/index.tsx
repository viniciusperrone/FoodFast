import React, { useState } from 'react';
import { View, TouchableOpacity} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

import { AntDesign } from '@expo/vector-icons';

import Button from '../Button';
import Footer from '../Footer';

import { style } from './style';
import { theme } from '../../global/styles/global';

// type Props = {
//     modalAddInventory?: boolean;
//     modalUpdateInvetory?: boolean;


// }

const ModalComponent: React.FC = () => {

    const [visible, setVisible] = useState(true);

    function handleVisible(){
        setVisible(false);
    }
    return (
        <Modal isVisible={visible} backdropColor={theme.colors.icons}>
            <View style={style.container}>
                <TouchableOpacity style={style.iconButton} onPress={handleVisible}>
                    <AntDesign name="close" size={40} color={theme.colors.button} />
                </TouchableOpacity>
                <View style={style.content}/>
                <Footer>
                    <Button title="Add" privateButton />
                </Footer>
            </View>
        </Modal>
    );
}

export default ModalComponent;