
//An object with two nested arrays. Each array has a name.
var data = {
	movies : ["Spotlight", "Spectre", "The Good Dinosaur"],
	tvShows : ["Chuck", "X Files", "Gilmore Girls"]
}

// Sending it to the console log, and you'll see their values represented:
console.log(data.tvshows); // => ["Chuck", "X Files", "Gilmore Girls"]
console.log(data.movies[0]); // => "Spotlight"



//Run this function when the page is loaded.
$(document).ready(function() {

	//Console log each of the value the data.movies array
	for (i=0; i < data.movies.length; i++) {
		console.log(data.movies[i]);
	}

});


// Uncomment the following function to load the Columbia Public Schools data...
// ...and see it in the console window:

//getSchoolsData();

function getSchoolsData() {

	$.getJSON("js/columbia.json", function(data, error) {
		console.log(data);
	});

}











