import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        paddingTop: Platform.OS === 'ios' ? 0 : 50
    },

    title: {      
        marginBottom: 60,

        fontSize: 32,
        fontWeight: 'bold',
        color: '#ABABAB'
    },

    input: {
        height: 50,
        width: 300,

        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },

    buttonLoginEnabled: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E916BD',
        borderRadius: 50,
        marginTop: 70
    },

    buttonLoginDisabled: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D8C8C8',
        borderRadius: 50,
        marginTop: 70
    },

    textButtonLogin: {
        color: '#FFF'
    },

    contentAlert: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    warningAlert: {
        paddingLeft: 10,
        color: 'red',
        fontSize: 16
    },

    registration: {
        marginTop: 20,
        color: '#4D5156',
    },

    subscribeLink: {
        color: '#1877F2',
        fontSize: 16
    }



})

export default styles