let promise = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("promise - done"), 1000);
  // after 2 seconds signal that the job is finished with an error
  setTimeout(() => reject(new Error("promise - Whoops!")), 2000);

  /**
   * The executor should call only one resolve or one reject. Any state change is final.
   * All further calls of resolve and reject are ignored:
   */
  // reject(new Error("…")); // ignored
  // setTimeout(() => resolve("…")); // ignored
});

// resolve(value) — if the job finished successfully, with result value.
// reject(error) — if an error occurred, error is the error object.

/**
 * Consumers: then, catch, finally
 */

let promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("promise2 - done!"), 1000);
  setTimeout(() => reject(new Error("promise2 - Whoops!")), 2000);
});

/**
 * The first argument of .then is a function that runs when the promise is resolved, and receives the result.
 * The second argument of .then is a function that runs when the promise is rejected, and receives the error.
 */
promise2.then(
  result => console.log('promise2 - '+result), // shows "done!" after 1 second
  error => console.log('promise2 - '+error) // doesn't run
);

/**
 * If we’re interested only in errors, then we can use null as the first argument: .then(null, errorHandlingFunction). 
 * Or we can use .catch(errorHandlingFunction), which is exactly the same:
 */
let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("promise3 - Whoops!")), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promise3.catch(err => console.log('promise3 - '+err)); // shows "Error: Whoops!" after 1 second

/**
 * The call .finally(f) is similar to .then(f, f) in the sense that f always runs when the promise is settled: be it resolve or reject.
 * finally is a good handler for performing cleanup, e.g. stopping our loading indicators, as they are not needed anymore, no matter what the outcome is.
 */
new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise4 - result"), 2000)
})
.finally(() => console.log("Promise4 ready"))
.then(result => console.log('promise4 - '+result)); // <-- .then handles the result

new Promise((resolve, reject) => {
  throw new Error("promise5 - error");
})
.finally(() => console.log("promise5 - Promise ready"))
.catch(err => console.log('promise5 - '+err));  // <-- .catch handles the error object