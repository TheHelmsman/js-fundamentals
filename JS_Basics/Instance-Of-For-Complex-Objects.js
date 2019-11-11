// user-defined object constructor
var CustomConstructor = function() {
  this.foo = 'bar';
};

// instantiate an instance of CustomConstructor
var instanceOfCustomObject = new CustomConstructor(); 
console.log(instanceOfCustomObject instanceof CustomConstructor); // logs true

// works the same as a native object
console.log(new Array('foo') instanceof Array) // logs true
