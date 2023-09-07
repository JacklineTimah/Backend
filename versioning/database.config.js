//database connection occurs here
// First import your dependencies
const { Pool } = require('pg');//use to create a connection pool to PSQL databases
const config = require('./env/index'); // importing a configuration file for PSQL database

// Setting up the connection
const connectionString = config.DATABASE_URL; //fectching the database Url from the config(environment)
const pool = new Pool({ connectionString }); // creating a pool connection

// Checking for successful connection
(() => {
    pool.query('SELECT NOW()', (err, res) => {
        if (err) console.log('Database Connection Failed!', err); // database connection not successful should display this error message
        if (res) console.log('Connected to PostgresQL Database'); // successful
    });
})();

// Defining a Query Function
const runQuery = async (query, values = []) => {
    const { rows } = await pool.query(query, values);// pool.query to execute the provided SQL
    return rows; // contain the result of the query
};

// Exporting the runQuery Function
module.exports =  runQuery ;


