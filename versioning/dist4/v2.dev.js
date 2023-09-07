"use strict";

var express = require('express');

var api = express.Router(); // const books = require('../../routes/book')

api.get("/", function (req, res) {
  return res.status(200).json({
    status: 'success',
    message: 'Welcome to My Books App API'
  });
});
module.exports = api;
//# sourceMappingURL=v2.dev.js.map
