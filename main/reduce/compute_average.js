'use strict';

function compute_average(collection) {
  var j=0
  for(var i=0;i<collection.length;i++)
  {
    j=collection[i]+j;

  }
  return j/collection.length;
  //在这里写入代码
}

module.exports = compute_average;

