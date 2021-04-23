import { Button } from "semantic-ui-react";
import { Segment } from "semantic-ui-react";
import { Grid, Image, Icon } from "semantic-ui-react";
import React from 'react';
import  Photo  from "./Photo";
import { Card} from "semantic-ui-react";
import {WithLightbox, DeleteButton} from '../Common';
import PhotoForm from './PhotoForm';
import * as actions from '../Actions/photoActions';
import {connect} from 'react-redux';


const PhotoList = (props) => {

    const {photos, createPhoto, updatePhoto, deletePhoto} = props;

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
                    //editPhoto={editPhoto}
                  />  
                
                </Button>
                   
                <DeleteButton icon
                  index={key}
                  //objectName={photo.title}
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

const mapStateToProps = (state) => {
  console.log("mapstate: ", state.photos);
  return {
    photos: state.photos,
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePhoto: key => dispatch(actions.PhotoDeleted(key)),
    updatePhoto: (key, photo) => dispatch(actions.PhotoUpdated(key, photo)),
    createPhoto: photo => dispatch(actions.PhotoAdded(photo)),
  }
  
}
export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);