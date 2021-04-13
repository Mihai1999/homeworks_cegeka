import { Button } from "semantic-ui-react";
import { Segment } from "semantic-ui-react";
import { Grid, Image, Icon } from "semantic-ui-react";
import React from 'react';
import  Photo  from "./Photo";
import { Card} from "semantic-ui-react";
import {WithLightbox, DeleteButton} from '../Common';
import PhotoForm from './PhotoForm';


const PhotoList = (props) => {

    const {photos, createPhoto, editPhoto, deletePhoto} = props;

    const renderPhotos = () => {
      return(
        Object.keys(photos)
          .map(key =>{
            const photo = photos[key];

            return (

              <Photo
                key={key}
                photo={photo}
              >
                   
                <Button icon >
                  <PhotoForm
                    formType='edit'
                    index={key}
                    photo={photo}
                    editPhoto={editPhoto}
                  />  
                
                </Button>
                   
                <DeleteButton icon
                  index={key}
                  objectName={photo.title}
                  deleteObject={deletePhoto}
                />

              </Photo>
            )

          })
      );
    }

    return(
      //<Button icon><Icon name='add'/></Button>
      <div>
        <PhotoForm
          formType='add'
          createPhoto={createPhoto}
        />
        <Card.Group itemsPerRow={5} doubling>
          {renderPhotos()}
        </Card.Group>
      </div>
    );

}
export default PhotoList;