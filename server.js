/**
 * Created by leandroloi on 14/04/16.
 */

// Setup the server
var express = require('express');
var app = express();
var mongoose = require('mongoose');

var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var port = process.env.PORT || 8080;





//Config
var database = require('./server/config/database');
mongoose.connect(database.url);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended' : 'true'}));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(session({
    secret: 'a4f87856871f-c873-4447-8ee2trgf4435',
    resave: false,
    saveUninitialized: true
}));


//Routes
require('./server/app/routes')(app);

//Start app
app.listen(port);
console.log("Starting app on port: " + port);






