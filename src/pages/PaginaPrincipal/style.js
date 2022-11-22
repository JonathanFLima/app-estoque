import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',

        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontWeight: 'bold',
        fontSize: 34,
        color: '#000',

        textAlign: 'center',

        marginBottom: 50

    },

    buttonCadastro: {
        backgroundColor: 'black',
        padding: 10,

        borderRadius: 15,
        marginBottom: 7
    },

    textButtons: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },


    logo: {
        width: 300,
        height: 300,
    },

    logoCJR: {
        position: 'absolute',
        bottom: 8,
        width: 300,
        height: 60,
    },

    buttonLogout: {
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 30,
        right: 20,
        justifyContent: 'center',
        alignContent: 'center',
        
    },

    iconButtonLogout: {
        color: '#F92E6A',
        fontSize: 23,
    }
})

export default styles