import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { firebase } from '../../config/firebase';
import styles from './style'

export default function ImagemZoom({navigation, route}) {
    return (
    <View style={styles.container}>
        <Image
                style={styles.imagem}
                resizeMode='contain'
                source={require('../../images/logo.png')}
            />
    </View>
    )
    
    /*const [nomeEdit, setNomeEdit] = useState(route.params.nome)
    const [modeloEdit, setModeloEdit] = useState(route.params.modelo)
    const [quantidadeEdit, setQuantidadeEdit] = useState(route.params.quantidade)
    const [pesoEdit, setPesoEdit] = useState(route.params.peso)
    const [descricaoEdit, setDescricaoEdit] = useState(route.params.descricao);
    const idTask = route.params.id;

    function editTask(id) {
        firebase.firestore().collection('Estoque').doc(id).update({
            nome: nomeEdit,
            modelo: modeloEdit,
            quantidade: quantidadeEdit,
            peso: pesoEdit,
            descricao: descricaoEdit,
        })
        navigation.navigate("Listagem de Itens");
    }


    return (
        <View style={styles.container}>
            

            <TouchableOpacity
            style={styles.buttonNewTask}
            onPress={() => { editTask(idTask) }}
            >
                <Text style={styles.textButton}>SALVAR</Text>
            </TouchableOpacity>
        </View>
    )*/
}


    
    


    
