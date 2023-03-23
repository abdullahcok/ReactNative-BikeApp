import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Post.Styles';


const days = 7;

const Post = (props) => {

  const post = props.post
  const image = props.image

  return (
    <View style={styles.feed}>
      
      <Image
        style={styles.image}
        source={{uri: post.image}}
      />

      <Text style={styles.title}>
        {post.title}
      </Text>

      
      <Text style={styles.description} numberOfLines={2}>
        {post.description}
      </Text>

      
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.price}>  ${post.newPrice} </Text>
        / hour 
      </Text>

      
      <Text style={styles.totalPrice}>${post.newPrice * days} total</Text>

    </View>
  );
};

export default Post;