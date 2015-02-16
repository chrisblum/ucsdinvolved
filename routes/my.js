var data = require("../data.json");

exports.allEvents = function(req, res) {    
	console.log(data);
	res.render('my', data);

 }