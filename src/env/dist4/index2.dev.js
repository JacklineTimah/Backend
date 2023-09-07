"use strict";

//brain of the server hence consist of the processes 
var test = require('./test'); //importing test environment here for interaction


var development = require('./development'); // importing dev environment for easy interaction with the server


var production = require('./production');

var environment = {
  test: test,
  development: development,
  production: production
}; // the environmnet helps in easy perform of functions such as the CRUD

module.exports = environment[process.env.NODE_ENV || 'development']; // this environment helps brings about flexibilty in listening to your server anytime
//# sourceMappingURL=index2.dev.js.map
