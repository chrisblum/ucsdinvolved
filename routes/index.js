// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('index', data);
};

exports.populate = function(req, res) {    
	console.log(data);
	res.render('myevent', data);

 }

exports.findMatch = function(req, res) {    
	console.log(data);
	res.render('match', data);

 }

exports.allEvents = function(req, res) {    
	console.log(data);
	res.render('my', data);

 }

exports.showAll = function(req, res) {    
	console.log(data);
	res.render('club', data);

 }