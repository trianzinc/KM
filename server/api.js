// file for routes and api


// exports routes
module.exports = function(app,mongoose){
    
 var User = mongoose.model('User', {
    name: String,
    password: String
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

    
}