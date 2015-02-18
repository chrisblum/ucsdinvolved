var projects = require('../data.json');

exports.projectInfo = function(req, res) { 
	// var projectID = req.params.id;
	// if (projectID == "random") {
	// 	projectID = Math.floor(Math.random() * projects.length) + 1;
	// } else {
	// 	projectID = parseInt(projectID);
	// }
	// console.log(projectID);
 //  	var project = projects[projectID-1]; // of by one, our first project has index 0
  	// res.json(project);
  	console.log(req.params.id);
  	var name = req.params.id;
  	console.log("The project name is: " + name);
  	res.render('project', {
  		'projectName': name
  	});
}