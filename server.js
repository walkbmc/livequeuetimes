// server.js
var express        = require('express');
var expresslayouts = require('express-ejs-layouts');
var bodyParser     = require('body-parser');
var app            = express();
var port           = 8080;

// use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expresslayouts);

// use our body parser
app.use(bodyParser.urlencoded());

//route our main pages
var router = require('./app/routes/routes');
app.use('/', router);

//route our disney routes
var router = require('./app/routes/disney');
app.use('/', router);

//route our universal routes
var router = require('./app/routes/universal');
app.use('/', router);

// set static files (css and images, etc) Location
app.use(express.static(__dirname + '/public'));

// start the server
app.listen(port, function() {
  console.log('app started');
});

