'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

	$(".nameselection").click(anagramthing);
	$(".removeitem").click(removeClub);
	// $("#submit").click(sendMessage);
	$(".accountcreated").click(accountCreated);
}

function accountCreated() {
	alert("Account Created! Click 'Log In'");
}


function anagrammedName(name) {
	// Thanks, Internet Anagram Server!
	
	if (name == "Doug Engelbart") {
		return "Notable Grudge";
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

function removeClub(e) {
	e.preventDefault();
	var confirmRemove = confirm("This will remove the club from your list. Are you sure?");
	if (confirmRemove) {

	var clubdiv = $(this).closest('div').attr('id');
	$("#"+clubdiv).fadeOut('slow');return false;
}
else {
	
}
}


function anagramthing(e) {
	console.log("Project clicked");
	e.preventDefault();
	var boom = $(this).text();
	console.log(boom);
	var projectTitle = anagrammedName(boom);
	$(this).text(projectTitle);

}

function goBack() {
    window.history.back()
}