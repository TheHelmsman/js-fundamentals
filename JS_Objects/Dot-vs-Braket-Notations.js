// create cody Object() object
var cody = new Object();

// setting properties
cody.living = true;
cody.age = 33;
cody.gender = 'male';
cody.getGender = function() {
  return cody.gender;
};

// getting properties
console.log( 
  cody.living,
  cody.age,
  cody.gender,
  cody.getGender()
); // logs 'true 33 male male'

// updating properties, exactly like setting
cody.living = false;
cody.age = 99;
cody.gender = 'female';
cody.getGender = function() {
  return 'Gender = ' + cody.gender;
};
console.log(cody);

// creating cody Object() object
var cody = new Object();

// setting properties
cody['living'] = true;
cody['age'] = 33;
cody['gender'] = 'male';
cody['getGender'] = function() {
  return cody.gender;
};

// getting properties
console.log( 
  cody['living'],
  cody['age'],
  cody['gender'],
  cody['getGender']() // just slap the function invocation on the end!
); // logs 'true 33 male male'

// updating properties, very similar to setting
cody['living'] = false;
cody['age'] = 99;
cody['gender'] = 'female';
cody['getGender'] = function() {
    return 'Gender = ' + cody.gender;
};
console.log(cody);