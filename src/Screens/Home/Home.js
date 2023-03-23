import React from "react";
import {View, ImageBackground, Text, Pressable} from 'react-native'

import styles from "./Home.Styles";
import Fontisto from 'react-native-vector-icons/Fontisto'

import { useNavigation } from "@react-navigation/native";

const Home = () => {
    
    const navigation = useNavigation()

    return (
        <View>

            <Pressable
                style={styles.searchButton}
                onPress={() => navigation.navigate('SearchDestination')}>
                <Fontisto name="search" size={25} color={'#f15454'} />
                <Text style={styles.searchButtonText}>What are you looking for?</Text>
            </Pressable>

           <ImageBackground 
                source={require('../../../Assets/images/home.jpeg')} 
                style={styles.image}
            >
                <Text style={styles.title}  >
                    Go Find
                </Text>

                <Pressable
                    style={styles.button}
                    onPress={() => console.warn('Explore button clicked!')}
                >
                    <Text style={styles.buttonText}>Explore nearby bikes</Text>
                </Pressable>
                         
           </ImageBackground>
        
        </View>
    );
};
 

export default Home