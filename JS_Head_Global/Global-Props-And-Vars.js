/**
 * Global properties and variables
 */

var foo = 'bar'; /* foo is a global object and a property of the head/window object */
var myApp = function() { // remember functions create scope
  var run = function() {
    // logs bar, foo's value is found via the scope chain in the head object
    console.log(foo); }();
}
myApp();

var myFunction = function() {var foo2 = 'bar'}; /* foo is now in the scope of myFunction() */

var myApp2 = function() {
  var run = function() {
    console.log(foo2); /* foo is undefined, no longer in the global scope, error occurs */
  }(); 
}
myApp2()