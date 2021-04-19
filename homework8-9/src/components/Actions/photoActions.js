
import * as actions from './actionTypes';

export const PhotoAdded = (Photo) =>{
  const key = `${Date.now()}`;
  return {
    type: actions.Photo_ADD,
    Photo,
    key,
  }
}

export const PhotoUpdated = (key, Photo) => {

  return {
    type: actions.Photo_UPDATE,
    Photo,
    key
  }
}

export const PhotoDeleted = (key) => {
  return {
    type: actions.Photo_DELETE,
    key,

  }
}