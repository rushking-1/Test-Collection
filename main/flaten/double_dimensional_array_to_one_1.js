'use strict';

function double_to_one(collection) {
  var arr=[];
  var arr= [].concat.apply([], collection);
  return arr;
  //在这里写入代码
}

module.exports = double_to_one;
