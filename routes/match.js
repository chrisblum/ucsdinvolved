var data = require("../data.json");

exports.findMatch = function(req, res) {    
	console.log(data);
	res.render('match', data);

 }