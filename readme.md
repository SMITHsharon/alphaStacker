# NSS Alpha Stacker

### Project Description 
The Alpha Stacker application created a `stackLetters` `JavaScript` function that outputs to the console rows of alpha letters. The function expects an array containing the letters of the alphabet as an input parameter, and outputs them in the developer console in two passes: 
- the first pass, cycling through the array and output the alphabet characters starting with "a", adding an alpha character to each row of output
- the second pass, adding a space to the output after every third character


#### Alpha Stacker First Pass
![Alpha Stacker First Pass](...)

#### Alpha Stacker Spaced
![Alpha Stacker Spaced](...)


### Project Specs
#### `javascript` Specs, Part 1
Starter code for `alpha-stackers.js`:
	```
	// Create an array that contains the letters of the alphabet
	var alphabet = [];

	// The stackLetter function should accept the array as the sole argument
	function stackLetters (theAlphabetArray) {
	    /*
	      Write a `for` loop that iterates over the array argument and
	      outputs the letters.
	     */
	}

	// Invoke the function and pass in the array
	stackLetters(alphabet)
	```

The output for this piece of the application should print:

	a
	ab
	abc
	abcd
	abcde
	abcdef
	etc...


#### `javascript` Specs, Part 2
Added logic to <stackLetters> that adds a space after every third letter. 
This looping logic requires some simple math to execute the row output properly.

The "assignment" was given as:

*If the current value of the counter variable can be evenly divided by 3 - using the JavaScript remainder operator - then add a single space to the output.*

The output for this piece of the application should print: 

	a
	ab
	abc
	abc d
	abc de
	abc def
	abc def g
	abc def gh
	abc def ghi
	etc...


### Technologies Used
- `JavaScript`


### How To View The Screen 
#### (Node must be installed on your machine):
```
git clone https://github.com/SMITHsharon/alphaStacker.git
cd alpha-stacker
npm install http-server -g
http-server -p 8080
```

This will show in your browser at: `http://localhost:8080`


### Contributor
[Sharon Smith](https://github.com/SMITHsharon)
