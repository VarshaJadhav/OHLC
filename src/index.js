import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app/app';
import store from './reducers';
import Router from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Provider store={store}>
      <Router />
  </Provider>), document.getElementById('root'));
registerServiceWorker();
