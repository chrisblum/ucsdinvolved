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
  	console.log(req.params.name);
  	var name = req.params.name;
  	console.log("The project name is: " + name);
  	var testing = name;

  	var newvalue = search(projects,testing);

  	function search(source, name) {
    var results = [];
    var index;
    var entry;

    name = name.toUpperCase();
    for (index = 0; index < source.length; ++index) {
        entry = source[index];
        if (entry && entry.name && entry.name.toUpperCase().indexOf(name) !== -1) {
            results.push(entry);
        }
    }

    return results;
}
	console.log(newvalue);

  	// res.render('project', {
  	// 	data, 'projectName': name
  	// });

	res.render('project',newvalue);
}