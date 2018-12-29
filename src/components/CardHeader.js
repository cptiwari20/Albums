import React from 'react';
import { View, Text, Image } from "react-native";

const CardHeader = (props) => {
  
  const {thumnailStyle, headerStyle, titleStyle} = styles
  return(
  <View style={headerStyle}>
    <View>
      <Image
      style={thumnailStyle} 
       source={{ uri: props.image}}></Image>
    </View>
    <View >
      <Text style={titleStyle}>{props.title}</Text>
      <Text>{props.artist}</Text>
    </View>
  </View>
  )
};

const styles= {
  thumnailStyle: {
    height: 50,
    width: 50,
    marginRight: 10
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '300'
  }
}

export default CardHeader;