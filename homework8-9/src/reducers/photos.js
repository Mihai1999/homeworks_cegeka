import * as actionTypes from '../components/Actions/actionTypes';

export default (state = {}, action) => {

  switch(action.type) {
    case actionTypes.PHOTO_ADD: {
      return {
        [action.key]: action.Photo,
        ...state
      };
    }
    case actionTypes.PHOTO_DELETE: {
        let {[action.key]: photosDeleted, ...restOfphotoss} = state;
      return restOfphotoss;
    }
    case actionTypes.PHOTO_UPDATE: {
      return {
        ...state,
        [action.key]: action.Photo
      }
    }
    default:
      return state;

  }
    

}