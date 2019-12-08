/**
 * A common technique in FP is currying.
 * Currying is the process of converting a function that
 * takes multiple arguments into a function that takes one
 * argument at a time, returning another function.
 */

 /**
  * Insteat of writing:
  */
const add = (x, y) => x + y

 /**
  * We define the function like:
  */
const addCurry = x => y => x + y
const add1 = addCurry(1)
console.log(add1(2))
console.log(add1(3))