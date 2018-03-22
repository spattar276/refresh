console.log(null+1) //1
console.log(null/1) //0
console.log("98"/1) //98
console.log("98n"/1) //NaN
1=="1"; 1===1
parseInt("A", 10); parseInt("A", 11)
/*-------*/
function p(){
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
console.log(trees.length);

var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
trees.splice(3,1);
console.log(trees);


var obj = { foo: 'a', bar: 'b' };
obj.foo = undefined;
Object.keys(obj) //?

delete obj.foo
Object.keys(obj)


var obj = {};
Object.defineProperty(obj, 'canBeDeleted', {
    value: 123,
    configurable: true
});
Object.defineProperty(obj, 'cannotBeDeleted', {
    value: 456,
    configurable: false
});
delete obj.cannotBeDeleted //?
delete obj.canBeDeleted //?

delete obj.toString //?

 var obj = { someProperty: 'abc' };
obj['some' + 'Property'] //?

/*HOw to compare 2 objects*/
var a= {}; var b= {}
a.constructor === b.constructor


/**/
