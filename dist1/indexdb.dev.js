"use strict";

//In starting a node project we have three commands i.e const express , app.listen and module.exports
var express = require('express'); //same as importing 


var apiVersion1 = require('.'); // the ./ helps us to import our endpoint from blog.js which is what give us access to the endpoint(Http and url)


var app = express();
app.use(express.json()); //serves as a format for sending and receiving data
//PORT is part of the url when creating your APIs and Environment variable called a PORT

var PORT = process.env.PORT || 2000; // standard port like 700 and below brings about issues in the server , hence use 1000 and above

app.listen(PORT, function () {
  return console.log("My Application will run on ".concat(PORT));
}); //performs the action

app.use('/blog', blogs); // helps to know the path where the url is suppose to get the data

module.exports = app; //We have two ways of abducting to modularity and they are Commonjs(CJS) and ES modules (ESM) and in this js I am using CJS
// we have bunch of methods in the app; .get .post .put and .delete
//# sourceMappingURL=indexdb.dev.js.map
