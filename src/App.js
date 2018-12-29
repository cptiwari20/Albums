import React, {Component} from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import AlbumsList from './components/AlbumsList';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <AlbumsList />
      </View>
    );
  }
}
