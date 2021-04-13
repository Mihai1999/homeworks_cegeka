import React from 'react';
import { Button, Image, Icon, Label, Card } from 'semantic-ui-react';
import './Album.css';
import PropTypes from 'prop-types';



const Album = (props) => {
  const {album, albumPhotos} = props;

  const renderPreviewImages = () => {

    return(
      Object.values(albumPhotos).filter((photo, index) => photo && index < 5)
        .map((photo, index) => {
          return <Image key={index} src={photo.url}/>;
        }) 
        
    );
  }
  const renderTags =() => {
    {console.log(album)}
    if(album == undefined) return;
    if(album.tags == undefined) return;
    return (Object.values(album.tags).map((tagname, index) => {
      return <Label key={index}>{tagname}</Label>
    })
    );
    
  }

  return (
    <Card>
      <Card.Content className="header">
        <Card.Header>{album.name}</Card.Header>
        <Label atached='top right'>
          <Icon name='photo'/>
          {albumPhotos.length}
        </Label>
       
      </Card.Content>
      <Card.Content className="photos-container">
        <Image.Group size="tiny">
          {renderPreviewImages()}
        </Image.Group>
      </Card.Content>
      <Card.Content>
        {renderTags()}
      </Card.Content>
      <Button.Group basic attached="bottom">
        {props.children}
      </Button.Group>
    </Card>
  );
}

Album.propTypes = {
  album: PropTypes.object.isRequired,
  albumPhotos: PropTypes.array.isRequired,
}

export default Album;

