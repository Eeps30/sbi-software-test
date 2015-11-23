var expect = require('expect');
var should = require('should');
var assert = require('assert');
var request = require('supertest');
var server = require("../bin/www");

var url = 'http://localhost:3000';

describe('Get Users', function(){
	it('Gets all users', function(done){
		request(url)
		.get('/users/userlist')
		.expect(200)
		.end(function(err, res){
			if(err){
				console.log(JSON.stringify(res));
				throw err;
			}
			var users = JSON.parse(res.text);
			expect(users.length).toEqual(1);
			done();
		});
	});
});