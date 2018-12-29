import React from 'react';
import { View, Image, Button } from "react-native";

const CardSection = ({ imageurl }) => {
  const { imageStyle} = styles;
  return (
    <View>
      <Image style={imageStyle} source={{ uri: imageurl }}></Image>
      <Button
        onPress={() => {}}
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