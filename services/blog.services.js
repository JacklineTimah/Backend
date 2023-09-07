// Services contain the logic for interaction with our database
// Creating blog post 

const  blogPost = [] // empty array to fetch all the logic data to our server

const createPost = async(post) => {
    //loop into the data to see if data exists
 const postExist = blogPost.find((element) => element.post === post); // helps you find the post if it exists.
 //if it does I want to receive this data
 if(postExist){
    return{
    status:'error' ,  // in handling errors
    code: 409,
    message: 'Post already exist',
    data: null
 }}

 // if post does not exist then add to array
 blogPost.push(post);
 return{
    status:'success' ,  // in handling errors
    code: 200,
    message: 'Post added successfully',
    data: post
 }
}
const getPost= async () =>{;
 return{
    status:'success' ,  // in handling errors
    code: 200,
    message: 'Post fetched successfully',
    data: blogPost
 }
}
const updatePost = async(postId) => {
   //loop into the data to see if data exists
const postExist = blogPost.find((element) => element.postId === postId); // helps you find the post if it exists.
//if it does I want to receive this data
if(postExist){
   return{
   status:'error' ,  // in handling errors
   code: 409,
   message: 'Post already exist',
   data: null
}}

// if post does not exist then add to array
blogPost[postId] = {...blogPost[postId],...updatePost};
return{
   status:'success' ,  // in handling errors
   code: 200,
   message: 'Post added successfully',
   data: blogPost[postId]
}
}

module.exports = {createPost,
 getPost,updatePost
}