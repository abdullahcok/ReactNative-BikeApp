import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Pressable } from "react-native";
import styles from "./SearchDestination.Styles";

import Entypo from 'react-native-vector-icons/Entypo'

import searchResults from "../../../Assets/data/search";
import Rent from "../Rent/Rent";

import { useNavigation  } from "@react-navigation/native";


const SearchDestination = (props) => {
    const [inputText, setInputText] = useState('')
    

    const navigation = useNavigation()

    return(
        <View style={styles.searchBox}>
            <TextInput style={styles.textInput}
                       placeholder="What are you looking for?"
                       value={inputText}
                       onChangeText={text => setInputText(text)}           
            />
            
            <FlatList data={searchResults}
                      renderItem={({item}) => 
                        <Pressable onPress={() => navigation.navigate(Rent)}
                                   style={styles.row}>
                            <View style={styles.icon}>
                                <Entypo name={"chevron-small-right"} size={25} />
                            </View>
                            <Text style={styles.bikeText}>{item.title}</Text>
                        </Pressable>
                    }
            />
        </View>
    )
}

export default SearchDestination