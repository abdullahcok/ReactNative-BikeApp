import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    feed:{
        margin: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 5/3,
        resizeMode: 'contain',
        borderRadius:10,
    },
    title:{
        fontSize: 22,
        marginVertical: 10,
        color: '#2d2d2d',
        fontWeight: 'bold'
    },
    description:{
        lineHeight: 20,
        fontSize: 18
    },
    prices:{
        fontSize: 18,
        marginVertical: 5
    },
    oldPrice:{
        color: '#5b5b5b',
        textDecorationLine: 'line-through'
    },
    price:{
        fontWeight: 'bold',
    },
    totalPrice:{
        textDecorationLine: 'underline'
    }

})

export default styles