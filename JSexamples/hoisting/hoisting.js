/* https://scotch.io/tutorials/understanding-hoisting-in-javascript
Hoistng:
 - is a mechanism where variables and functions are moved to the top of their scope before code execution.

*/


/*
Order Of Precedence:
- Variable assignment takes precedence(are hoisted) over function declaration
*/
var double = 22;

function double(num) {
  return (num*2);
}

console.log(typeof double); // Output: number

/*Order Of Precedence:
- Function declarations are hoisted over variable declarations
*/
var double;

function double(num) {
  return (num*2);
}

console.log(typeof double); // Output: function
