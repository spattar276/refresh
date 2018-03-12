
var user={
  name :"Soumya",
  getUserName: function(){
   return this.name
  }
}

var obj={
  name :"Sri",
  getUserName: function(){
    return this.name+"Panchal"
  }
}
var superuser = function(someText){
  console.log("this is "+ this.getUserName()+ " ,"+ someText)
}


superuser.call(user, "Pattar");
superuser.call(obj, "MySON");

var a = user.getUserName.bind(obj)
var b= obj.getUserName.bind(user)
console.log("Binding----for a: " + a(), "Binding----for b: " + b())


//Spread operator
let  myArray = [5, 10, 15];
Math.max(myArray) //NaN as, Math.max accepts only numbers

Math.max.apply(Math, myArray) // 15;
Math.max(...a)// 15;


function myFunction(...options) {
     return options;
}
myFunction('a', 'b', 'c');      // ["a", "b", "c"]
