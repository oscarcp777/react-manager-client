import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const enhancer = composeWithDevTools(
  applyMiddleware(thunk
    ,logger()
  )
);

export default function configureStore (initialState={}) {

  return createStore(
    rootReducer,
    undefined,
    enhancer
  );
}
