//starting the server
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');

mongoose.connect('mongodb://localhost:27017/test');

var express = require('express');
var app = express();
//var app = require('express')();

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public/')); 

require('./app/router.js')(app);
//require grabs whatever module.exports for the defined file is equal to

app.get('*', function(req, res) {
            res.sendfile('./public/index.html'); // load our public/index.html file
        });

app.listen(3000);
console.log('Server started on port 3000…');