var myObject = {};
var copyOfMyObject = myObject; /* not copied by value,
just the reference is copied */
myObject.foo = 'bar'; // manipulate the value stored in myObject
    /* Now if we log myObject and copyOfMyObject, they will have a foo property
    because they reference the same object. */
  console.log(myObject, copyOfMyObject); /* logs 'Object { foo="bar"}
                                          Object { foo="bar"}' */

console.log('---');
var objectFoo = {same: 'same'};
var objectBar = {same: 'same'};
/* logs false, JS does not care that they are identical
and of the same object type */
console.log(objectFoo === objectBar);
// how complex objects are measured for equality
var objectA = {foo: 'bar'};
var objectB = objectA;
console.log(objectA === objectB); /* logs true because they reference the same object */