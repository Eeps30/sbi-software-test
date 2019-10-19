import { ShowUserTypes } from './showuser.types';

const INITIAL_STATE = {
  clickedUser: {
    fullname: '',
    age: '',
    gender: '',
    location: ''
  }
};

const showUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShowUserTypes.USER_CLICKED:
      return {
        ...state,
        clickedUser: action.payload
      };
    default:
      return state;
  }
};

export default showUserReducer;
