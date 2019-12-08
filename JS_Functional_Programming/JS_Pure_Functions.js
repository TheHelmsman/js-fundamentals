/**
 * The following function is pure
 * 
 * It can be run multiple times, always getting the same result
 */

 const addPure = (x, y) => x + y

 /**
  * The following function is not pure
  * 
  * Running the function twice with same arguments we get two different results
  */

  let x = 0
  const addNotPure = y => (x = x + y)
