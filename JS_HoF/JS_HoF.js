/**
 * HoFs are functions that take a function as a parameter,
 * optionally some other parameters, and return a function
 * 
 * The returned function is usually enhanced with some special behaviors
 * 
 * in the React world, a common pattern is use Higher-order Components (HoC)
 * treating components as functions and enchancing them with common behaviors
 */

const add = (x, y) => x + y

const log = func => (...args) => {
    console.log(...args)
    return func(...args)
}

const logAdd = log(add)

console.log(logAdd(2, 2))
