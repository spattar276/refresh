//1. ES6 , how does default values for  functions work
function sum (x=1,y=2,z=3){
  return x+y+z;
}
sum(4,2)  // 4+2+3 = 9
//In ES5,
function sum(x,y,z){
  if (x === undefined){ x=1;}
  if (x === undefined){ y=2;}
  if (x === undefined){ z=3;}
  return x+y+z
}
//2.Slice and rest operators
var params = [2,3,4];
console.log(sum(...params)) // 9
console.log(sum.apply(undefined, params));

function restParamaterFunction (x, y, ...a) {
    return (x + y) * a.length;
  }

function restParamaterFunction1 (x, y) {
     var a = Array.prototype.slice.call(arguments, 2);
     return (x + y) * a.length;
};
console.log(restParamaterFunction(1, 2, "hello", true, 7)); //outputs 9;
console.log(restParamaterFunction1(1, 2, "hello", true, 7)); //outputs 9;

//3. Array destructuring : initializing variables at once
var [p,q] = ["Hi","Soumya"]
[p,q] = [q,p] //variable swapping

var hello={
  name:"Soumya",
  prinHello(){
    console.log("Hi "+ this.name);
  }
}
console.log(hello.prinHello)
