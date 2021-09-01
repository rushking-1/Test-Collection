'use strict';

function choose_no_repeat_number(collection) {
  var a=[];
  var a = collection.filter(function(x,item,collection){

          return collection.indexOf(x) ===item;
        })
return a;
  //在这里写入代码
}

module.exports = choose_no_repeat_number;
