import React from "react";
import { View, FlatList } from "react-native";

import Post from "../../Components/Post";
import post from "../../../Assets/data/post";

const SearchResults = (props) => {

    // const { posts } = props;
    
    return(
        <View>
            <FlatList 
                data = {post} 
                renderItem = {({item}) =>
                    <Post 
                        post = {item}
                    />
                }
            />
        </View>
    )
}

export default SearchResults