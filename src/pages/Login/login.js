import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import styles from './style';

import firebase from '../../config/firebase';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Login({navigation, route}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorLogin, setErrorLogin] = useState('')

    const loginFirebase = () => {
        const auth = getAuth();

            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
            const user = userCredential.user;
            navigation.navigate('HomeStack', { idUser: user.uid } );
                // ...
            }).catch((error) => {
                setErrorLogin(true);

                const errorCode = error.code;
                const errorMessage = error.message;
  });

    }

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            navigation.replace('HomeStack', { idUser: user.uid} );
            
            const uid = user.uid;
            // ...
          } 
        });
    }, []);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
                <Text style={styles.title}>Entre na sua conta</Text>
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
                    placeholder='Insira sua senha'
                    type="text"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />

                {errorLogin === true
                    ? <View style={styles.contentAlert}>
                        <MaterialCommunityIcons
                            name="alert-circle"
                            size={21}
                            color="red"
                        />
                            <Text style={styles.warningAlert}>E-mail e/ou senha inválidos.</Text>
                    </View>
                    : <View/>
                }

                {email === '' || password === '' 
                ? 
                    <TouchableOpacity
                        disabled={true}
                        style={styles.buttonLoginDisabled}
                    >
                        <Text style={styles.textButtonLogin}>Login</Text>
                    </TouchableOpacity>
                :
                    <TouchableOpacity
                        style={styles.buttonLoginEnabled}
                        onPress={loginFirebase}
                    >
                        <Text style={styles.textButtonLogin}>Login</Text>
                    </TouchableOpacity>
                
                }
                <Text style={styles.registration}>Ainda não tem uma conta?</Text>
                <Text>Crie uma
                    <Text 
                        style={styles.subscribeLink}
                        onPress={() => navigation.navigate('New User')}    
                    > agora</Text>!
                </Text>
                <View style={{height: 100}}/>
        </KeyboardAvoidingView>
    )
}