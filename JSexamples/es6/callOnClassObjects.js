function forIn(obj, fn, thisObj){
    var key, i = 0;
    for (key in obj) {
      if (exec(fn, obj, key, thisObj) === false) {
        break;
      }
    }
    function exec(fn, obj, key, thisObj){
      return fn.call(this, obj[key], key, obj);
    }
    return forIn
  }
  
  function Foo(){
    this.foo = 1;
    this.bar = 2;
  }
  class Foo1{
    constructor(){
      this.foo = 5;
      this.bar = 6;
    }
  }
  var obj = new Foo();
  var obj1 = new Foo1();
  var result, result1 = 0;
  var keys, keys1 = [];
  var o= {'foo':2 ,' bar' : 4}
  
  forIn(obj1, function(val, key ){
    result += val;
    keys.push([val,key]);
  }, o);

  forIn(obj, function(val, key ){
    result += val;
    keys.push([val,key]);
  }, o);
  
  console.log("-----result-----" + result, result1)
  console.log("-----keys------" , keys, keys1)
  console.log("-----obj------" , obj, obj1)
