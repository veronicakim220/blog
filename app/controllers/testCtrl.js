var testModel1 = require('../models/testModel.js');

var testModel = new testModel1();

function testCtrl(){
	this.addPost = function(req,res){
		// console.log(req.body);
		testModel.addPost(req.body, function(){
			res.send('success!');
		});
	};
	this.deletePost = function(req,res){
		testModel.deletePost(req.params.id, function(){
			res.send('deleted!');
		});
	};

	this.getPost = function(req,res){
		testModel.getPost(function(data){
			//giving back to the browser
			res.send(data);
		});
	};

	this.getOnePost = function(req,res){
		testModel.getOnePost(req.params.id, function(data){
			res.send(data);
		});
	};

	this.updatePost = function(req,res){
		testModel.updatePost(req.body, function(){
			res.send('successfully saved!');
		});
	};
}

module.exports = new testCtrl();
