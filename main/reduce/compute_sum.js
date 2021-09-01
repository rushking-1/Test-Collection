'use strict';

function calculate_elements_sum(collection) {
  var num=0;
  for(var i=0;i<collection.length;i++)
  {
    num+=Number(collection[i])
  }
  return num;//在这里写入代码
}

module.exports = calculate_elements_sum;

