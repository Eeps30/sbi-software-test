import axios from 'axios';
import { ApiTypes } from './api.types';

const addUser = userValues => async dispatch => {
  const newUser = {
    username: userValues.username,
    email: userValues.email,
    fullname: userValues.fullname,
    age: userValues.age,
    location: userValues.location,
    gender: userValues.gender
  };

  await axios.post('http://localhost:3000/users/adduser', newUser);

  axios.get('http://localhost:3000/users/userlist').then(response => {
    dispatch({
      type: ApiTypes.GET_USERS,
      payload: response
    });
  });
};

const getUsers = () => dispatch => {
  axios.get('http://localhost:3000/users/userlist').then(response => {
    dispatch({
      type: ApiTypes.GET_USERS,
      payload: response
    });
  });
};

const deleteUser = userId => async dispatch => {
  await axios.delete(`http://localhost:3000/users/deleteuser/${userId}`);

  axios.get('http://localhost:3000/users/userlist').then(response => {
    dispatch({
      type: ApiTypes.GET_USERS,
      payload: response
    });
  });
};

export { addUser, getUsers, deleteUser };
