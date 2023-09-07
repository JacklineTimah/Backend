//brain of the server hence consist of the processes 
const test = require('./test'); //importing test environment here for interaction
const development = require('./development'); // importing dev environment for easy interaction with the server
const production = require('./production');

const environment = {
    test, development,production
} // the environmnet helps in easy perform of functions such as the CRUD

module.exports = environment[process.env.NODE_ENV || 'development'] // this environment helps brings about flexibilty in listening to your server anytime