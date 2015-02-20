
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars')

var index = require('./routes/index');
var add = require('./routes/add');
var club = require('./routes/club');
var myevent = require('./routes/myevent');
var match = require('./routes/match');
var my = require('./routes/my');
var project = require('./routes/project');
var contact = require('./routes/contact');
var login = require('./routes/login');
var home = require('./routes/home');

var nodemailer = require('nodemailer');
// Example route
// var user = require('./routes/user');

var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
// app.get('/', index.view);
app.get('/', function(req,res) {
	res.render('login');
});
app.get('/add', add.addFriend);
app.get('/club', club.showAll);
app.get('/myevent', myevent.populate);
app.get('/match', match.findMatch);
app.get('/my', my.allEvents);
app.get('/project/:name', project.projectInfo);
app.get('/home', home.gridsystem);
app.post('/contact', contact.contactnow);



// Example route
// app.get('/users', user.list);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
