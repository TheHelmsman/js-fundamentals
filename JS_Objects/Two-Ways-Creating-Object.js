var cody = new Object();
cody.living = true;
cody.age = 33;
cody.gender = 'male';
cody.getGender = function() {return cody.gender;};
console.log(cody); // logs cody object and properties


//  This is actually the preferred syntax for creating objects in JavaScript because of its terseness and readability.
var cody2 = {
  living: true,
  age: 23,
  gender: 'male',
  getGender: function() {return cody.gender;}
};
// notice the last property has no comma after it
console.log(cody2); // logs cody object and properties