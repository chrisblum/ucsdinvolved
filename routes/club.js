var data = require("../data.json");

exports.showAll = function(req, res) {    
	console.log(data);
	res.render('club', data);

 }