'use strict';
function map_to_even(collection){
  var arr=[];
  for(var i=0;i<collection.length;i++)
  {
    arr[i]=collection[i]*2;
  }
  return arr;
}
module.exports = map_to_even;
