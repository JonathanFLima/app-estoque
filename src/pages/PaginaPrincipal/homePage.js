import React from 'react';
import { View, Text, Image, TouchableOpacity, BackHandler, Alert } from 'react-native';
import styles from './style';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { getAuth, signOut } from "firebase/auth";

export default function Home({navigation, route}) {

    function logout() {
        const auth = getAuth();
        signOut(auth).then(() => {
          navigation.navigate('Login');
          }).catch((error) => {
          console.log(error)
        });
      }
    
      const idUser = route.params.idUser;
    
      /*function handleBackPress() {
        Alert.alert(
            'Sair',
            'Sair do aplicativo?',
            [
                {
                    text: 'Não',
                    onPress: () => { console.log("Botão cancelar pressionado") },
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    onPress: () => BackHandler.exitApp(),
                },
            ],
            {
                cancelable: false,
            },            
        )
        return true;
      }
      
      componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.handleBackPress)
      }*/


    return (
        <View style={styles.container}>
            
                <Text style={styles.text}>Bem-vindo ao APP-ESTOQUE!</Text>
                <Image
                    style={styles.logo}
                    source={require('../../images/logo.png')}
                />

                <TouchableOpacity style={styles.buttonCadastro} onPress={() => { navigation.navigate("Cadastro de Itens", { idUser: idUser })} }>
                    <Text style={styles.textButtons}>CADASTRO DE ITENS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonCadastro} onPress={() => { navigation.navigate("Listagem", { idUser: idUser })} }>
                    <Text style={styles.textButtons}>LISTAGEM DE ITENS</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonLogout}
                    onPress={() => logout()}
                >
                    <Text style={styles.iconButtonLogout}>
                        <MaterialCommunityIcons
                            name="location-exit"
                            size={23}
                            color='#F92E6A'
                        />
                        
                    </Text>
                </TouchableOpacity>
        </View>
    )
}
