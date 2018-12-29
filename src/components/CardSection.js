import React from 'react';
import { View, Image, Button, Linking } from "react-native";

const CardSection = ({ imageurl, url }) => {
  const { imageStyle} = styles;
  return (
    <View>
      <Image style={imageStyle} source={{ uri: imageurl }}></Image>
      <Button
        onPress={() => {Linking.openURL(url)}}
        title="Buy Now"
        color="#848484"
        accessibilityLabel="Buy Now from Amazon"
      />
    </View>
  )
};

const styles ={
  imageStyle: {
    justifyContent: 'space-around',
    height: 300,
    width: '100%'
  }
}

export default CardSection;