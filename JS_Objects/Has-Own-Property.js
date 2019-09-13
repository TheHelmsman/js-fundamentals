
var myObject = {foo: 'value'};
console.log('foo' in myObject); // logs true

/**
 * While the in operator can check for properties of an object, including properties from the prototype chain, 
 * the hasOwnProperty method can check an object for a property that is not from the prototype chain.
 */

var myObject = {foo: 'value'};
console.log(myObject.hasOwnProperty('foo')); // logs true
// vs. a property from the prototype chain
console.log(myObject.hasOwnProperty('toString')); // logs false

/**
 * The hasOwnProperty method should be leveraged when you need to determine whether
 * a property is local to an object or inherited from the prototype chain.
 */