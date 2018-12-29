import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardHeader from './CardHeader';

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
     return ( 
       <Card key={i}>
        <CardHeader 
          title={album.title} 
          artist={album.artist}
          image={album.thumbnail_image}
          />
      </Card>
      )
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
