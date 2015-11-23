var expect = require('expect');
var should = require('should');
var assert = require('assert');
var request = require('supertest');
var server = require("../bin/www");

var url = 'http://localhost:3000';

describe('Add User', function(){
	it('Adds a new user with user name \'test user\'', function(done){
		var newUser = {
			'username' : 'test user',
			'email' : 'test1@test.com',
			'fullname' : 'Bob Smith',
			'age' : 27,
			'location' : 'San Francisco',
			'gender' : 'Male'
			};
		
		request(url)
		.post('/users/adduser')
		.send(newUser)
		.expect(201)
		.end(function(err, res){
			if(err){
				console.log(JSON.stringify(res));
				throw err;
			}
			done();
		});
	});
});