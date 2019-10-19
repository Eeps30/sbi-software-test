import { ApiTypes } from './api.types';

const INITIAL_STATE = {
  results: []
};

const apiDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ApiTypes.ADD_USER:
      return {
        ...state
      };
    case ApiTypes.GET_USERS:
      return {
        ...state,
        results: action.payload.data
      };
    default:
      return state;
  }
};

export default apiDataReducer;
