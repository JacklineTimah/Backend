"use strict";

var dotenv = require('dotenv'); //this package help loads env't variables from our .env file into our process.env to get access to the database anytime


dotenv.config(); // the config gives the speciality of the environmnet in which we are working in for our database

var test = {
  DATABASE_URL: process.env.TEST_DATABASE_URL,
  APP_PORT: process.env.PORT
};
module.exports = test;
//# sourceMappingURL=test.dev.js.map
