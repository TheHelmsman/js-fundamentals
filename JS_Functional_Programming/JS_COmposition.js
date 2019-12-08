/**
 * Functions (and Components in React) can be combined to produce
 * new functions with more advanced features and properties
 */
const add = (x, y) => x + y
const square = x => x * x

/**
 * The functions above can be composed together to create a new
 * function that adds two numbers and then doubles the result
 */
const addAndSquare = (x, y) => square(add(x, y))