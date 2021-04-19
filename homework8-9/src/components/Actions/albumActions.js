
import * as actions from './actionTypes';

export const albumAdded = (album) =>{
  const key = `${Date.now()}`;
  return {
    type: actions.ALBUM_ADD,
    album,
    key,
  }
}

export const albumUpdated = (key, album) => {

  return {
    type: actions.ALBUM_UPDATE,
    album,
    key
  }
}

export const albumDeleted = (key) => {
  return {
    type: actions.ALBUM_DELETE,
    key,

  }
}