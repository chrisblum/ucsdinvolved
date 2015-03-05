'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {


		$("#showInfoButton").click(function(e) {
		$("#infoparagraph").slideDown("slow");
		// $("#infoparagraph").show();
		$("#showInfoButton").hide();
	});


		$("body").on("click","#closeInfoButton",function(){
		$("#infoparagraph").slideUp("fast");
		$("#showInfoButton").slideDown("fast");

	});
});