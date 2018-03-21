function Shape(id){
  this.id = id;
}
Shape.prototype.name = "Shape";
Shape.prototype.toString = function(){ this.name;}

function Triangle(){
  Shape.apply(this, arguments);
}
Triangle.prototype = new Shape();
Triangle.prototype.name = "Triangle"//t.toString(); [object object] to solve this we need to create a new instance of Shape

var t  = new Triangle(101)
t.name; //Triangle
t.id //101
