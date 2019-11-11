// Example 1
var speak = function() {
  sayYo(); /* sayYo() has not been defined yet, but it can still be invoked, logs 'yo' */
  function sayYo() {
    console.log('Yo');
  }
}(); // invoke

// Example 2
console.log(sum(2, 2)); /* invoke sum(), which is not defined yet, but can still be invoked */
function sum(x, y) {
  return x + y;
}