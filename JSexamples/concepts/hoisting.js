/* https://scotch.io/tutorials/understanding-hoisting-in-javascript
Hoistng:
 - is a mechanism where variables and functions are moved to the top of their scope before code execution.
 - javascript lifecycle: declare, initialise/assign, usage
 - let has block level scoping
 - var has functional level scoping
 - const are immutable variables

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

/*Class declaration*/
var Frodo = new Hobbit();
Frodo.height = 100;
Frodo.weight = 300;
console.log(Frodo); // Output: ReferenceError: Hobbit is not defined

class Hobbit {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }
}
// correct way
class Hobbit {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }
}

var Frodo = new Hobbit();
Frodo.height = 100;
Frodo.weight = 300;
console.log(Frodo); // Output: { height: 100, weight: 300 }

/*Class expressions*/
var Square = new Polygon();
Square.height = 10;
Square.width = 10;
console.log(Square); // Output: TypeError: Polygon is not a constructor

var Polygon = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

/*correct way*/
var Polygon = class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

var Square = new Polygon();
Square.height = 10;
Square.width = 10;
console.log(Square);
