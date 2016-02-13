#### Objects, Arrays, For Loops, JSON

In class, we introduced some basic concepts for working with data. Generally, the data we work with will be stored in objects and arrays. Objects can contain arrays, and arrays can contain objects. For clear and concise overviews of both, I recommend W3 Schools:

Arrays: http://www.w3schools.com/js/js_arrays.asp
Objects: http://www.w3schools.com/js/js_objects.asp

For an in-class example, we created an object `data` that contains two arrays: `movies` and `tvshows`.

```
var data = {
	movies : ["Spotlight", "Spectre", "The Good Dinosaur"],
	tvShows : ["Chuck", "X Files", "Gilmore Girls"]
}
```

To access either array, we would type: `data.movies` or `data.tvshows` The dot helps us drill down to the value we're looking for. We could use brackets, like so: `data["movies"]` or `data["tvshows"]`.

Try sending it to the console log, and you'll see their values represented:

```
console.log(data.tvshows); // => ["Chuck", "X Files", "Gilmore Girls"]
```

But what if want to access an individual value in one of those arrays? Let's say we want to use the name of the first movie in the `data.movies` array. To access items in an array, we reference it's "index" or place in line. Remember, when we use numbers as selectors in JavaScript, we start with zero. So to access the first item in the movies array, we'd type `data.movies[0]`.

```
console.log(data.movies[0]); // => "Spotlight"
```

Building on objects, arrays and selections therein, we introduced the concept of a for loop. [Cue the sound of trumpets!!] Loops are to data viz what the flux capacitor is to time travel: they make the whole thing possible. 

So here, we're going to create a for loop, which will be executed when the page loads ($(document).ready...). 

```
$(document).ready(function() {

	//A loop is a function that runs until a condition is met. Then it stops. Like so:

	for (i=0; i < data.movies.length; i++) {

		// In plain English, here's what happens inside those parenthesis:
		// 1) We define a variable called i, which is equal to 0.
		// 2) If i is less than the length of the data.movies array, proceed.
		// 3) Add 1 to i. (i++ is shorthand for i = i + 1)

		console.log(data.movies[i]);
	}

	//Cool, right? If this doesn't make sense yet, don't get too discouraged. This may begin to make more sense as we use it in different contexts.

});
```

At the end of class, we tried to make the jump from a simple little javascript object to something much larger — a record of graduation and dropout rates at every school in the Columbia Public Schools from 2002 to 2015 — only to be stymied by our loveably imperfect friend Mr. Data Converter. I've gone ahead and cleaned up that dataset and put it in a working JSON file. If you'd like to play with it yourself, go ahead and run the following function by uncommenting this call:

```
//getSchoolsData();

function getSchoolsData() {

	$.getJSON("js/columbia.json", function(data, error) {
		console.log(data);
	});

}
```

This is where we'll pick things up on Tuesday.










