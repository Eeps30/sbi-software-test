import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { getUsers, deleteUser } from '../../redux/api/api.actions';
import { userClicked } from '../../redux/showuser/showuser.actions';

const UserList = ({ getUsers, deleteUser, userClicked, results }) => {
  //fetch list of users from DB once component mounts
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  //create a table using react-bootstrap and render one row
  //for each entry in the results array in redux store
  return (
    <>
      <h4>User List</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Email</th>
            <th>Delete?</th>
          </tr>
        </thead>
        <tbody>
          {results.map((user, index) => {
            return (
              <tr key={user._id}>
                <td onClick={() => userClicked(user._id)}>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Button variant='danger' onClick={() => deleteUser(user._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

//pull in results array from Redux store
const mapStateToProps = ({ api: { results } }) => ({
  results
});

//pull in required actions from Redux
export default connect(
  mapStateToProps,
  {
    getUsers,
    deleteUser,
    userClicked
  }
)(UserList);
