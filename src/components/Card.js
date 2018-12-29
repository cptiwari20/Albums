import React from 'react';
import { View } from 'react-native';

const Card = ({ children}) => (
  <View style={styles.cardStyle}>
    {children}
  </View>
);

const styles = {
  cardStyle: {
    justifyContent: 'space-around',
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    margin: 5
  }
}

export default Card;