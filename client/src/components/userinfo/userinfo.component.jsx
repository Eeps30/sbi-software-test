import React from 'react';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';

const UserInfo = ({ clickedUser, results }) => {
  const currentUser = results.find(user => user._id === clickedUser);
  return (
    <>
      <Card style={{ width: '22rem' }}>
        <Card.Body>
          <Card.Title>User Info</Card.Title>
          <Card.Text>
            Name: <b>{currentUser === undefined ? '' : currentUser.fullname}</b>
          </Card.Text>
          <Card.Text>
            Age: <b>{currentUser === undefined ? '' : currentUser.age}</b>
          </Card.Text>
          <Card.Text>
            Gender: <b>{currentUser === undefined ? '' : currentUser.gender}</b>
          </Card.Text>
          <Card.Text>
            Location:{' '}
            <b>{currentUser === undefined ? '' : currentUser.location}</b>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

//pull in results and clicked user from Redux store
const mapStateToProps = ({ showUser: { clickedUser }, api: { results } }) => ({
  clickedUser,
  results
});

export default connect(
  mapStateToProps,
  null
)(UserInfo);
