var myNumber = new Number('23');
var myNumberL = 23; // literal shorthand
var myString = new String('male');
var myStringL = 'male'; // literal shorthand
var myBoolean = new Boolean('true');
var myBooleanL = true; // literal shorthand
var myObject = new Object();
var myObjectL = {}; // literal shorthand
var myArray = new Array();
var myArrayL = []; // literal shorthand
var myFunction = new Function();
var myFunctionL = function() {}; // literal shorthand
var myDate = new Date();
var myRegExp = new RegExp('/./');
var myRegExpL = /./; // literal shorthand
var myError = new Error();
console.log( // all of these return true
   myNumber.constructor === Number,
   myNumberL.constructor === Number,
   myString.constructor === String,
   myStringL.constructor === String,
   myBoolean.constructor === Boolean,
   myBooleanL.constructor === Boolean,
   myObject.constructor === Object,
   myObjectL.constructor === Object,
   myArray.constructor === Array,
   myArrayL.constructor === Array,
   myFunction.constructor === Function,
   myFunctionL.constructor === Function,
   myDate.constructor === Date,
   myRegExp.constructor === RegExp,
   myRegExpL.constructor === RegExp,
   myError.constructor === Error
);

var CustomConstructor = function CustomConstructor(){ return 'Wow!'; };
var instanceOfCustomObject = new CustomConstructor();
// logs true
console.log(instanceOfCustomObject.constructor === CustomConstructor);
// returns a reference to CustomConstructor() function // returns 'function() { return 'Wow!'; };' console.log(instanceOfCustomObject.constructor);
