'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {

		
		$(".join").click(function(e){
			e.preventDefault();

			var name = $(this).attr("id");
			var name2 = $(this).closest('div').attr("name");
			var description = $(this).closest('div').attr("description");
			console.log(description);
			alert(name2 + " added!");
			var newEntry = { "name": name, "description": description};
			console.log(newEntry);

			$.get("/my");


		});

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
		$("#chooseone").hide();
		$("#chooseclub").show();
		$("#academic-sciencesubset").show();
	});

		$("body").on("click",".academic-eng",function(){
		$("#academicsubset").hide();
		$("#chooseone").hide();
		$("#chooseclub").show();
		$("#academic-engsubset").show();
	});

		$("body").on("click",".cultural-asia",function(){
		$("#culturalsubset").hide();
		$("#chooseone").hide();
		$("#chooseclub").show();
		$("#cultural-asiasubset").show();
	});

		$("body").on("click",".cultural-africa",function(){
		$("#culturalsubset").hide();
		$("#chooseone").hide();
		$("#chooseclub").show();
		$("#cultural-africasubset").show();
	});

		$("body").on("click",".cultural-europe",function(){
		$("#culturalsubset").hide();
		$("#chooseone").hide();
		$("#chooseclub").show();
		$("#cultural-europesubset").show();
	});

		$("body").on("click",".cultural-northamerica",function(){
		$("#culturalsubset").hide();
		$("#chooseone").hide();
		$("#chooseclub").show();
		$("#cultural-northamericasubset").show();
	});

		$("body").on("click",".cultural-southamerica",function(){
		$("#culturalsubset").hide();
		$("#chooseone").hide();
		$("#chooseclub").show();
		$("#cultural-southamericasubset").show();
	});

		$("body").on("click",".cultural-more",function(){
		$("#culturalsubset").hide();
		$("#chooseone").hide();
		$("#chooseclub").show();
		$("#cultural-moresubset").show();
	});

		$("body").on("click",".greek-guys",function(){
		$("#greeksubset").hide();
		$("#chooseone").hide();
		$("#chooseclub").show();
		$("#greek-guyssubset").show();
	});

		$("body").on("click",".greek-girls",function(){
		$("#greeksubset").hide();
		$("#chooseone").hide();
		$("#chooseclub").show();
		$("#greek-girlssubset").show();
	});

		$("body").on("click",".professional-premed",function(){
		$("#professionalsubset").hide();
		$("#chooseone").hide();
		$("#chooseclub").show();
		$("#professional-premedsubset").show();
	});

		$("body").on("click",".professional-prehealth",function(){
		$("#professionalsubset").hide();
		$("#chooseone").hide();
		$("#chooseclub").show();
		$("#professional-prehealthsubset").show();
	});

		$("body").on("click",".professional-prepharm",function(){
		$("#professionalsubset").hide();
		$("#chooseone").hide();
		$("#chooseclub").show();
		$("#professional-prepharmsubset").show();
	});

		$("body").on("click",".social-videogames",function(){
		$("#socialsubset").hide();
		$("#chooseone").hide();
		$("#chooseclub").show();
		$("#social-videogamessubset").show();
	});

		$("body").on("click",".social-acapella",function(){
		$("#socialsubset").hide();
		$("#chooseone").hide();
		$("#chooseclub").show();
		$("#social-acapellasubset").show();
	});

		$("body").on("click",".social-car",function(){
		$("#socialsubset").hide();
		$("#chooseone").hide();
		$("#chooseclub").show();
		$("#social-carsubset").show();
	});

		$("body").on("click",".active-martialarts",function(){
		$("#activesubset").hide();
		$("#chooseone").hide();
		$("#chooseclub").show();
		$("#active-martialartssubset").show();
	});

		$("body").on("click",".active-dance",function(){
		$("#activesubset").hide();
		$("#chooseone").hide();
		$("#chooseclub").show();
		$("#active-dancesubset").show();
	});

		$("body").on("click",".active-more",function(){
		$("#activesubset").hide();
		$("#chooseone").hide();
		$("#chooseclub").show();
		$("#active-moresubset").show();
	});

		$("body").on("click",".backbutton-to-toplevel",function(){
		$("#academicsubset").hide();
		$("#toplevel").show();
	});
		$("body").on("click",".backbutton-to-toplevel",function(){
		$("#culturalsubset").hide();
		$("#toplevel").show();
	});

		$("body").on("click",".backbutton-to-toplevel",function(){
		$("#greeksubset").hide();
		$("#toplevel").show();
	});

		$("body").on("click",".backbutton-to-toplevel",function(){
		$("#professionalsubset").hide();
		$("#toplevel").show();
	});

		$("body").on("click",".backbutton-to-toplevel",function(){
		$("#socialsubset").hide();
		$("#toplevel").show();
	});

		$("body").on("click",".backbutton-to-toplevel",function(){
		$("#activesubset").hide();
		$("#toplevel").show();
	});

		$("body").on("click",".backbutton-to-academicsub",function(){
		$("#academic-sciencesubset").hide();
		$("#chooseclub").hide();
		$("#chooseone").show();
		$("#academicsubset").show();
	});

		$("body").on("click",".backbutton-to-academicsub",function(){
		$("#academic-engsubset").hide();
		$("#chooseclub").hide();
		$("#chooseone").show();
		$("#academicsubset").show();
	});

		$("body").on("click",".backbutton-to-culturalsub",function(){
		$("#cultural-asiasubset").hide();
		$("#chooseclub").hide();
		$("#chooseone").show();
		$("#culturalsubset").show();
	});

		$("body").on("click",".backbutton-to-culturalsub",function(){
		$("#cultural-africasubset").hide();
		$("#chooseclub").hide();
		$("#chooseone").show();
		$("#culturalsubset").show();
	});

		$("body").on("click",".backbutton-to-culturalsub",function(){
		$("#cultural-europesubset").hide();
		$("#chooseclub").hide();
		$("#chooseone").show();
		$("#culturalsubset").show();
	});

		$("body").on("click",".backbutton-to-culturalsub",function(){
		$("#cultural-northamericasubset").hide();
		$("#chooseclub").hide();
		$("#chooseone").show();
		$("#culturalsubset").show();
	});

		$("body").on("click",".backbutton-to-culturalsub",function(){
		$("#cultural-southamericasubset").hide();
		$("#chooseclub").hide();
		$("#chooseone").show();
		$("#culturalsubset").show();
	});

		$("body").on("click",".backbutton-to-culturalsub",function(){
		$("#cultural-moresubset").hide();
		$("#chooseclub").hide();
		$("#chooseone").show();
		$("#culturalsubset").show();
	});

		$("body").on("click",".backbutton-to-greeksub",function(){
		$("#greek-guyssubset").hide();
		$("#chooseclub").hide();
		$("#chooseone").show();
		$("#greeksubset").show();
	});

		$("body").on("click",".backbutton-to-greeksub",function(){
		$("#greek-girlssubset").hide();
		$("#chooseclub").hide();
		$("#chooseone").show();
		$("#greeksubset").show();
	});

		$("body").on("click",".backbutton-to-professionalsub",function(){
		$("#professional-premedsubset").hide();
		$("#chooseclub").hide();
		$("#chooseone").show();
		$("#professionalsubset").show();
	});

		$("body").on("click",".backbutton-to-professionalsub",function(){
		$("#professional-prehealthsubset").hide();
		$("#chooseclub").hide();
		$("#chooseone").show();
		$("#professionalsubset").show();
	});

		$("body").on("click",".backbutton-to-professionalsub",function(){
		$("#professional-prepharmsubset").hide();
		$("#chooseclub").hide();
		$("#chooseone").show();
		$("#professionalsubset").show();
	});

		$("body").on("click",".backbutton-to-socialsub",function(){
		$("#social-videogamessubset").hide();
		$("#chooseclub").hide();
		$("#chooseone").show();
		$("#socialsubset").show();
	});

		$("body").on("click",".backbutton-to-socialsub",function(){
		$("#social-acapellasubset").hide();
		$("#chooseclub").hide();
		$("#chooseone").show();
		$("#socialsubset").show();
	});

		$("body").on("click",".backbutton-to-socialsub",function(){
		$("#social-carsubset").hide();
		$("#chooseclub").hide();
		$("#chooseone").show();
		$("#socialsubset").show();
	});

		$("body").on("click",".backbutton-to-activesub",function(){
		$("#active-martialartssubset").hide();
		$("#chooseclub").hide();
		$("#chooseone").show();
		$("#activesubset").show();
	});

		$("body").on("click",".backbutton-to-activesub",function(){
		$("#active-dancesubset").hide();
		$("#chooseclub").hide();
		$("#chooseone").show();
		$("#activesubset").show();
	});

		$("body").on("click",".backbutton-to-activesub",function(){
		$("#active-moresubset").hide();
		$("#chooseclub").hide();
		$("#chooseone").show();
		$("#activesubset").show();
	});
	// $("#secondlev").click(function() {
	// 	$("#thirdlevel").show();
	// }
	
})

function getHelp() {
	alert("Pick an option on this screen to get matched with the club that is right for you. Click join to add it to -My Clubs-");
}
