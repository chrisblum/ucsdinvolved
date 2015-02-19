
 exports.contactnow = function(req, res) {    
var name = req.body.name;
var email = req.body.email;
var message = req.body.message;
  res.render('home', {"name": name, "email" : email, "message" : message});

 }