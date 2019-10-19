// centralized redux store for client state management
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './root.reducer';

// define intial state for the app
const INITIAL_STATE = {};

// connect all midlleware for use later on in configuring store
const middleware = [thunk];
middleware.push(logger);

// configure store
export const store = createStore(
  rootReducer,
  INITIAL_STATE,
  applyMiddleware(...middleware)
);
