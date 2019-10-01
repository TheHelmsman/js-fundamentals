// The Object(), Array(), and Function() objects can contain other complex objects.

// encapsulation using objects, creates object chains
var object1 = { 
  object1_1: {
    object1_1_1: {foo: 'bar'},
    object1_1_2: {},
  },
  object1_2: {
    object1_2_1: {},
    object1_2_2: {},
  } 
};
console.log(object1.object1_1.object1_1_1.foo); // logs 'bar'

// encapsulation using arrays, creates multidimensional array chain var myArray= [[[]]]; 
/* an empty array, inside an empty array,inside an empty array */
/* Here is an example of encapsulation using functions: an empty function inside an empty function inside an empty function. */
var myFunction = function() {
  // empty
  var myFunction = function() { // empty
    var myFunction = function() { // empty
    }; 
  };
};
// we can get crazy and mix and match too
var foo = [{foo: [{bar: {say: function() {return 'hi';}}}]}];
console.log(foo[0].foo[0].bar.say()); // logs 'hi'