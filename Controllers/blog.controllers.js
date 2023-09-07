// Controller involves interacting with our route 
const Services = require('../services/blog2.service')

const addPost = async (request,response,next) =>{
    try {
        const post= await Services.createPost(request.body); // post method sends data through the http message body
        return response.status(post.code).json(post)
    } catch (error) {
       next(error) 
    }
}
const getPost = async (request,response,next) =>{
    try {
        const posts= await Services.getPost(); // post method sends data through the http message body 
        //.getPost doesn't request fetching data from the body
        return response.status(posts.code).json(posts)
    } catch (error) {
       next(error) 
    }
}

//update
const updatePost = async (request,response,next) =>{
    try {
        const postId= request.params.Id; // post method sends data through the http message body
        const updatePost = request.body;
        console.log(postId);
        const result = await Services.updatePost(postId,updatePost) ;
        //.getPost doesn't request fetching data from the body
        return response.status(result.code).json(result);
    } catch (error) {
       next(error) 
    }
}
//delete
const deletePost = async (request,response,next) =>{
    try {
        const postId= request.params.Id; // post method sends data through the http message body
        console.log(postId);
        const result = await Services.deletePost(postId) ;
        //.getPost doesn't request fetching data from the body
        return response.status(result.code).json(result);
    } catch (error) {
       next(error) 
    }
}
 module.exports = {
    addPost,getPost,updatePost,deletePost
 }
