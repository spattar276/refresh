//Inheritance - 1: Protoype chaining
//class A
function superDataStore(row, column){
  this.rows= row;
  this.columns= column;
  this.getColumns = function(){
    return this.columns;
  }
  this.getRows = function(){
    return this.rows;
  }
}

//class AB
function groupedDataStore(){

}
groupedDataStore.prototype = new superDataStore(); // AB is inheriting properties from A
var gds1 = new groupedDataStore();
console.log("gds1 :  ", gds1, "Columns:   ", gds1.getColumns())

groupedDataStore.prototype = new superDataStore([[11,11,11], [21,22,23]], ['c1', 'c2', 'c3']);
var gds2 = new groupedDataStore();
console.log("gds2 :  ", gds2, "Columns:   ", gds2.getColumns())
/*on overiding the prototype, it has negative side effects on the constructor properties.
*Hence we need to reset the constructor after inheriting
*/
//groupedDataStore.prototype = new superDataStore(); // undefined
groupedDataStore.prototype = new superDataStore([[11,11,11], [21,22,23]], ['c1', 'c2', 'c3']);
groupedDataStore.prototype.constructor = groupedDataStore;
var gds3 = new groupedDataStore();
console.log("gds3 :  ", gds3, "Columns:   ", gds3.getColumns())
