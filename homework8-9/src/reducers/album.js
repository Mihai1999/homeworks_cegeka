import * as actionTypes from '../components/Actions/actionTypes';

export default (state = {}, action) => {

  switch(action.type) {
    case actionTypes.ALBUM_ADD: {
      return {
        [action.key]: action.album,
        ...state
      };
    }
    case actionTypes.ALBUM_DELETE: {
        let {[action.key]: albumDeleted, ...restOfAlbums} = state;
      return restOfAlbums;
    }
    case actionTypes.ALBUM_ADD: {
      return {
        ...state,
        [action.key]: action.updatedAlbum
      }
    }
    default:
      return state;

  }
    

}