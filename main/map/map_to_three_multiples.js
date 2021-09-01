'use strict';
var map_to_three_multiples = function(collections){
  var arr=[];
  for(var i=0;i<collections.length;i++)
  {
    arr[i]=collections[i]*3;
  }
  return arr;
};

module.exports = map_to_three_multiples;
