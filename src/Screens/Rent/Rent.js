import React, {useState} from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import styles from "./Rent.Styles";

import { useNavigation } from "@react-navigation/native";


const Rent = (props) => {
    const [RentHour, setHour] = useState(4)
    const navigation = useNavigation()
    const item = navigation.getParam('item', null)

    return(
        <View style={styles.screen}>
            
            <View>

                <View style={styles.row}>
                    <View>
                        <Text style={styles.how}>How many hours do you Rent?</Text>
                    </View>
                    <View style={styles.option}>
                        <Text style={styles.age}>Ages 18 or above</Text>
                        <Pressable 
                            onPress={() => setHour(Math.max(0, RentHour -1))}
                            style={styles.button}
                        >
                            <Text>-</Text>
                        </Pressable>

                        <Text style={styles.hour}>
                            {RentHour}
                        </Text>

                        <Pressable 
                            onPress={() => setHour(Math.min(8, RentHour +1))}
                            style={styles.button}
                        >
                            <Text>+</Text>
                        </Pressable>
                    </View>
                </View>

            </View>

            
            
                <Pressable onPress = {() => 
                        navigation.navigate('')}
                           style={styles.search}>
                    <Text style={styles.search}>Search</Text>
                </Pressable>
            
            
            
        </View>
    )
}

export default Rent