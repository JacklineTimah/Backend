// Production Environment for our database connection
const dotenv = require('dotenv')//this package help loads env't variables from our .env file into our process.env to get access to the database anytime

dotenv.config();// the config gives the speciality of the environmnet in which we are working in for our database

const production = {
    DATABASE_URL : process.env.PROD_DATABASE_URL,
    APP_PORT : process.env.PORT,
}

module.exports = production;