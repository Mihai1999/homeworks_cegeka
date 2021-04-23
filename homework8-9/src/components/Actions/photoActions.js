
import * as actions from './actionTypes';

export const PhotoAdded = (Photo) =>{
  const key = `${Date.now()}`;
  return {
    type: actions.PHOTO_ADD,
    Photo,
    key,
  }
}

export const PhotoUpdated = (key, Photo) => {
  console.log("photoUpdate: ", key, Photo)
  return {
    type: actions.PHOTO_UPDATE,
    Photo,
    key
  }
}

export const PhotoDeleted = (key) => {
  return {
    type: actions.PHOTO_DELETE,
    key,

  }
}