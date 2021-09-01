'use strict';

function amount_even(collection) {
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
  return j;
  //在这里写入代码
}

module.exports = amount_even;
