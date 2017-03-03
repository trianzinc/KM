//Get dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

//get api routes

const app = express();

//parser for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// get port from enviroment and store in express

const port = process.env.PORT || '3000';
app.set('port', port);

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

//create a HTTP server

const server = http.createServer(app);

// listen on provided port

app.get('/', function (req, res) {
  res.send('{"name":"pratik"}')
})

server.listen(port, () => console.log(`API`));