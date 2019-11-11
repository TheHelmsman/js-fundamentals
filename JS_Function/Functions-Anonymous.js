// function(){console.log('hi');}; 
// anonymous function, but no way to invoke it

// create a function that can invoke our anonymous function
var sayHi = function(f){
  f(); // invoke anonymous function
}

// pass an anonymous function as parameter 
sayHi(function(){
  console.log('hi');
}); // log 'hi'