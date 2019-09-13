var countDownFrom = function countDownFrom(num) {
  console.log(num);
  num--; // change the parameter value
  if (num < 0){return false;} // if num < 0 return function with no recursion 
  // could have also done arguments.callee(num) if it was an anonymous function 
  countDownFrom(num);
};

countDownFrom(5);
