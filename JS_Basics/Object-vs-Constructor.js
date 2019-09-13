// create a codyA object using the Object() constructor
var codyA = new Object();
codyA.living = true;
codyA.age = 33;
codyA.gender = 'male';
codyA.getGender = function() {return codyA.gender;};
console.log(codyA); // logs Object {living=true, age=33, gender="male", ...}

/* Person is a constructor function. It was written with the intent of being used
with the new keyword. */
var Person = function Person(living, age, gender) {
  /* "this" below is the new object that is being created
     (i.e., this = new Object();) */
  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender = function() {return this.gender;};
  /* when the function is called with the new keyword "this" is returned
  instead of undefined */
};
    // instantiate a Person object named cody
var cody = new Person(true, 33, 'male');
// cody is an object and an instance of Person()
console.log(typeof cody); // logs object
console.log(cody); // logs the internal properties and values of cody
console.log(cody.constructor); // logs the Person() function