import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { ErrorMessage, Form as FormikForm, withFormik } from 'formik';
import userSchema from './user.validation.schema';
import Button from 'react-bootstrap/Button';
import { addUser, getUsers } from '../../redux/api/api.actions';

const AddUser = ({ values, handleSubmit, handleChange }) => {
  return (
    <>
      <h4>Add User</h4>
      <FormikForm>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            placeholder='Username'
            name='username'
            value={values.username}
            onChange={handleChange}
          />
          <ErrorMessage name='username' component='div'></ErrorMessage>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder='Email'
            name='email'
            value={values.email}
            onChange={handleChange}
          />
          <ErrorMessage name='email' component='div'></ErrorMessage>
        </Form.Group>
        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            placeholder='Full Name'
            name='fullname'
            value={values.fullname}
            onChange={handleChange}
          />
          <ErrorMessage name='fullname' component='div'></ErrorMessage>
        </Form.Group>
        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control
            placeholder='Age'
            name='age'
            value={values.age}
            onChange={handleChange}
          />
          <ErrorMessage name='age' component='div'></ErrorMessage>
        </Form.Group>
        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Control
            placeholder='Location'
            name='location'
            value={values.location}
            onChange={handleChange}
          />
          <ErrorMessage name='location' component='div'></ErrorMessage>
        </Form.Group>
        <Form.Group>
          <Form.Label>Gender</Form.Label>
          <Form.Control
            placeholder='Gender'
            name='gender'
            value={values.gender}
            onChange={handleChange}
          />
          <ErrorMessage name='gender' component='div'></ErrorMessage>
        </Form.Group>
        <Button variant='primary' onClick={() => handleSubmit()}>
          Add User
        </Button>
      </FormikForm>
    </>
  );
};

//wrap AddUser component with withFormik
const FormikAddUser = withFormik({
  mapPropsToValues: () => ({
    username: '',
    email: '',
    fullname: '',
    age: '',
    location: '',
    gender: ''
  }),
  validationSchema: userSchema,
  handleSubmit: (values, { props: { addUser }, resetForm, setSubmitting }) => {
    addUser(values);
    resetForm();
    setSubmitting(false);
  }
})(AddUser);

//pull in needed actions from Redux
export default connect(
  null,
  {
    addUser,
    getUsers
  }
)(FormikAddUser);
