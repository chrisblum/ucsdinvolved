'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	$("#option1").click(function() {
		$("#hiding").show();
		$("#toplevel").hide();
	});
	
	$("body").on("click",".secondlevclass",function(){
		$("#hiding").hide();
		$("#thirdlevel").show();
		alert("test");
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
