var twoD = {
  name: '2D shape',
  dimensions: 2
};

function triangle(s,h){
  var that = object(twoD);
  that.name = "triangle";
  that.getArea = fucntion(){ return this.side * this.height /2}
  that.side = s;
  that.height= h;
  return;
}

var t = triangle(5,10)
t.dimensions;

var t2 = new triangle(5,5);
t2.getArea();
