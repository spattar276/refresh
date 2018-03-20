//Inheritance - 3: Inherit from a temporary new constructor
//class A
function superDataStore(){

}
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
// new empty function
var F = function(){};
F.prototype = superDataStore.prototype
groupedDataStore.prototype =  new F();
groupedDataStore.prototype.constructor = groupedDataStore

var gds1 = new groupedDataStore();
var s1 = new superDataStore();
//console.log(gds1)
groupedDataStore.prototype.columns = ['a1','a2','a3'];
gds1.getColumns(); //['a1','a2','a3']
s1.getColumns(); // ['c1', 'c2', 'c3']
gds1.__proto__ // superDataStore object
gds1.__proto__.constructor //groupedDataStore object

/* Advantages:
* - only properties and method added to prototype should be inherited.
* - own proprerties should not be inherited.

*/
