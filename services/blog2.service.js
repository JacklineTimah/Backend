// Services contain the logic for interaction with our database
// Creating blog post

let blogPost = []; // empty array to fetch all the logic data to our server

const createPost = async (post) => {
  // Find the index of the post with the same content, if it exists
  const postIndex = blogPost.findIndex((element) => element.post === post);

  // If the post exists, return an error
  if (postIndex !== -1) { // the -1 indicates it not being able to find a matching element or item in the array.
    return {
      status: 'error', // in handling errors
      code: 409,
      message: 'Post already exists',
      data: null,
    };
  }

  // If the post does not exist, add it to the array
  blogPost.push(post);
  return {
    status: 'success', // in handling errors
    code: 200,
    message: 'Post added successfully',
    data: post,
  };
};

const getPost = async () => {
  return {
    status: 'success', // in handling errors
    code: 200,
    message: 'Post fetched successfully',
    data: blogPost,
  };
};

//updating(PUT-Method) a blog 
const updatePost = async (postId,updatePost) => {
    // Find the index of the post with the same content, if it exists
    const postIndex = blogPost.findIndex((element) => element.Id === postId);
  
    // If the post exists, return an error
    if (postIndex !== -1) { // the -1 indicates it not being able to find a matching element or item in the array.
      return {
        status: 'error', // in handling errors
        code: 409,
        message: 'Page not exists',
        data: null,
      };
    }else{
  
    // If the post does not exist, add it to the array
    blogPost[postIndex] = { ...updatePost};//location of the element inside this array
    // ... means spreading in javascript which helps you to update your content
    return {
      status: 'success', // in handling errors
      code: 200,
      message: 'Page updated sucessfully',
      data: blogPost[postIndex]
    };
}
};
//deleting(Delete-method) a blog 
const deletePost = async (postId) => {
  // Find the index of the post with the same content, if it exists
  const postIndex = blogPost.findIndex((element) => element.Id === postId);

  // If the post exists, return an error
  if (postIndex !== -1) { // the -1 indicates it not being able to find a matching element or item in the array.
    return {
      status: 'error', // in handling errors
      code: 409,
      message: 'Page  does not exists',
      data: null,
    };
  }else{

  // If the post does not exist, add it to the array
  blogPost = [...blogPost.filter((element) => element.Id !== postId)];//location of the element inside this array
  // 
  return {
    status: 'success', // in handling errors
    code: 200,
    message: 'Page deleted sucessfully',
    data: null
  };
};

}
module.exports = {
  createPost,
  getPost,updatePost,deletePost}
