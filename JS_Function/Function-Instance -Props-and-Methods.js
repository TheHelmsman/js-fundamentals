var myFunction = function(x, y, z) {}

//  instance properties
console.log(myFunction.length);
console.log(myFunction.constructor);
console.log(myFunction.arguments);

//  instance methods:
console.log(myFunction.toString());

/*  
  call()
The call() method calls a function with a given this value and arguments provided individually.
*/
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);  // expected output: "cheese"

/*  
  apply()
The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
*/
var numbers = [5, 6, 2, 3, 7];
var max = Math.max.apply(null, numbers);

console.log(max); // expected output: 7

var min = Math.min.apply(null, numbers);

console.log(min); // expected output: 2

/*
  bind()
The bind() method creates a new function that, when called, has its this keyword set to the provided value, 
with a given sequence of arguments preceding any provided when the new function is called.
*/
var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

var unboundGetX = module.getX;
// The function gets invoked at the global scope
console.log(unboundGetX()); // expected output: undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX()); // expected output: 42