import React from 'react';
import Nav from '../Nav';
import Main from '../Main'
import configureStore from '../../store/configureStore';
import {Provider} from 'react-redux';



const App = () => {
  const store = configureStore();
  return (
    <Provider store = {store}>
      <div>
        <Nav/>
        <Main/>
    </div>
    </Provider>
    
  );
}

export default App;
