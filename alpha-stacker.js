// Create an array that contains the letters of the alphabet
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
				'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

/*******************************************************/
/*
// The stackLetter function should accept the array as the sole argument
/*
   Write a `for` loop that iterates over the array argument and
   outputs the letters. 
*/
/*******************************************************/
function stackLetters (theAlphabetArray) {
	var thisStr = "";

	console.log("Here's the Stacked Alphabet:");
    for (i=0; i<alphabet.length; i++) {
    	thisStr += alphabet[i];
     	console.log(thisStr);
    }
}


/*******************************************************/
/*
/* If the current value of the counter variable can be evenly divided by 3 
/* - using the JavaScript remainder operator - then add a single space to the output.
/*******************************************************/
function stackWithSpace (theAlphabetArray) {
	thisStr = "";

	console.log("");
	console.log("Here's the Stacked Alphabet, ");
	console.log("with a space at every third letter:");
	for (i=0; i<alphabet.length; i++) {
		if (i%3 === 0) { 
			thisStr += " ";  // add a space
		}
		thisStr += alphabet[i];
		console.log(thisStr);
	}
}


/*******************************************************/
// Invoke the functions and pass in the array
/*******************************************************/
stackLetters(alphabet);
stackWithSpace(alphabet);

