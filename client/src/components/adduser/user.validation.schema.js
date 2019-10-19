//validation schema for add user form

import * as yup from 'yup';

const userSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().required(),
  fullname: yup.string().required(),
  age: yup.number().required(),
  location: yup.string().required(),
  gender: yup.string().required()
});

export default userSchema;
