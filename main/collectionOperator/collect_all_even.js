'use strict';

function collect_all_even(collection) {
  var ar=[];
  for (var i = 1; i < collection.length; i++) {
    if(i % 2 == 0) {
   ar.push(collection[i-1]);
    }
  }
  return ar;//在这里写入代码
}
module.exports = collect_all_even;
