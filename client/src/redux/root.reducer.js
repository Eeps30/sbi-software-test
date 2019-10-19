import { combineReducers } from 'redux';
import apiDataReducer from './api/api.reducer';
import showUserReducer from './showuser/showuser.reducer';

const rootReducer = combineReducers({
  api: apiDataReducer,
  showUser: showUserReducer
});

export default rootReducer;
