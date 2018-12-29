import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AlbumsList extends Component {
state = { albums: [] }

 componentWillMount(){
   return fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => {
      return response.json() 
    }).then((body) => {
      return this.setState({ albums: body})
    }).catch(e => this.setState({ albums: [e]}));
 }
 renderAlbumList(){
    return ( 
    this.state.albums.map((album, i) => {
      return <Text key={i}>{album.title}</Text>
    })
   )
 }
  render(){
    return (
      <View>
        {this.renderAlbumList()}      
      </View>
      )
  }
};

export default AlbumsList;
