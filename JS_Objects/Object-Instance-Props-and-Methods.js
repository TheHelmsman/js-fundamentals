//  Object() object instances have the following properties and methods:
var myObject = {
  foo: 'Woohoo'
};

//  Instance Properties
console.log(myObject.constructor);

//  Instance Methods
console.log(myObject.hasOwnProperty('foo'));
console.log(myObject.isPrototypeOf());
console.log(myObject.propertyIsEnumerable('foo'));
console.log(myObject.toLocaleString());
console.log(myObject.toString());
console.log(myObject.valueOf());

/**
 * The Object() constructor function in JavaScript is special, as its prototype property is the last stop in the prototype chain.
 */
Object.prototype.foo = 'foo';
var myString = 'bar';
// logs 'foo', being found at Object.prototype.foo via prototype chain
console.log(myString.foo);