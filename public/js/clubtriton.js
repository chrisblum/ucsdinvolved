'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	var from,to,subject,email,text;
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

	$(".nameselection").click(anagramthing);
	$(".testclass").click(getData);
	// $("#submit").click(sendMessage);
}

// function sendMessage() {
// 		to="crexmob@gmail.com";
//         subject=$("#namer").val();
//         email=$("#email").val();
//         text=$("#message").val();
//         $("#inprogress").text("Sending E-mail...Please wait");
//         console.log("Sendingggggggg");
//         $.get("http://localhost:5000/send",{to:to,subject:subject,email:email,text:text},function(data){
//         if(data=="sent")
//         {
//             $("inprogress").empty().html("

// Email has been sent at "+to+" . Please check inbox !

// ");
//         }

// });
//     });

function getData(e) {
	$.get("../../data.json", callbackFn);
	console.log("working");

}

function callbackFn(result) {
		console.log(result);
		var finaladdon = '<a href="#" class="thumbnail">' +'1'+ '<img src="' + result['image'] + '" class="img">' + '<p>' + result['title'] + '</p>' + '<p><small>' + result['date'] + '</small></p></a>' + result['id'] + ':' + result['summary'];
		console.log(finaladdon);
		$("#project-container").html(finaladdon);
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