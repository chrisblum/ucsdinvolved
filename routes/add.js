var data = require("../data.json");

exports.addFriend = function(req, res) {    
	console.log(data);
	res.render('add', data);
//	var name = res.query.name;
//	var description = res.query.description;
//	console.log(name);
//	var newFriend = ',{"name": ' + name + ',"description": ' + description + ',"imageURL": "http://lorempixel.com/400/400/people"}';
//	data["friends"].push(newFriend);
 }