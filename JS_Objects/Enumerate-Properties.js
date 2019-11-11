var cody = {
  age : 23,
  gender : 'male'
};

for (var key in cody) { 
  // key is a variable used to represent each property name 
  // avoid properties inherited from the prototype chain
  if(cody.hasOwnProperty(key)) {
    console.log(key);
  } 
}