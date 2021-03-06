import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
//import 'semantic-ui-css/semantic.js';

ReactDOM.render(
  <BrowserRouter>
     <App />
  </BrowserRouter>

, document.getElementById('root'));

registerServiceWorker();
