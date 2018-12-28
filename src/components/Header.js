import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Header extends Component {
  render(){
    const { viewStyle, textStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>Albums-Project</Text>      
      </View>
      )
  }
};

const styles = {
  viewStyle: {
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.3
  },
  textStyle: {
    fontSize: 30
  }
}

export default Header;