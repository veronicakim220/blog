var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
	date: Number,
	title: String,
	author: String,
	content: String
});

var post = mongoose.model('posts', postSchema);
//names the collection

module.exports = function(){
	this.addPost = function(data, callback){

        var newPost = new post(data);
        newPost.save(function(error){
            if (error) {
                throw new Error();
            }
            callback();
        });
    };
	this.deletePost = function(id, callback){

        post.remove({_id: id}, function (error){
            if(error){
                throw new Error();
            }
            //delete post
            callback();            
        });
    };
	this.getPost = function(callback){

        post.find({}, function (error, posts){
            if (error) {
                throw new Error();
            }
            //pass posts to controller
            callback(posts);
        });
	};
    this.getOnePost = function(id, callback){
        post.find({_id: id}, function (error, post){
            if (error) {
                throw new Error();
            }
            //pass posts to controller
            callback(post);  
        });
    }
	this.updatePost = function(post1, callback){
        post.update({_id: post1._id}, post1, function (error){
            callback();
        });  
    };
}