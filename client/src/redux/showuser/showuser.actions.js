import { ShowUserTypes } from './showuser.types';

const userClicked = userId => dispatch => {
  dispatch({
    type: ShowUserTypes.USER_CLICKED,
    payload: userId
  });
};

export { userClicked };
