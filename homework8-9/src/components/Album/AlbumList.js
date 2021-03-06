import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album/Album';
import AlbumForm from './AlbumForm'
import {Card, Button, Icon} from 'semantic-ui-react';
import StatusBar from '../StatusBar'
import {WithLightbox, DeleteButton} from '../Common';
import { render } from 'react-dom';



const AlbumList = (props) =>{
  const {albums, photos, deleteAlbum, editAlbum, createAlbum} = props;

  const getAlbumPhotos = (album) => {
    if(album.photosIds == undefined) return [];
    return album.photosIds
      .filter(id => photos[id])
      .map(id => {
        return photos[id];
      });
  }

  const renderAlbums = () => {
    return (
      
      Object.keys(albums)
        .map(key => {
          const album = albums[key];
          const albumPhotos = getAlbumPhotos(album);

          return (
            
            <Album
              key={key}
              album={album}
              albumPhotos={albumPhotos}>

                <Button icon>
                  <WithLightbox
                    photos={albumPhotos}>
                      <Icon name='play'/>
                  </WithLightbox>
                </Button>

                <Button>
                  <AlbumForm
                    formtype='Edit'
                    index={key}
                    album={album}
                    photos={photos}
                    editAlbum={editAlbum}/>
                </Button>

                <DeleteButton
                  index={key}
                  objectName={album.name}
                  deleteObject={deleteAlbum}/>
            </Album>
            
          );
          
        })
        
    );

  }

  return (
    <div>
      <StatusBar title={`${Object.keys(albums).length} Album(s) total`} >
        <AlbumForm
          formType='New'
          photos={photos}
          createAlbum={createAlbum}
        />
      </StatusBar>
      <Card.Group itemsPerRow={4} doubling>
        {renderAlbums()}
        
      </Card.Group>

    </div>
  );

}
export default AlbumList;