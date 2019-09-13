/* function constructor: the last parameter is the function logic,
   everything before it is a parameter */
   var addConstructor = new Function('x', 'y', 'return x + y');
   // function statement
   function addStatement(x, y) {
      return x + y;
   }
   // function expression
   var addExpression = function(x, y) {
       return x + y;
   };
   console.log(addConstructor(2,2), addStatement (2,2), addExpression (2,2));
   // logs '4 4 4'