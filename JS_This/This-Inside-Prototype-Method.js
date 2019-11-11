/**
 * The this Keyword Inside a Prototype Method Refers to a Constructor Instance
 * When used in functions added to a constructor’s prototype property, 
 * this refers to the instance on which the method is invoked.
 */

var Person = function(x){
  if(x) { 
    this.fullName = x 
  };
};

//  When using this, the method can refer to the instance invoking it (and thus its properties).
Person.prototype.whatIsMyFullName = function(){
  return this.fullName; // 'this' refers to the instance created from Person()
}

var cody = new Person('cody lindley');
var lisa = new Person('lisa lindley');

/* 
call the inherited whatIsMyFullName method, 
which uses this to refer to the instance 
*/
console.log(cody.whatIsMyFullName(), lisa.whatIsMyFullName());

/* 
The prototype chain is still in effect, so if the instance does not have a
fullName property, it will look for it in the prototype chain. Below, we add
a fullName property to both the Person prototype and the Object prototype.
See notes. 
*/
Object.prototype.fullName = 'John Doe';

var john = new Person(); // no argument is passed, so fullName is not added to instance
console.log(john.whatIsMyFullName()); // logs 'John Doe'