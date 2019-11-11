
/**
 * The head object is the highest scope/context available in a JavaScript environment.
 */
var myStringVar = 'myString';
var myFunctionVar = function() {};
myString = 'myString';
myFunction = function() {};

console.log('myStringVar' in window);     // returns true
console.log('myFunctionVar' in window);   // return true
console.log('myString' in window);        // returns true
console.log('myFunction' in window);      // return true

/**
 * Global functions
 */
decodeURI()
decodeURIComponent()
encodeURI()
encodeURIComponent()
eval()
isFinite()
isNaN()
parseFloat()
parseInt()