/**
 * Using the this Keyword Inside a User-Defined Constructor Function
 * @param name - person name or default: 'john doe'
 */

var Person = function(name) {
  this.name = name || 'john doe'; // this will refer to the instance created
}
var cody = new Person('Cody Lindley'); /* create an instance, based on Person constructor */
console.log(cody.name); // logs 'Cody Lindley'

/**
 * Had we not used the new keyword, the value of this would be the context in which Person is invoked—in this case the head object. 
 * Let’s examine this scenario.
 */

var cody2 = Person('Cody Lindley'); // notice we did not use 'new'
console.log(cody2.name); // undefined, the value is actually set at window.name
console.log(window.name); // logs 'Cody Lindley'
