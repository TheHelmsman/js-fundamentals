/**
 * There are typically two ways to reference the head object. 
 * The first way is to simply reference the name given to the head object 
 * (e.g., in a web browser this would be window). 
 * The second way is to use the this keyword in the global scope. 
 * Each of these are detailed in the code below.
 */

var foo = 'bar';
windowRef1 = window; 
windowRef2 = this;

console.log(windowRef1, windowRef2);          // logs reference to window object
console.log(windowRef1.foo, windowRef2.foo);  // logs 'bar', 'bar'

/**
 * The Head Object Is Implied and Typically Not Referenced Explicitly
 */
var foo = {                                   // window is implied here, window.foo
  fooMethod: function() {
    alert('foo' + 'bar');                     // window is implied here, window.alert
    /* window is explicitly used, with the same effect */
    window.alert('foo' + 'bar');
  } 
}

/**
 * Being explicit [e.g., window.alert() versus alert()] costs a little bit more with regards to performance (how fast the code runs). 
 * It’s faster if you rely on the scope chain alone and avoid explicitly referencing the head object even if you know the property you want is contained in the global scope.
 */