"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Services contain the logic for interaction with our database
// Creating blog post
var blogPost = []; // empty array to fetch all the logic data to our server

var createPost = function createPost(post) {
  var postIndex;
  return regeneratorRuntime.async(function createPost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // Find the index of the post with the same content, if it exists
          postIndex = blogPost.findIndex(function (element) {
            return element.post === post;
          }); // If the post exists, return an error

          if (!(postIndex !== -1)) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", {
            status: 'error',
            // in handling errors
            code: 409,
            message: 'Post already exists',
            data: null
          });

        case 3:
          // If the post does not exist, add it to the array
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
          return _context2.abrupt("return", {
            status: 'success',
            // in handling errors
            code: 200,
            message: 'Post fetched successfully',
            data: blogPost
          });

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
}; //updating(PUT-Method) a blog 


var updatePost = function updatePost(postId, _updatePost) {
  var postIndex;
  return regeneratorRuntime.async(function updatePost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          // Find the index of the post with the same content, if it exists
          postIndex = blogPost.findIndex(function (element) {
            return element.Id === postId;
          }); // If the post exists, return an error

          if (!(postIndex !== -1)) {
            _context3.next = 5;
            break;
          }

          return _context3.abrupt("return", {
            status: 'error',
            // in handling errors
            code: 409,
            message: 'Page not exists',
            data: null
          });

        case 5:
          // If the post does not exist, add it to the array
          blogPost[postIndex] = _objectSpread({}, _updatePost); //location of the element inside this array
          // ... means spreading in javascript which helps you to update your content

          return _context3.abrupt("return", {
            status: 'success',
            // in handling errors
            code: 200,
            message: 'Page updated sucessfully',
            data: blogPost[postIndex]
          });

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
}; //deleting(Delete-method) a blog 


var deletePost = function deletePost(postId) {
  var postIndex;
  return regeneratorRuntime.async(function deletePost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          // Find the index of the post with the same content, if it exists
          postIndex = blogPost.findIndex(function (element) {
            return element.Id === postId;
          }); // If the post exists, return an error

          if (!(postIndex !== -1)) {
            _context4.next = 5;
            break;
          }

          return _context4.abrupt("return", {
            status: 'error',
            // in handling errors
            code: 409,
            message: 'Page  does not exists',
            data: null
          });

        case 5:
          // If the post does not exist, add it to the array
          blogPost = _toConsumableArray(blogPost.filter(function (element) {
            return element.Id !== postId;
          })); //location of the element inside this array
          // 

          return _context4.abrupt("return", {
            status: 'success',
            // in handling errors
            code: 200,
            message: 'Page deleted sucessfully',
            data: null
          });

        case 7:
          ;

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  });
};

module.exports = {
  createPost: createPost,
  getPost: getPost,
  updatePost: updatePost,
  deletePost: deletePost
};
//# sourceMappingURL=blog2.service.dev.js.map
