import { createRef } from "react";
import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        justifyContent: 'center'
    },
    title: {
        width:'80%',
        height:'70%',
        fontSize: 90,
        top: 50,
        padding: 30,
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'rgba(0,0,0,0.1)',
        // marginLeft: 25,
    },
     
    searchButton:{
        backgroundColor: '#fff',
        height: 60,
        width: Dimensions.get('screen').width - 20,
        borderRadius: 30,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        top: 30,
        zIndex: 100,
    },
    searchButtonText: {
        color: '#000',
        fontSize: 20,
        marginLeft: 10,
    },

    button:{
        backgroundColor: '#fff',
        width: 240,
        height: 40,
        borderRadius: 30,
        marginTop: 20,
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#000',
        fontSize: 20,
    }

})

export default styles