import {createStore} from 'redux';
import rootReducer from '../reducers';
import {loadState, saveState} from  './localStorage';


const configureStore = () => {

  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState,
  );

  store.subscribe(() => {
    const {albums, photos, users} = store.getState();
    saveState('albums', albums);
    saveState('photos', photos);
  });

}