var expect = require('expect');
var should = require('should');
var assert = require('assert');
var request = require('supertest');
var server = require("../bin/www");
var monk = require('monk');

var url = 'http://localhost:3000';

describe('Update User', function () {
	it('updates the \'test user\' from the database', function (done) {
		var updatedUser = {
			'username' : 'test user',
			'email' : 'test3@test.com', //new email!
			'fullname' : 'Bob Smith',
			'age' : 27,
			'location' : 'San Francisco',
			'gender' : 'Male'
			};
			
		var db = monk('localhost:27017/node_interview_question');
		var collection = db.get('userlist');
		collection.findOne({ 'username': 'test user' }, function (err, doc) {
			var userId = doc._id;
			request(url)
				.put('/users/updateuser/' + userId)
				.send(updatedUser)
				.expect(200)
				.end(function (err, res) {
					if (err) {
						console.log(JSON.stringify(res));
						throw err;
					}
					db.close();
					done();
				});
		});
	});
});