import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },

    title: {
        alignSelf: 'center'
    },
    
    buttonList: {
        backgroundColor: '#000000',
        height: 40,
        width: '60%',
        borderRadius: 50,
        height:"auto",
        padding:10,
        marginTop: 20,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },


    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    }
})

export default styles