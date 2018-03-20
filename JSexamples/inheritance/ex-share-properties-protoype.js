//class A
function superDataStore(row, column){
  this.rows= row;             // will be created as own property of the object
  this.columns= column;
}
// will be created as property on prototype, which can be shared to other instaces
// reduces the memory consumption
superDataStore.prototype.getRows = function(){
  return this.rows;
}
superDataStore.prototype.getColumns = function(){
  return this.columns;
}

//class AB
function groupedDataStore(){
  this.privatef = function(){
    console.log("I may do something in future")
  }
}

var s1 = new superDataStore({'r1':[11,11,11], 'r2': [21,22,23]}, ['c4', 'c5', 'c6'])
var s2 = new superDataStore([[11,11,11], [21,22,23]], ['c1', 'c2', 'c3']);
console.log( "s1 has own property : rows: ", s1. hasOwnProperty('rows'))
console.log( "s1 has prototype property :  getRows : ", superDataStore.prototype.isPrototypeOf(s1))
console.log( "s1 is instanceOf superDataStore  : ", s1 instanceOf superDataStore)
