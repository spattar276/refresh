console.log(null+1)
console.log(null/1)
console.log("98"/1)
console.log("98n"/1)
1=="1"; 1===1
parseInt("A", 10); parseInt("A", 11)
/*-------*/
fucntion p(){
  console.log(x)
  var x=10;
  console.log(x)
}
p();
/*-------*/
var Employee = {};
Object.defineProperty(Employee, 'name', {configurable: false});
console.log(delete Employee.name);
Object.defineProperty(Employee, 'name', {configurable: true});
console.log(delete Employee.name);

var nameOther = 'XYZ';
Object.getOwnPropertyDescriptor(window, 'nameOther');
delete nameOther;

function Foo() {
  this.bar = 10;
}
Foo.prototype.bar = 42;
var foo = new Foo();
delete foo.bar ;
delete Foo.prototype.bar;

var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
delete trees[3];
console.log(trees.length)
