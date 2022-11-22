import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import styles from './style'
import { firebase } from '../../config/firebase';
import { FontAwesome } from '@expo/vector-icons';

export default function ListaItens({route, navigation}) {

const idUser = route.params.idUser;
const [task, setTask] = useState([]);
const taskRef = firebase.firestore().collection(idUser).orderBy("itemID");
const taskRefDelete = firebase.firestore().collection(idUser)
const [searchPhrase, setSearchPhrase] = useState('');

  function deleteTask(id) {
  taskRefDelete.doc(id).delete()
}


  

  useEffect(() => {
    let mounted = true;

  
    taskRef.onSnapshot((query) => {
      
      if (mounted) {
        
        const list = [];
        query.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });
    
        setTask(list);
      }
    });
  
    return () => mounted = false;
  }, []);


    return (
        <View style={styles.container}>

          <TextInput 
            style={styles.searchBar}
            placeholder="Pesquise por um produto..."
            onChangeText={setSearchPhrase}
            value={searchPhrase}
          />
          

            <FlatList
                style={styles.itemList}
                showsVerticalScrollIndicator={false}
                data={task}
                renderItem={({item}) => {

                  if (
                        (searchPhrase === '') || 
                        (item.nome.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, "")))
                     ){
                    return (
                    <View style={styles.items}>
                    <View style={styles.estiloPai}>
                    {/*<View style={styles.testeImagem}>
                      <TouchableOpacity
                        onPress={() => { navigation.navigate("Visualizar imagem") }}
                        activeOpacity={1}
                      >
                          <Image
                            resizeMode='cover'
                            style={styles.imagem}
                            source={require('../../images/logo.png')}
                          />
                      </TouchableOpacity>
                    </View>*/}
                    <View>
                        <Text style={styles.text}>Produto: {item.nome}</Text>
                        <Text style={styles.text}>Modelo: {item.modelo}</Text>
                        <Text style={styles.text}>Quantidade: {item.quantidade} / Peso: {item.peso}kg</Text>
                        <Text style={styles.text}>Descrição do item: {item.descricao}</Text>
                    </View>
                    </View>
                    

                    <View>

                        <TouchableOpacity
                            style={styles.buttonEdit}
                            onPress={() => 
                                navigation.navigate("Detalhe de Itens", {
                                    id: item.id,
                                    nome: item.nome,
                                    modelo: item.modelo,
                                    quantidade: item.quantidade,
                                    peso: item.peso,
                                    descricao: item.descricao,
                                    idUser: route.params.idUser,
                                })
                          }
                        >
                        <View style={styles.viewIcone}>
                          <Text style={styles.textButtonEdit}>EDITAR PRODUTO</Text>
                          <View style={styles.viewEdit}>
                          <FontAwesome name="pencil" size={20} color="white"></FontAwesome>
                        </View>
                          </View> 
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={styles.buttonRemove}
                          onPress={() => deleteTask(item.id)}
                          >
                          <View style={styles.viewIcone}>
                            <Text style={styles.textButtonRemove}>REMOVER PRODUTO</Text>
                            <View style={styles.viewEdit}>
                            <FontAwesome name="trash" size={20} color="white" ></FontAwesome>
                          </View>
                          </View>
                        </TouchableOpacity>
                    </View>
            </View>
                    )}
                }}  
            />
        </View>
    )
}




