//Get dependencies

const express = require('express');
const http = require('http');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const api = require('./api.js')(app,mongoose);
const path = require('path');

const port = process.env.PORT || '3000';
app.set('port', port);

//create a HTTP server

const server = http.createServer(app);

// listen on provided port


server.listen(port, () => console.log(`API`));


//connect to mongo db
mongoose.connect('localhost:27017');

//define model

var Todo = mongoose.model('Todo', {
    text: String
});

//parser for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



//Todo.create({
//            text : "test",
//            done : false
//        }, function(err, todo) {
//            if (err)
//                res.send(err);
// });

