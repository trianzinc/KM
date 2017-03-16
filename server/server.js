//Get dependencies

const express = require('express');
const http = require('http');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const api = require('./api.js')(app,mongoose,bodyParser);
const path = require('path');

const port = process.env.PORT || '3002';
app.set('port', port);

//create a HTTP server

const server = http.createServer(app);

// listen on provided port


server.listen(port, () => console.log(`API`));


//connect to mongo db
mongoose.connect('172.16.1.167:27017');

//define model

var Todo = mongoose.model('Todo', {
    text: String
});



//Todo.create({
//            text : "test",
//            done : false
//        }, function(err, todo) {
//            if (err)
//                res.send(err);
// });

