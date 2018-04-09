
/*
* 1.Find the duplicates in an Array, [1, 2, 3, 1, 2, 1]
*/

function findDuplicates(iarr){
  let result=[];
  iarr.forEach(function(element, index){
    // Find if there is a duplicate or not
    if(iarr.indexOf(element, index+1) > -1){
       // Find if the element is already in the result array or not
      if(result.indexOf(element) === -1){
        result.push(element)
      }
    }
  });
  return result;
}

console.log(findDuplicates([1, 2, 3, 1, 2, 1])) //[1,2]
/*
* 2. Find the frequency of the duplicates in an Array
*/
var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
var arr2 =[ "dog", "dog", "cat", "buffalo", "wolf", "cat", "tiger", "cat"];

function frequencyNum(){
  var count = {}, finalArr=[];
  for (var i=0; i< arr.length; i++){
    num=arr[i];
    count[num] = count[num]? count[num]+1 :1
  }
  for (var j in count){
    var x={};
    x.number = j;
    x.frequecy = count[j];
    finalArr.push(x);
  }
  return finalArr
}
console.log(frequencyNum(arr2))
