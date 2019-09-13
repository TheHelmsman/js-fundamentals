/**
 * Leveraging the Scope Chain
 */


var myObject = {

  myProperty: 'I can see the light',
  myMethod: function() {

    var that = this; /* store a reference to this (i.e., myObject) in myMethod scope */

    var helperFunction = function() { // child function

      // logs 'I can see the light' via scope chain because that = this 
      console.log(that.myProperty); 
      // logs 'I can see the light' 
      console.log(this); // logs window object, if we don't use "that"
    
    }();
  }
}

myObject.myMethod(); // invoke myMethod