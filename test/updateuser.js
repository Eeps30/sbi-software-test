var expect = require('expect');
var should = require('should');
var assert = require('assert');
var request = require('supertest');
var server = require('../bin/www');
var monk = require('monk');

var url = 'http://localhost:3000';

describe('Update User', function() {
  beforeEach(function(done) {
    var newUser = {
      username: 'test user',
      email: 'test1@test.com',
      fullname: 'Bob Smith',
      age: 27,
      location: 'San Francisco',
      gender: 'Male'
    };

    request(url)
      .post('/users/adduser')
      .send(newUser)
      .expect(200)
      .end(function(err, res) {
        if (err) {
          console.log(JSON.stringify(res));
          throw err;
        }
        done();
      });
  });

  afterEach(function(done) {
    var db = monk('localhost:27017/node_interview_question');
    var collection = db.get('userlist');
    collection.findOne({ username: 'test user' }, function(err, doc) {
      var userId = doc._id;
      request(url)
        .delete('/users/deleteuser/' + userId)
        .expect(200)
        .end(function(err, res) {
          if (err) {
            console.log(JSON.stringify(res));
            throw err;
          }
          db.close();
          done();
        });
    });
  });

  it("Verifies that the 'test user' email value from the database has been updated", function(done) {
    var updatedUser = {
      username: 'test user',
      email: 'test3@test.com', //new email!
      fullname: 'Bob Smith',
      age: 27,
      location: 'San Francisco',
      gender: 'Male'
    };

    var db = monk('localhost:27017/node_interview_question');
    var collection = db.get('userlist');
    collection.findOne({ username: 'test user' }, function(err, doc) {
      var userId = doc._id;
      request(url)
        .post('/users/updateuser/' + userId)
        .send(updatedUser)
        .then(() => {
          request(url)
            .get('/users/userlist')
            .end(function(err, res) {
              if (err) {
                console.log(JSON.stringify(res));
                throw err;
              }
              var users = JSON.parse(res.text);
              expect(users[0].email).toBe('test3@test.com');
              done();
            });
        });
    });
  });
});
