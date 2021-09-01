'use strict';

function double_to_one(collection) {
  var arr=[];
  var arr= [].concat.apply([], collection);
  var a=[];
  var a= arr.filter(function(x,item,arr){

    return arr.indexOf(x) ===item;
  })
  return a;
  //在这里写入代码
}

module.exports = double_to_one;
