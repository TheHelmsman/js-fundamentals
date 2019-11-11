/**
 * Notice how inside of the getGender function, we are accessing the gender property using dot notation 
 * (e.g., cody.gender) on the cody object itself. 
 * This can be rewritten using this to access the cody object because this points to the cody object.
 */
var cody = {
  living : true,
  age : 23,
  gender : 'male',
  getGender : function() {
    return cody.gender;
  }
};
console.log(cody.getGender()); // logs 'male'

var cody2 = {
  living: true,
  age: 23,
  gender: 'male',
  getGender: function() {
    return this.gender;
  }
};
console.log(cody2.getGender()); // logs 'male'

/**
 * Clearly, the value of this is based on the context in which the function is being called.
 */
var foo = 'foo';
var myObject = {
  foo: 'I am myObject.foo'
};
var sayFoo = function() { 
  console.log(this['foo']);
};
// give myObject a sayFoo property and have it point to sayFoo function
myObject.sayFoo = sayFoo;
myObject.sayFoo(); // logs 'I am myObject.foo' 
sayFoo(); // logs 'foo'