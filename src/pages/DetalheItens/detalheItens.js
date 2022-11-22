import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { firebase } from '../../config/firebase';
import styles from './style'

export default function DetalheItens({navigation, route}) {

    const idUser = route.params.idUser;
    const [nomeEdit, setNomeEdit] = useState(route.params.nome)
    const [modeloEdit, setModeloEdit] = useState(route.params.modelo)
    const [quantidadeEdit, setQuantidadeEdit] = useState(route.params.quantidade)
    const [pesoEdit, setPesoEdit] = useState(route.params.peso)
    const [descricaoEdit, setDescricaoEdit] = useState(route.params.descricao);
    const idTask = route.params.id;

    function editTask(id) {
        firebase.firestore().collection(idUser).doc(id).update({
            nome: nomeEdit,
            modelo: modeloEdit,
            quantidade: quantidadeEdit,
            peso: pesoEdit,
            descricao: descricaoEdit,
            idUser: idUser,
        })
        navigation.navigate("Listagem", { idUser: idUser });
    }


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textProduto}>Produto:</Text>
                <TextInput
                    style={styles.textName}
                    onChangeText={setNomeEdit}
                    value={nomeEdit}
                />
            </View>

            <View>
                <Text style={styles.textProduto}>Modelo:</Text>
                <TextInput
                    style={styles.textModel}
                    onChangeText={setModeloEdit}
                    value={modeloEdit}
                />
            </View>

            <View>
                <Text style={styles.textProduto}>Quantidade:</Text>
                <TextInput
                    style={styles.textQtd}
                    onChangeText={setQuantidadeEdit}
                    value={quantidadeEdit}
                />
            </View>

            <View>
                <Text style={styles.textProduto}>Peso:</Text>
                <TextInput
                    style={styles.textQtd}
                    onChangeText={setPesoEdit}
                    value={pesoEdit}
                />
            </View>

            <View>
                <Text style={styles.textProduto}>Descrição do item:</Text>
                <TextInput
                    style={styles.textDescription}
                    onChangeText={setDescricaoEdit}
                    value={descricaoEdit}
                />
            </View>

            <TouchableOpacity
            style={styles.buttonNewTask}
            onPress={() => { editTask(idTask) }}
            >
                <Text style={styles.textButton}>SALVAR</Text>
            </TouchableOpacity>
        </View>
    )
}


    
    


    
