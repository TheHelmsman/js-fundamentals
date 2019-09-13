/**
 * Controlling the Value of this Using call() or apply()
 */

var myObject = {};
var myFunction = function(param1, param2) {
   // set via call() 'this' points to myObject when function is invoked
  this.foo = param1;
  this.bar = param2;
  console.log(this) // logs Object {foo = 'foo', bar = 'bar'}
};
myFunction.call(myObject, 'foo', 'bar'); /* invoke function, set this value to myObject */
console.log(myObject) // logs Object {foo = 'foo', bar = 'bar'}

/**
 * In the example above, we are using call(), but apply() could be used as well. 
 * The difference between the two is how the parameters for the function are passed. 
 * Using call(), the parameters are just comma-separated values. 
 * Using apply(), the parameter values are passed inside of an array. 
 * Below, is the same idea, but using apply().
 */

var myObject2 = {};
var myFunction2 = function(param1, param2) {
   // set via apply(), this points to myObject when function is invoked
   this.foo = param1;
   this.bar = param2;
   console.log(this) // logs Object {foo = 'foo', bar = 'bar'}
};
myFunction2.apply(myObject2, ['foo', 'bar']); // invoke function, set this value 
console.log(myObject) // logs Object {foo = 'foo', bar = 'bar'}
