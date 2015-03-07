var data = require("../data.json");

exports.gridsystem = function(req, res) {    
	console.log(data);

	// var random_num = Math.random();

  // if(random_num > 0.5){
  //   res.render("home", data);
  // }else{
  //   res.render("homealternate", data)
  // }

  res.render("home", data);

 }