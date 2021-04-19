import * as actionTypes from '../components/Actions/photoActions';

export default (state = {}, action) => {

  switch(action.type) {
    case actionTypes.PHOTO_ADD: {
      return {
        [action.key]: action.photos,
        ...state
      };
    }
    case actionTypes.PHOTO_DELETE: {
        let {[action.key]: photosDeleted, ...restOfphotoss} = state;
      return restOfphotoss;
    }
    case actionTypes.PHOTO_ADD: {
      return {
        ...state,
        [action.key]: action.updatedphotos
      }
    }
    default:
      return state;

  }
    

}