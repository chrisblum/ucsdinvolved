var data = require("../data.json");

exports.populate = function(req, res) {    
	console.log(data);
	res.render('myevent', data);

 }