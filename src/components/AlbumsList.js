import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Card from './Card';
import CardHeader from './CardHeader';
import CardSection from './CardSection';

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
       <View key={i}>
        <Card>
          <CardHeader 
              title={album.title} 
              artist={album.artist}
              image={album.thumbnail_image}
              />
        </Card>
        <CardSection imageurl={album.image} url={album.url}/>
       </View>
      )
    })
   )
 }
  render(){
    return (
      <ScrollView>      
        {this.renderAlbumList()}      
      </ScrollView>
      )
  }
};

export default AlbumsList;
