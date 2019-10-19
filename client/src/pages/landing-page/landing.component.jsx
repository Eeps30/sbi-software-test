import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddUser from '../../components/adduser/adduser.component';
import UserList from '../../components/userlist/userlist.component';
import UserInfo from '../../components/userinfo/userinfo.component';
import './landing.component.css';

const Landing = () => {
  return (
    <Container>
      <Row id='margin'>
        <Col>
          <AddUser />
        </Col>
        <Col>
          <UserList />
        </Col>
        <Col>
          <UserInfo />
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
