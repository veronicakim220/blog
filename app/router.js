var testCtrl = require('./controllers/testCtrl.js');

module.exports = function(app){
	app.get('/api/posts',testCtrl.getPost);
	app.get('/api/post/:id',testCtrl.getOnePost);
	app.post('/api/newpost', testCtrl.addPost);
	app.delete('/api/deletepost/:id',testCtrl.deletePost);
	app.put('/api/updatepost',testCtrl.updatePost);
}