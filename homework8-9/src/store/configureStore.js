import {createStore} from 'redux';
import rootReducer from '../reducers';
import {loadState, saveState} from  './localStorage';


const configureStore = () => {

  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

  );

  store.subscribe(() => {
    const {albums, photos, users} = store.getState();
    console.log("store: ", photos);
    saveState('albums', albums);
    saveState('photos', photos);
  });

  return store;

}
export default configureStore;