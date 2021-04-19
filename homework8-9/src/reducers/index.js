import {combineReducers} from 'redux';
import albums from './album';
import photos from './photos';

const rootReducer = combineReducers({
  albums,
  photos,
});

export default rootReducer;