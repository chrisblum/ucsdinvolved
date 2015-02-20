var data = require("../data.json");

exports.loginfunction = function(req, res) {    
	console.log(data);
	res.render('home', data);

 }