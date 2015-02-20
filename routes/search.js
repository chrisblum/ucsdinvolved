var data = require("../data.json");

exports.searching = function(req, res) {   
	searchvalue = req.body.searchinput; 
	console.log(searchvalue);
	var new_arr = {};
	// new_arr = $.grep(data, function(n,i){
	//  	return(n.name == 'searchvalue');
	//  })
	res.render('club', searchvalue);

 }