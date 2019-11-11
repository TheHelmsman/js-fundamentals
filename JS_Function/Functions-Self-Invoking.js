/**
 * A function expression (really any function except one created from the Function() constructor) 
 * can be immediately invoked after definition by using the parentheses operator.
 */
var sayWord = function() {
  console.log('Word 2 yo mo!');
}();  // logs 'Word 2 yo mo!'


/**
 * Self-Invoking Anonymous Function Statements
 */

 // most commonly used/seen in the wild
(function(msg) {
  console.log(msg);
})('Hi');

// slightly different but achieving the same thing:
(function(msg) {
  console.log(msg)
}('Hi'));

// the shortest possible solution
!function sayHi(msg) {
  console.log(msg);
}('Hi'); // FYI, this does NOT work!
// function sayHi() {console.log('hi');}();