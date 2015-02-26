'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
		$("#academic").click(function() {
		$("#academicsubset").show();
		$("#toplevel").hide();
	});

		$("#cultural").click(function() {
		$("#culturalsubset").show();
		$("#toplevel").hide();
	});


		$("#greek").click(function() {
		$("#greeksubset").show();
		$("#toplevel").hide();
	});

		$("#professional").click(function() {
		$("#professionalsubset").show();
		$("#toplevel").hide();
	});

		$("#social").click(function() {
		$("#socialsubset").show();
		$("#toplevel").hide();
	});

		$("#active").click(function() {
		$("#activesubset").show();
		$("#toplevel").hide();
	});


		$("body").on("click",".academic-science",function(){
		$("#academicsubset").hide();
		$("#academic-sciencesubset").show();
	});

		$("body").on("click",".academic-eng",function(){
		$("#academicsubset").hide();
		$("#academic-engsubset").show();
	});

		$("body").on("click",".cultural-asia",function(){
		$("#culturalsubset").hide();
		$("#cultural-asiasubset").show();
	});

		$("body").on("click",".cultural-africa",function(){
		$("#culturalsubset").hide();
		$("#cultural-africasubset").show();
	});

		$("body").on("click",".cultural-europe",function(){
		$("#culturalsubset").hide();
		$("#cultural-europesubset").show();
	});

		$("body").on("click",".cultural-northamerica",function(){
		$("#culturalsubset").hide();
		$("#cultural-northamericasubset").show();
	});

		$("body").on("click",".cultural-southamerica",function(){
		$("#culturalsubset").hide();
		$("#cultural-southamericasubset").show();
	});

		$("body").on("click",".cultural-more",function(){
		$("#culturalsubset").hide();
		$("#cultural-moresubset").show();
	});

		$("body").on("click",".greek-guys",function(){
		$("#greeksubset").hide();
		$("#greek-guyssubset").show();
	});

		$("body").on("click",".greek-girls",function(){
		$("#greeksubset").hide();
		$("#greek-girlssubset").show();
	});

		$("body").on("click",".professional-premed",function(){
		$("#professionalsubset").hide();
		$("#professional-premedsubset").show();
	});

		$("body").on("click",".professional-prehealth",function(){
		$("#professionalsubset").hide();
		$("#professional-prehealthsubset").show();
	});

		$("body").on("click",".professional-prepharm",function(){
		$("#professionalsubset").hide();
		$("#professional-prepharmsubset").show();
	});

		$("body").on("click",".social-videogames",function(){
		$("#socialsubset").hide();
		$("#social-videogamessubset").show();
	});

		$("body").on("click",".social-acapella",function(){
		$("#socialsubset").hide();
		$("#social-acapellasubset").show();
	});

		$("body").on("click",".social-car",function(){
		$("#socialsubset").hide();
		$("#social-carsubset").show();
	});

		$("body").on("click",".active-martialarts",function(){
		$("#activesubset").hide();
		$("#active-martialartssubset").show();
	});

		$("body").on("click",".active-dance",function(){
		$("#activesubset").hide();
		$("#active-dancesubset").show();
	});

		$("body").on("click",".active-more",function(){
		$("#activesubset").hide();
		$("#active-more").show();
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
