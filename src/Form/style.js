import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,

        borderWidth: 1,
        borderRadius:20,
        borderColor: 'grey',

        backgroundColor: '#fff',
        padding: 5
    },

    formRow: {
        width:"100%",
        marginTop: 10,
        padding: 10,

        
    },

    textName: {
        marginTop: 5,
        marginLeft: 10,
        paddingLeft: 10,
        width:"90%",
        borderRadius: 50,
        backgroundColor: "#F1F3ED",
        height:26,
    },

    textModel: {
        marginTop: 5,
        marginLeft: 10,
        paddingLeft: 10,
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#F1F3ED",
        height:26,
    },

    textQtd: {
        marginTop: 5,
        marginLeft: 10,
        paddingLeft: 10,
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#F1F3ED",
        height:26,
    },

    textUnit: {
        marginTop: 5,
        marginLeft: 10,
        paddingLeft: 10,
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#F1F3ED",
        height:26,
    },

    textDescription: {
        width: '90%',
        height: '150%',
        marginTop: 5,
        marginLeft:10,
        paddingLeft: 10,
        borderRadius: 50,
        backgroundColor: "#F1F3ED",
        height:26,
       
    },

    
    saveButton:{
        backgroundColor: "#681B91",
        height: 40,
        width: '40%',
        borderRadius: 50,
        height:"auto",
        marginTop:30,
        marginBottom: 10,
        marginRight: 5,
        padding:10,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',

        flexDirection: 'row'
    },

    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },

    textProduto:{
        marginTop:20,
    },

    campoObrigatorio: {
        fontWeight: 'bold',
        color: 'red',
        fontSize: 13
    },

    viewErro: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    text: {
        marginLeft: 19
    },

    botoes: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        width: '100%'
    }
})

export default styles