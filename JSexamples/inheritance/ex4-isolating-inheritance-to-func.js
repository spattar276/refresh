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
