var data = require("../data.json");

exports.allClubs = function(req, res) {    
	console.log(data);
	res.render('clubList', data);
//	var name = res.query.name;
//	var description = res.query.description;
//	console.log(name);
//	var newFriend = ',{"name": ' + name + ',"description": ' + description + ',"imageURL": "http://lorempixel.com/400/400/people"}';
//	data["friends"].push(newFriend);
 }