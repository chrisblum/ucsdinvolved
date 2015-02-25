'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	$("#academic").click(function() {
		$("#academicsubset").show();
		$("#toplevel").hide();
	});
	
	$("body").on("click",".academic-science",function(){
		$("#academicsubset").hide();
		$("#academic-sciencesubset").show();
		alert("academic-sciencesubet");
	});

	$("body").on("click",".academic-eng",function(){
		$("#academicsubset").hide();
		$("#academic-engsubset").show();
		alert("academic-engsubset");
	});

	$("body").on("click",".backbutton25",function(){
		$("#hiding").hide();
		$("#toplevel").show();
		alert("bloop");
	});
	// $("#secondlev").click(function() {
	// 	$("#thirdlevel").show();
	// }
	
})
