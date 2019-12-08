/**
 * In Functional programming (FP) a function instead of changing the value
 * of a variable, creates a new variable with a new value and returns it.
 * 
 * This way if working with data is called immutability
 */

 /**
  * The following function doesn't follow immutability
  * Because it changes the value of a given array
  */
const add3 = arr => arr.push(3)
const myArr = [1, 2]
console.log(add3(myArr))
console.log(add3(myArr))

 /**
  * We can change it to be immutable using concat
  */
const add4 = arr => arr.concat(3)
const myArr2 = [1, 2]
console.log(add4(myArr2))
console.log(add4(myArr2))
