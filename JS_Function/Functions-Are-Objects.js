/**
 * In JavaScript, functions are objects. 
 * This means that a function can be stored in a variable, array, or object. 
 * Also, a function can be passed to, and returned from, a function. 
 * A function has properties because it is an object.
 */

/* 
functions can be stored in variables (funcA), arrays (funcB), and objects (funcC) 
*/
var funcA = function() {};              // called like so: funcA()
var funcB = [function() {}];            // called like so: funcB[0]()
var funcC = {
   method: function() {}
};                                     // too.method() or funcC['method']()

// functions can be sent to, and sent back from, functions
var funcD = function(func){
   return func
};

var runFuncPassedToFuncD = funcD(function(){
   console.log('Hi');
});
runFuncPassedToFuncD();

// functions are objects, which means they can have properties
var funcE = function() {};
funcE.answer = 'yup';                  // instance property
console.log(funcE.answer);             // logs 'yup'