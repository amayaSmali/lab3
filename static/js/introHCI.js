'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function projectClick(e) {
    // prevent the page from reloading      
	e.preventDefault();
	// $("#myelement").hide():
	// $("#myelement").show(): 
	// $("#myelement").toggle():
	// $("#myelement").fadeIn()
	// $("#myelement").fadeOut()
	// $("#myelement").fadeToggle()

    // In an event handler, $(this) refers to      
    // the object that triggered the event      
	console.log("Project Clicked");
	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
	   description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
	   description.fadeOut();
	   description.hide();
	   
	// $("#myelement").hide():
	
    }
}


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});
	$("a.thumbnail").click(projectClick);
	
}