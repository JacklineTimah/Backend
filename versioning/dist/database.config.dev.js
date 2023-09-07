"use strict";

//database connection occurs here
// First import your dependencies
var _require = require('pg'),
    Pool = _require.Pool; //use to create a connection pool to PSQL databases


var config = require('./env/index'); // importing a configuration file for PSQL database
// Setting up the connection


var connectionString = config.DATABASE_URL; //fectching the database Url from the config(environment)

var pool = new Pool({
  connectionString: connectionString
}); // creating a pool connection
// Checking for successful connection

(function () {
  pool.query('SELECT NOW()', function (err, res) {
    if (err) console.log('Database Connection Failed!', err); // database connection not successful should display this error message

    if (res) console.log('Connected to PostgresQL Database'); // successful
  });
})(); // Defining a Query Function


var runQuery = function runQuery(query) {
  var values,
      _ref,
      rows,
      _args = arguments;

  return regeneratorRuntime.async(function runQuery$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          values = _args.length > 1 && _args[1] !== undefined ? _args[1] : [];
          _context.next = 3;
          return regeneratorRuntime.awrap(pool.query(query, values));

        case 3:
          _ref = _context.sent;
          rows = _ref.rows;
          return _context.abrupt("return", rows);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}; // Exporting the runQuery Function


module.exports = runQuery;
//# sourceMappingURL=database.config.dev.js.map
