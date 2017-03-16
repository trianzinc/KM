// exports routes
module.exports = function(app,mongoose,bodyParser){
    var Schema = mongoose.Schema;
 var User = mongoose.model('User', {
    name: String,
    password: String
});
    
var loggedInUsersSchema = new Schema({
    name: String,
    password: String
});
    
var loggedInUsers = mongoose.model('loggedIn', loggedInUsersSchema);
    
//parser for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
    
    // get all users
    app.get('/users', function(req, res) {

        // use mongoose to get all todos in the database
        User.find(function(err, users) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(users); // return all todos in JSON format
            
        });
    });
    

 // create user and send back all user after creation
    app.post('/users', function(req, res) {

        // create a todo, information comes from AJAX request from Angular
        User.create({
            text : req.body.text,
            done : false
        }, function(err, user) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            User.find(function(err, users) {
                if (err)
                    res.send(err)
                res.json(users);
            });
        });

    });

    // delete a user
    app.delete('/users/:user_id', function(req, res) {
        User.remove({
            _id : req.params.todo_id
        }, function(err, user) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Todo.find(function(err, users) {
                if (err)
                    res.send(err)
                res.json(users);
            });
        });
    });
    
    
    // delete a logged in user
    app.delete('/logout', function(req, res) {
        loggedInUsers.remove(function(err, user) {
            if (err){
                  res.send(err);
            }else{
                 res.writeHead(200, "OK", {'Content-Type': 'text/plain'});
                        res.end();
            }
              
        });
    });
    
        // login api
    app.post('/login', function(req, res) {
        
         var username = req.body.username;
         var password = req.body.password;
        
        User.findOne({
            "name" : new RegExp('^'+username+'$', "i"),
            "password": new RegExp('^'+password+'$', "i")
        }, function(err, user) {
            if (err){
                  res.send(err);
            }else{
                console.log(user)
                if(user){
                    
                    // update logged in user
                    loggedInUsers.create({
                                            name : username,
                                            password : password
                                        }, function(err, user) {
                                            if (err)
                                                res.send(err);
                                        });
                    
                    
                   res.writeHead(200, "OK", {'Content-Type': 'text/plain'});
                   res.end(); 
                }else{
                   res.writeHead(404, "USER NOT FOUND", {'Content-Type': 'text/plain'});
                   res.end();  
                }
                 
            }
              
        });
    });
    
    

    
   // api to check loggedin users
    
    app.post('/auth',function(req, res){
        
        loggedInUsers.find(function(err, userlist){
            
            if(userlist.length){
                console.log('user found');
                res.writeHead(200, "OK", {'Content-Type': 'text/plain'});
                        res.end();
                
                
            }else{
                console.log('user not found');
                 res.writeHead(205, "Auth failed", {'Content-Type': 'text/plain'});
                         res.end();
             }
        })
    });
    
     //api to check loggedin users
    
    app.post('/register',function(req, res){
         // create a todo, information comes from AJAX request from Angular
        User.create({
            name : req.body.username,
            password : req.body.password
        }, function(err, user) {
            if (err){
                console.log('error registering');
               res.writeHead(205, "failed to register", {'Content-Type': 'text/plain'});
                         res.end();
            } else {
                
                console.log('user registered');
                res.writeHead(200, "OK", {'Content-Type': 'text/plain'});
                        res.end();
                 // get and return all the todos after you create another
//                User.find(function(err, users) {
//                    if (err)
//                        res.send(err)
//                    res.json(users);
//                });
            }
          
        });
        
    });
    
    
}