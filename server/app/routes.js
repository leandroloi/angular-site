/**
 * Created by leandroloi on 15/04/16.
 */


var base_url = '/api/';  //API base path

var Todo = require('./models/todos');
var User = require('./models/User');

module.exports = function(app) {
    //API


    //get all todos
    app.get( base_url + 'todos', function(req, res){
        //mongoose find all the todos on the database and return. If error send the error.
        Todo.find(function(err, todos){
            if (err)
                res.send(err);

            res.json(todos); //return all todos
        });
    });

    //create a new todos
    app.post( base_url + 'todos', function(req, res){
        Todo.create({
            text : req.body.text,
            done : false
        }, function(err, todos){

            if (err)
                res.send(err);

            Todo.find(function(err, todos){
                if(err)
                    res.send(err);

                res.json(todos);
            });

        });

    });

    app.delete(base_url +'todos/:todo_id', function(req, res){
        Todo.remove({
            _id : req.params.todo_id

        }, function(err, todos){
            if(err)
                res.send(err);

            Todo.find(function(err, todos){
                if(err)
                    res.send(err);

                res.json(todos);
            });
        });

    });

    app.post(base_url +'register', function(req, res){
       var email = req.body.email;
       var pass = req.body.password;

        var newUser = new User();
        newUser.email = email;
        newUser.password = pass;

        newUser.save(function(err, savedUser){
            if (err)
                res.send(err);
            if (savedUser)
                return res.status(200).send();

        })

    });

    app.post(base_url + 'login', function(req, res){
        var email = req.body.email;
        var pass = req.body.password;

        User.findOne({email: email, password: pass}, function(err, user){
            if (err)
                res.send(err);

            if(!user){
                return res.status(404).send('User not found or Password is incorrect');
            }
            req.session.user = user;
            console.log('Wellcome you are logged in.');
            return res.status(200).send(user);


        })
    });

    app.get(base_url + 'dashboard', function(req, res ){
       if(!req.session.user){
           return res.status(401).send();
       }
        return res.status(200).send('Wellcome to the logged in area');
    });
    //aplication
    app.get('/', function(req, res){
        res.sendFile('../../public/index.html'); //this will load a single file with angular
    });


};


