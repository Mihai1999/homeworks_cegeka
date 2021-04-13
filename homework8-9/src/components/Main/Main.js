import React from 'react';
import { Switch, Route } from "react-router";
import Login from '../Login';
import * as api from '../../api'
import AlbumList from '../Album/index';
import PhotoList from '../Photo/index';
import {Message} from 'semantic-ui-react';
import Register from '../Register';
import { string } from 'prop-types';


class Main extends React.Component{

  state = {
    albums: {},
    photos: {},
  }

  componentWillMount(){
    const localAlbums = localStorage.getItem('albums');
    const localPhotos = localStorage.getItem('photos');
    const users = localStorage.getItem('users');

    if(localAlbums && localPhotos){
      this.setState({
        albums: JSON.parse(localAlbums),
        photos: JSON.parse(localPhotos),
        users: JSON.parse(users),
      });

    } else{
      this.setState({
        albums: api.getAlbums(),
        photos: api.getPhotos(),
        users: {}
      });
    }

  }

  componentWillUpdate(nextProps, nextState){
    localStorage.setItem(
      'albums', JSON.stringify(nextState.albums)
    );
    
    localStorage.setItem(
      'photos', JSON.stringify(nextState.photos)
    );
  }

  deletePhoto = (key) => {
    let photos = {...this.state.photos};
    delete photos[key];
    this.setState({
      photos
    });

  }

  editPhoto = (key, updatedPhoto) => {
    console.log("flag", key, updatedPhoto);
    let photos = {...this.state.photos};
    photos[key] = updatedPhoto;
    this.setState({
      photos
    });
  }

  createPhoto = (photo) => {
    let photos = {...this.state.photos}
    const timestamp = Date.now()
    photos[`photo-${timestamp}`] = photo;
    this.setState({
      photos
    });
  }

  deleteAlbum = (key) => {
    let albums = {...this.state.albums};
    delete albums[key];
    this.setState({
      albums
    });
  }

  editAlbum = (key, updatedAlbum) => {
    let albums = {...this.state.albums};
    albums[key] = updatedAlbum;
    this.setState({
      albums
    });
  }

  createAlbum = (album) => {
    let albums = {...this.state.albums};
    const timestamp = Date.now();
    albums[`album-${timestamp}`] = album;
    this.setState({
      albums
    });
  }


  render(){

    const {albums, photos} = this.state;

    const albumList = () => 
      <AlbumList 
        albums={albums}
        photos={photos}
        deleteAlbum={this.deleteAlbum}
        editAlbum={this.editAlbum}
        createAlbum={this.createAlbum}
      />;
    
    const photoList = () =>
      <PhotoList
        photos = {photos}
        deletePhoto={this.deletePhoto}
        editPhoto={this.editAlbum}
        createPhoto={this.createPhoto}
      />;

    const error = () => 
      <Message 
        icon="warning circle"
        header="Error"
      
      />;
      
    return (
      <Switch>
        <Route exact path ="/" component={Login}/>
        <Route path="/albums" render={albumList }/>
        <Route path="/photos" render={photoList}/>
        <Route path="/login" render={Login}/>
        <Route path="/register" component={Register}/>
        <Route render={error}/>
        
      </Switch>
    );
  
    
  }


}
export default Main;