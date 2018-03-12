function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12

//Q1
var x ={a:10, b:20};
var y= x;
y.a=y.a+1;
console.log(x);
console.log(y);

//Q2

function A(name){
  this.name = name;

}
A.prototype.getname = function(){
    return this.name
  }
function B(age){
  this.age = age;
  this.getage = function(){
    return this.age
  }
}
B.prototype = new A("Soumya");
var a = new A("Pattar");
var b  = new B(12);

console.log(a.getname(),
            b.getage(),
            b.getname(),
            b.hasOwnProperty("name"),
            b.hasOwnProperty("age"),
           )


//Q3: Inherit properties of A from Bs
function A(a) {
  this.varA = a;
}
A.prototype = {
  varA: null,
  doSomething: function() {
    // ...
  }
};

function B(a, b) {
   A.call(this, a);
  this.varB = b;
}
B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;

var b = new B("A1", "A2");
console.log(b.varA)

//Q4: Contructors
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

var h = new Hero("Herao1", 12)
console.log(h.constructor, h)

//ƒ Hero(name, level) {
  //this.name = name;
//  this.level = level;
//},
// Hero {name: "Herao1", level: 12, __proto__:Object}
