//Inheritance - 2: Inherit the prototype
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

groupedDataStore.prototype = superDataStore.prototype; // copy the prototype
groupedDataStore.prototype.constructor = groupedDataStore;

var gds1 = new groupedDataStore()

//console.log(gds1)
groupedDataStore.prototype.columns = ['a1','a2','a3'];
gds1.getColumns(); //['a1','a2','a3'] and not ['c1', 'c2', 'c3'] as it overides

/* Adavantages:
* - Having lesser look ups in run time for toString methods/ native object methods
* - not creating new Object for sake of inheritance, adding all th reusable code to protoytpe

* Disadvantage:
 - Since all the children and parent point to the same object, if child modifies
   protoype, parent gets thatand so do the siblings
*/
