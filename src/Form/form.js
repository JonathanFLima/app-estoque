import React, { useReducer, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './style';

import { FontAwesome } from '@expo/vector-icons';
import { firebase, storage } from '../config/firebase';


export default function Form({navigation, route, props}) {


    const idUser = props.idUser
    const [nome, setNome] = useState('');
    const [modelo, setModelo] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [peso, setPeso] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imageUpload, setImageUpload] = useState(null)
    const [itemID, setID] = useState(1);
    const [campoVazioNome, setCampoVazioNome] = useState('')
    const [campoVazioQtd, setCampoVazioQtd] = useState('')
    
    function isNull() {
        const isNameEmpty = nome === '' ? true : false
        const isQuantityEmpty = quantidade === '' ? true : false

        if (isNameEmpty || isQuantityEmpty) {
            
            if (isNameEmpty) { setCampoVazioNome("Campo obrigatório!") }
            if (isQuantityEmpty) { setCampoVazioQtd("Campo obrigatório!") }
            
            return
        }
        
        addTask();
    }  

    function addTask() {
        
        try {

            console.log(idUser)
            firebase.firestore().collection(idUser).add({
                nome: nome,
                modelo: modelo,
                quantidade: quantidade,
                peso: peso,
                descricao: descricao,
                itemID: itemID,
                idUser: idUser,
            })
            
            
                alert('Item adicionado com sucesso!')

                setNome('');
                setModelo('');
                setQuantidade('');
                setPeso('');
                setDescricao('');
                setCampoVazioNome('')
                setCampoVazioQtd('')

                
                setID(itemID+1)

            } catch (e) {
                alert(e)
            }       
    }
        

    return (
        <View style={styles.container}>
            <View style={styles.formRow}>
                <View style={styles.viewErro}>
                    <Text style={styles.text}>Nome: </Text>
                    <Text style={styles.campoObrigatorio}>{campoVazioNome}</Text>
                </View>
                <TextInput 
                    style={styles.textName} 
                    placeholder="Nome do produto"
                    onChangeText={setNome}
                    value={nome}
                />
            </View>

            <View style={styles.formRow}>
                <Text style={styles.text}>Modelo:</Text>
                <TextInput 
                    style={styles.textModel}
                    placeholder="Ex: XLR8"
                    onChangeText={setModelo}
                    value={modelo}
                />
            </View>

            <View style={styles.formRow}>
                <View style={styles.viewErro}>
                    <Text style={styles.text}>Quantidade: </Text>
                    <Text style={styles.campoObrigatorio}>{campoVazioQtd}</Text>
                </View>
                <TextInput 
                    style={styles.textQtd}
                    placeholder="Ex: 100"
                    keyboardType="numeric"
                    onChangeText={setQuantidade}
                    value={quantidade}
                />
            </View>

            <View style={styles.formRow}>
                <Text style={styles.text}>Peso p/ unidade (kg):</Text>
                <TextInput 
                    style={styles.textUnit}
                    placeholder="Ex: 0,8"
                    keyboardType="numeric"
                    onChangeText={setPeso}
                    value={peso}
                />
            </View>

            <View style={styles.formRow}>
                <Text style={styles.text}>Descrição do item:</Text>
                <TextInput 
                    style={styles.textDescription}
                    placeholder="Ex: Produto frágil"
                    onChangeText={setDescricao}
                    value={descricao}
                />
            </View>

            <View style={styles.botoes}>
            <TouchableOpacity style={styles.saveButton} onPress={() => { isNull() }}>
                <Text style={styles.textButton}>SALVAR  </Text>
                <FontAwesome name="save" size={25} color="white"></FontAwesome>
            </TouchableOpacity>
            
            </View>
            
        </View>

    )
}

