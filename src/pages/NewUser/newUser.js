import React, { useState } from 'react';
import { KeyboardAvoidingView ,View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { MaterialCommunityIcons } from '@expo/vector-icons'


export default function NewUser({navigation, route}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorRegister, setErrorRegister] = useState('')

    const register = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
        const user = userCredential.user;
        navigation.navigate('Login');
        
        }).catch((error) => {
            setErrorRegister(true)

            const errorCode = error.code;
            const errorMessage = error.message;
                // ..
            });

    }

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Text style={styles.title}>Criar uma conta nova</Text>
            <TextInput
                style={styles.input}
                placeholder='Insira seu e-mail'
                type="text"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />

            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder='Insira uma senha'
                type="text"
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            {errorRegister === true
                    ? <View style={styles.contentAlert}>
                        <MaterialCommunityIcons
                            name="alert-circle"
                            size={21}
                            color="red"
                        />
                            <Text style={styles.warningAlert}>Tipo de e-mail inválido ou senha muito curta.</Text>
                    </View>
                    : <View/>
                }

                {email === '' || password === '' 
                ? 
                    <TouchableOpacity
                        disabled={true}
                        style={styles.buttonRegisterDisabled}
                    >
                        <Text style={styles.textButtonRegister}>Cadastrar</Text>
                    </TouchableOpacity>
                :
                    <TouchableOpacity
                        style={styles.buttonRegisterEnabled}
                        onPress={register}
                    >
                        <Text style={styles.textButtonRegister}>Cadastrar</Text>
                    </TouchableOpacity>
                
                }

                <Text style={styles.login}>Já possui uma conta?</Text>
                <Text>Clique 
                    <Text 
                        style={styles.loginLink}
                        onPress={() => navigation.navigate('Login') }    
                    > aqui para entrar</Text>.
                </Text>
                <View style={{height: 100}}/>
        </KeyboardAvoidingView>
    )
}