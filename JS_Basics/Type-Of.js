// primitive values
var myNull = null;
var myUndefined = undefined;
var primitiveString1 = "string";
var primitiveString2 = String('string');
var primitiveNumber1 = 10;
var primitiveNumber2 = Number('10');
var primitiveBoolean1 = true;
var primitiveBoolean2 = Boolean('true');

console.log(typeof myNull);                                         // logs object? WHAT? Be aware... 
console.log(typeof myUndefined);                                    // logs undefined 
console.log(typeof primitiveString1, typeof primitiveString2);      // logs string string
console.log(typeof primitiveNumber1, typeof primitiveNumber2);      // logs number number
console.log(typeof primitiveBoolean1, typeof primitiveBoolean2);    // logs boolean boolean

// Complex Values
var myNumber = new Number(23);
var myString = new String('male');
var myBoolean = new Boolean(false);
var myObject = new Object();
var myArray = new Array('foo', 'bar');
var myFunction = new Function("x", "y", "return x * y");
var myDate = new Date();
var myRegExp = new RegExp('\\bt[a-z]+\\b');
var myError = new Error('Crap!');

console.log(typeof myNumber);                                       // logs object
console.log(typeof myString);                                       // logs object
console.log(typeof myBoolean);                                      // logs object
console.log(typeof myObject);                                       // logs object
console.log(typeof myArray);                                        // logs object
console.log(typeof myFunction);                                     // logs function? WHAT? Be aware... 
console.log(typeof myDate);                                         // logs object
console.log(typeof myRegExp);                                       // logs function? WHAT? Be aware... 
console.log(typeof myError);                                        // logs object