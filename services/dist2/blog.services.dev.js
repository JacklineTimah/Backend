"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Services contain the logic for interaction with our database
// Creating blog post 
var blogPost = []; // empty array to fetch all the logic data to our server

var createPost = function createPost(post) {
  var postExist;
  return regeneratorRuntime.async(function createPost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          //loop into the data to see if data exists
          postExist = blogPost.find(function (element) {
            return element.post === post;
          }); // helps you find the post if it exists.
          //if it does I want to receive this data

          if (!postExist) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", {
            status: 'error',
            // in handling errors
            code: 409,
            message: 'Post already exist',
            data: null
          });

        case 3:
          // if post does not exist then add to array
          blogPost.push(post);
          return _context.abrupt("return", {
            status: 'success',
            // in handling errors
            code: 200,
            message: 'Post added successfully',
            data: post
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

var getPost = function getPost() {
  return regeneratorRuntime.async(function getPost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          ;
          return _context2.abrupt("return", {
            status: 'success',
            // in handling errors
            code: 200,
            message: 'Post fetched successfully',
            data: blogPost
          });

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var updatePost = function updatePost(postId) {
  var postExist;
  return regeneratorRuntime.async(function updatePost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          //loop into the data to see if data exists
          postExist = blogPost.find(function (element) {
            return element.postId === postId;
          }); // helps you find the post if it exists.
          //if it does I want to receive this data

          if (!postExist) {
            _context3.next = 3;
            break;
          }

          return _context3.abrupt("return", {
            status: 'error',
            // in handling errors
            code: 409,
            message: 'Post already exist',
            data: null
          });

        case 3:
          // if post does not exist then add to array
          blogPost[postId] = _objectSpread({}, blogPost[postId], {}, updatePost);
          return _context3.abrupt("return", {
            status: 'success',
            // in handling errors
            code: 200,
            message: 'Post added successfully',
            data: blogPost[postId]
          });

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
};

module.exports = {
  createPost: createPost,
  getPost: getPost,
  updatePost: updatePost
};
//# sourceMappingURL=blog.services.dev.js.map
