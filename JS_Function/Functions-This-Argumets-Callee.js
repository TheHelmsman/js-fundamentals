var add = function() {
  return arguments[0] + arguments[1];
};
console.log(add(4, 4)); // returns 8

var myObject1 = {
  name: 'myObject1',
  myMethod: function(){console.log(this);}
};
myObject1.myMethod(); // logs 'myObject1'
var myObject2 = function(){console.log(this);}; 
myObject2(); // logs window

var foo = function foo() {
  console.log(arguments.callee); // logs foo()
  /* callee could be used to invoke recursively the foo function (e.g., arguments.callee()) */
}();