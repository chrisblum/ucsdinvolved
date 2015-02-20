var data = require("../data.json");

exports.gridsystem = function(req, res) {    
	console.log(data);
	res.render('home', data);

 }