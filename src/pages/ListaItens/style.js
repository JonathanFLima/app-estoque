import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '95%',
        alignSelf: 'center',
        height: '100%',
    },

    items: {
        backgroundColor: 'white',
        borderRadius: 30,       
        borderWidth: 1,
        borderColor: '#FCE7F8',
        marginBottom: 10,
        padding: 15,
        width: '100%',

    },

    buttonRemove:{
        width: "95%",
        backgroundColor:"#681B91",
        borderRadius: 50,
        height: 40,
        marginTop:10,
        padding:10,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },

    buttonEdit:{
        width: "95%",
        backgroundColor:"#E916BD",
        borderRadius: 50,
        height: 40,
        padding:10,
        marginTop: 20,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },

    textButtonEdit:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },

    textButtonRemove:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    
    text: {
        marginTop: 5,
        fontSize: 21

    },

    /*idStyle: {
        fontWeight: 'bold',
        fontSize: 32
    },

    itemList: {
        flexDirection: 'column-reverse'
    },*/

    imagem: {
        borderWidth: 4,
        borderColor: '#F1F3ED',
        width: 100,
        height: 100,
        marginRight: 10,
        marginTop: 8,
    },

    estiloPai: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    searchBar: {
        marginBottom: 10,
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 10

    },

    viewIcone: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },

    viewEdit: {
        marginLeft:10,
    },


})

export default styles