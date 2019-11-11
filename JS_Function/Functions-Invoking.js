// function pattern
var myFunction = function(){
  return 'foo'
}; 
console.log(myFunction());              // log 'foo'

// method pattern
var myObject = {
  myFunction: function(){
    return 'bar';
  }
} 
console.log(myObject.myFunction());     // log 'bar'

// constructor pattern
var Cody = function(){
  this.living = true;
  this.age = 33;
  this.gender = 'male';
  this.getGender = function() {
    return this.gender;
  };
}

var cody = new Cody(); // invoke via Cody constructor 
console.log(cody); 

// logs cody object and properties
// apply() and call() pattern
var greet = {
  runGreet: function(){
    console.log(this.name, arguments[0], arguments[1]);
  }
}
var cody = {name:'cody'};
var lisa = {name:'lisa'};

// invoke the runGreet function as if it were inside of the cody object 
greet.runGreet.call(cody,'foo','bar'); // logs 'cody foo bar'

// invoke the runGreet function as if it were inside of the lisa object
greet.runGreet.apply(lisa, ['foo','bar']); // logs 'lisa foo bar'