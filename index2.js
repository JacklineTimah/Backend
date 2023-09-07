//In starting a node project we have three commands i.e const express , app.listen and module.exports
const express = require('express'); //same as importing 
const blogs = require('./routes/blog') // the ./ helps us to import our endpoint from blog.js which is what give us access to the endpoint(Http and url)


const app = express();

app.use(express.json()); //serves as a format for sending and receiving data

//PORT is part of the url when creating your APIs and Environment variable called a PORT
const PORT = process.env.PORT|| 2000 ; // standard port like 700 and below brings about issues in the server , hence use 1000 and above

app.listen(PORT,()=> console.log(`My Application will run on ${PORT}`)); //performs the action

app.use('/blog',blogs) // helps to know the path where the url is suppose to get the data

module.exports = app; 
//We have two ways of abducting to modularity and they are Commonjs(CJS) and ES modules (ESM) and in this js I am using CJS
// we have bunch of methods in the app; .get .post .put and .delete 