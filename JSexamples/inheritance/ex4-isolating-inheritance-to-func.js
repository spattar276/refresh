//Inheritance - 4: Isolating inheritance to a function
//class A
function superDataStore(){ }
superDataStore.prototype.rows = [[11,11,11], [21,22,23]];
superDataStore.prototype.columns= ['c1', 'c2', 'c3'];
superDataStore.prototype.getColumns = function(){
  return this.columns;
}
superDataStore.prototype.getRows = function(){
  return this.rows;
}
//class AB
function groupedDataStore(){ }

//extends function isolating the inheritance
function extend(Child, Parent){
  var F = function(){};
  F.prototype = Parent.prototype;
  Child.prototype =  new F();
  Child.prototype.constructor = Child;
}

extend(groupedDataStore, superDataStore);
var gds1 = new groupedDataStore();

/* Advantages:
* - cleane code in case of repetative inheritance-related tasks
*/


//Copy the properties
function extend2(Child, Parent) {
     var p = Parent.prototype;
     var c = Child.prototype;
     for (var i in p) {
       c[i] = p[i]; }
     }
}
var A = function(){}, B = function(){};
A.prototype.stuff = [1,2,3];
A.protoype.name = "a";
extend2(B,A)

B.prototype.hasOwnProperty('name') // true
B.prototype.hasOwnProperty('stuff') //true
B.prototype.stuff === A.prototype.stuff //true
B.prototype.name += 'b' //'ab'
A.prototype.name //'a' : bcoz - name is primitive property , a new copy of it is created

B.prototype.stuff.push(4,5) //[1,2,3,4,5]
A.prototype.stuff ////[1,2,3,4,5] - bcoz array is copied by reference.

B.prototype.stuff = ['a', 'b', 'c'] //['a', 'b', 'c'] // variable and properties just point to a location
A.prototype.stuff //[1,2,3,4,5]
