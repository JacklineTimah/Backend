"use strict";

// Route helps us know the endpoint
var express = require('express');

var Controllers = require('../Controllers/blog.controllers');

var router = express.Router();
router.post('/', Controllers.addPost);
router.get('/', Controllers.getPost);
router.put('/:Id', Controllers.updatePost);
router["delete"]('/:Id', Controllers.deletePost);
module.exports = router;
//# sourceMappingURL=blog.dev.js.map
