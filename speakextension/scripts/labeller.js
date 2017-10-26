//import Tesseract from 'tesseract.js'
var currentAltText = "";

$(document).ready(function() {
	console.log("hi");
	iterateThroughImages();


});

function iterateThroughImages() {
	$('img').each(function() {
		var alttext = $(this).attr("alt");
		var imgsrc  = $(this).attr("src");

		var imageContext = $(this);

		// Empy alt text
	  	if(alttext && (alttext == "" || alttext == undefined) || alttext == '\n' || alttext == null) { 
	  	} 
	  	// Alt text exists
	  	else if($(this).attr('alt')) { 
	  	} 
	  	// Alt text doesn't even exist
	  	else {  
	  	}

	  	// Using YQL and JSONP
		$.ajax({
		    url: "http://www.accessibilitycourse.com/support/rekognition.php?",
		    jsonp: "callback",
		 	dataType: "jsonp",
		 	data: {
		        url: $(this).attr("src")
		    },
		 
		 	success: function( response ) {
		 		//console.log("src: "+imgsrc);
		    	console.log(imageContext);
		    	imageContext.attr("alt", response[0]["Name"].toString());
		    	currentAltText = response[0]["Name"].toString();
		        //$(this).attr("alt", response[0]["Name"]);

		    }
		});

		console.log(currentAltText);
		$(this).attr("alt", "arooon");

	})

	
}