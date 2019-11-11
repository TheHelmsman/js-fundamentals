/* no object is created when producing primitive values, notice no use of the "new" keyword */
var primitiveString1 = "foo";
var primitiveString2 = String('foo');
var primitiveNumber1 = 10;
var primitiveNumber2 = Number('10'); var primitiveBoolean1 = true;
var primitiveBoolean2 = Boolean('true');
// confirm the typeof is not object
console.log(typeof primitiveString1, typeof primitiveString2);
console.log(typeof primitiveNumber1, typeof primitiveNumber2);
console.log(typeof primitiveBoolean1, typeof primitiveBoolean2);

console.log('++++++++++++++++++++++++++++++++++++++++');

var myNumber = new Number(23); // an object
var myNumberLiteral = 23; // primitive number value, not an object 
var myString = new String('male'); // an object
var myStringLiteral = 'male'; // primitive string value, not an object 
var myBoolean = new Boolean(false); // an object
var myBooleanLiteral = false; // primitive boolean value, not an object 
var myObject = new Object();

// verify that literals are created from same constructor
console.log(myNumber.constructor, myNumberLiteral.constructor);
console.log(typeof myNumber + ' ' + typeof myNumberLiteral);
console.log(myString.constructor,myStringLiteral.constructor);
console.log(typeof myString + ' ' + typeof myStringLiteral);
console.log(myBoolean.constructor,myBooleanLiteral.constructor);
console.log(typeof myBoolean + ' ' + typeof myBooleanLiteral);

console.log('++++++++++++++++++++++++++++++++++++++++');

var myString = 'foo' // create a primitive string object
var myStringCopy = myString; // copy its value into a new variable
var myString = null; // manipulate the value stored in the myString variable
/* 
The original value from myString was copied to myStringCopy. 
This is confirmed by updating the value of myString then checking the value of myStringCopy 
*/
console.log(myString, myStringCopy); // logs 'null foo'

var price1 = 10;
var price2 = 10;
var price3 = new Number('10'); // a complex numeric object because new was used
var price4 = price3;

// logs TRUE
console.log(price1 === price2); 

/* logs FALSE because price3 contains a complex number object and price 1 is a primitive value */
console.log(price1 === price3);

// logs TRUE because complex values are equal by reference, not value
console.log(price4 === price3);

// what if we update the price4 variable to contain a primitive value?
price4 = 10;

/* logs FALSE: price4 is now primitive rather than complex */
console.log(price4 === price3); 