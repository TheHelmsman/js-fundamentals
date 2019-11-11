/**
 * in ES3, this loses its way and refers to the head object (window object in browsers), 
 * instead of the object within which the function is defined.
 * The good news is that this will be fixed in ES5.
 */


var myObject = {
  func1: function() {
    console.log(this); // logs myObject 
    var func2 = function() {
      console.log(this) // logs window, and will do so from this point on 
      var func3 = function() {
        console.log(this); // logs window, as it's the head object 
      }();
    }(); 
  }
}

myObject.func1();

/**
 * Now you will never forget: the this value will always be a reference to the head object when 
 * its host function is encapsulated inside of another function or invoked within the context of another function 
 * (again, this is fixed in ES5).
 */

var foo = {
  func1:function(bar) {
    bar(); // logs window, not foo
    console.log(this); /* the this keyword here will be a reference to foo object */
  }
}

foo.func1(function(){ 
  console.log(this) 
});