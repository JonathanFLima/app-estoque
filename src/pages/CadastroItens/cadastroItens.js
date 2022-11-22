import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Form from '../../Form/form'
import styles from './style'

export default function CadastroItens({navigation, route}) {

    const idUser = { idUser: route.params.idUser }

    return (
        <View style={styles.container}>
            <Form props={idUser}/>
        </View>
    )
}
