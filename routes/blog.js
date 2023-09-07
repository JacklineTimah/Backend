// Route helps us know the endpoint
const express = require('express')
const Controllers = require('../Controllers/blog.controllers')

const router = express.Router()

router.post('/',Controllers.addPost);
router.get ('/',Controllers.getPost);
router.put ('/:Id',Controllers.updatePost);
router.delete ('/:Id',Controllers.deletePost);



module.exports = router;