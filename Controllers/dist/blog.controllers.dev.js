"use strict";

// Controller involves interacting with our route 
var Services = require('../services/blog2.service');

var addPost = function addPost(request, response, next) {
  var post;
  return regeneratorRuntime.async(function addPost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Services.createPost(request.body));

        case 3:
          post = _context.sent;
          return _context.abrupt("return", response.status(post.code).json(post));

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          next(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

var getPost = function getPost(request, response, next) {
  var posts;
  return regeneratorRuntime.async(function getPost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Services.getPost());

        case 3:
          posts = _context2.sent;
          return _context2.abrupt("return", response.status(posts.code).json(posts));

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; //update


var updatePost = function updatePost(request, response, next) {
  var postId, _updatePost, result;

  return regeneratorRuntime.async(function updatePost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          postId = request.params.Id; // post method sends data through the http message body

          _updatePost = request.body;
          console.log(postId);
          _context3.next = 6;
          return regeneratorRuntime.awrap(Services.updatePost(postId, _updatePost));

        case 6:
          result = _context3.sent;
          return _context3.abrupt("return", response.status(result.code).json(result));

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 10]]);
}; //delete


var deletePost = function deletePost(request, response, next) {
  var postId, result;
  return regeneratorRuntime.async(function deletePost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          postId = request.params.Id; // post method sends data through the http message body

          console.log(postId);
          _context4.next = 5;
          return regeneratorRuntime.awrap(Services.deletePost(postId));

        case 5:
          result = _context4.sent;
          return _context4.abrupt("return", response.status(result.code).json(result));

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

module.exports = {
  addPost: addPost,
  getPost: getPost,
  updatePost: updatePost,
  deletePost: deletePost
};
//# sourceMappingURL=blog.controllers.dev.js.map
