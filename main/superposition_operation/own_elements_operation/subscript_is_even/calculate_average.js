'use strict';
var calculate_average = function(collection){
  var arr=[];
  for(var k=0;k<collection.length;k++){
    if(collection[k]%2==0){
      arr.push(collection[k]);
    }
  }
  var j=0;
  for(var i=0;i<arr.length;i++){
    j=parseInt(arr[i])+j;
  }
  var aver=parseInt(j/arr.length);
  return aver;
};
module.exports = calculate_average;
