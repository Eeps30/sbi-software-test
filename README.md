# Creating a Simple RESTful Web App with Node.js, Express, and MongoDB

A sample project for sbi developer candidates with some basic REST functionality for a user api.

## Getting Started

### Prerequirements

- [Node.js](https://nodejs.org/en/download/)
- [Mongodb](https://www.mongodb.org/downloads#production)

### Preparation

- Clone repository to working directory
- Create folder data in working directory
- run `npm install` in the working directory
- run `mongod --dbpath {working directory}/data` to start up the mongodb
- run `npm start` and browse to http://localhost:3000 to see the simple interface
- run `npm test` to run tests

### To Do

- Make all tests pass consistently
- Add more robust error handling for each route
- add any new tests that can be helpful
- add a modern front end to the api you just fixed. For example, use React, Vue, Angular or Ember to replace the jade server side templates. We do use React so using React will allow us to evaluate your code to the best of our ability, but use whatever Framework/Library you feel most comfortable in.

## Contents

- /public - static directories suchs as /images
- /routes - route files for tutorial project
- /views - views for tutorial project
- /test - mocha integration tests
- README.md - this file
- app.js - central app file for tutorial project
- package.json - package info for tutorial project

## Issues

- please don't hesitate to email [darryl@sbiteam.com](mailto:darryl@sbiteam.com) with any questions or issues you may have

<!-- SEPARATE NOTES -->

### Evan Ippolito's Notes

# Instructions for Starting up Project

- Clone repository to working directory
- Create folder `data` in working directory
- run `mongod --dbpath {working directory}/data` to stand up the mongodb database
- run `npm install` in the working directory installs dependencies for the server
- run `npm start` in the same directory to stand up the server
- navigate into the client folder and run `npm install` to install client packages
- from the client folder, run `npm start` to stand up the React front end
- it is possible that the client will detect that port 3000 is being used and will use a different one,
  most likely 3001
- browse to http://localhost:3000 or http://localhost:3001 to see the React front end

# Testing

- Note that if the tests don't pass, the server needs to be dumped of all data
- navigate to main project directory and run `npm test` to run tests

# Libraries Used in Client

- React-Bootstrap: React bootstrap provides a library for building out view components quickly.
- Formik: Formik provides a library for field-level validation.
- Yup: Yup provides the ability to create validation templates for forms.
