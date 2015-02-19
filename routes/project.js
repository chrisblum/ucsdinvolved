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
    console.log(req.params);
  	var testing = name;

  // 	var newvalue = search(projects,testing);

  // 	function search(source, name) {
  //   var results = [];
  //   var index;
  //   var entry;

  //   name = name.toUpperCase();
  //   for (index = 0; index < source.length; ++index) {
  //       entry = source[index];
  //       if (entry && entry.name && entry.name.toUpperCase().indexOf(name) !== -1) {
  //           results.push(entry);
  //       }
  //   }
  //   return results;
  // }

  //   function getCalled(testing) {
  //     for(var i=0; i<projects.length; i++) {
  //       var obj = projects[i];
  //       var arr = obj["friends"];
  //       console.log(arr);
  //       for (var j=0; j<arr.length; j++) {
  //         if(arr[j] == testing) {
  //           return obj;
  //         }
  //       }
  //     }
  //   }

  function swap(name) {
  
  if (name == "acamazing") {
    var holdme = '{"val": "woodakid", "activity":"hiyahhh"}';
    return holdme;
  } 
  else if (name == "Ivan Sutherland") {
    return "Vandal Heist Run";
  }
  else if (name == "JCR Licklider") {
    return "Crick Rid Jell";
  }
  else if (name == "Vannevar Bush") {
    return "Ravens Van Hub";
  }
  else if (name == "Alan C. Kay") {
    return "Canal Yak";
  }
  else if (name == "Allen Newell") {
    return "Ellen All New";
  }
  else if (name == "Lucy Suchman") {
    return "Lunacy Chums";
  }
  else if (name == "Grace Hopper") {
    return "Gear Chopper";
  }
  else {
    console.log(name + " not known for anagramming.");
    return name;
  }
}

var holder = swap(name);
console.log(holder);
var parsedholder = JSON.parse(holder);
console.log(parsedholder);


 //  console.log(getCalled("name"));
 //  console.log(getCalled(name));
 //  console.log(projects.length);
	// console.log(newvalue);
 //  console.log(projects["friends"]);
 //  console.log(projects["friends"][0]["idnum"]);

  	// res.render('project', {
  	// 	data, 'projectName': name
  	// });

	res.render('project',parsedholder);
}