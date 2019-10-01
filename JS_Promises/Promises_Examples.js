/**
 * Example #1
 * 
 * The output is: 1.
 * The second call to resolve is ignored, because only the first call of reject/resolve is taken into account. 
 * Further calls are ignored.
 */
let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(console.log);

/**
 * Example #2
 * @param ms - time in milliseconds
 * 
 * The built-in function setTimeout uses callbacks. 
 * Create a promise-based alternative.
 * The function delay(ms) should return a promise. 
 * That promise should resolve after ms milliseconds, so that we can add .then to it, like this:
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log('runs after 3 seconds'));