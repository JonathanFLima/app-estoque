import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,

        borderWidth: 4,
        borderRadius:30,
        borderColor: 'grey',

        backgroundColor: '#fff',
        padding: 5
    },

    formRow: {
        width:"100%",
        marginTop: 1,
        padding: 10,
    },

    textName: {
        marginTop:10,
        marginLeft: 10,
        paddingLeft: 10,
        width:"90%",
        borderRadius: 50,
        backgroundColor: "#F1F3ED",
        height:26,
    },

    textModel: {
        marginLeft: 10,
        paddingLeft: 10,
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#F1F3ED",
        height:26,
    },

    textQtd: {
        marginLeft: 10,
        paddingLeft: 10,
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#F1F3ED",
        height:26,
    },

    textUnit: {
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
        marginLeft:10,
        paddingLeft: 10,
        borderRadius: 50,
        backgroundColor: "#F1F3ED",
        height:26,
       
    },

    
    buttonNewTask:{
        backgroundColor: "black",
        height: 40,
        width: '60%',
        borderRadius: 50,
        height:"auto",
        marginTop:30,
        padding:10,
        marginTop: 20,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },

    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },

    textProduto:{
        marginTop:20,
    }
})

export default styles