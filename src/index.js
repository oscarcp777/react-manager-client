import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './config/App';
import configureStore from './store/configureStore';
import { sessionService } from 'redux-react-session';
import setAuthorizationToken from './lib/setAuthorizationToken'

const store = configureStore();
sessionService.initSessionService(store);
sessionService.loadUser().then(
  user => setAuthorizationToken(user.access_token))
  .catch(err => console.log(err));


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('root'));
