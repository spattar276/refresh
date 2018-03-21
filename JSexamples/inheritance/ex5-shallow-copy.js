//inheriting from Objects - shallow copy

function extendCopy (p){
  var c = {}
  for (var i in p){
    c[i]=p[i]
  }
  return c;
}

var shape = {
    name: 'shape',
    toString: function() {return this.name;}
}

var twoDshape = extendCopy(shape)

//Deepycopy
/*Loop through all the properties and copy them one by one.
* Only when a property of object is encountered, we call deepcopy again*/

function deepCopy(p, c){
  var c = c || {};
  for (var i in p){
    if (typeof p[i] === 'object'){
      c[i] = (p[i].constructor === Array) ? [] : {};
      deepCopy (p[i], c[i])
    }else{
      c[i] = p[i];
    }
  }
  return c;
}

var parent = {
   numbers: [1, 2, 3],
   letters: ['a', 'b', 'c'],
   obj: {
     prop: 1
   },
   bool: true
 };

var deepChild = deepCopy (parent);
var shallowCopy = extendCopy (parent)

deepChild.numbers.push(4,5,6) // [1,2,3,4,5,6]

myshallow.numbers.push(10 )//[1,2,3,10]
parent.numbers //[1,2,3,10]
