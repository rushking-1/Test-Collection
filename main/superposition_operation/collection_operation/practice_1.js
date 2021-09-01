'use strict';

function hybrid_operation(collection) {
  var j=0;
for(var i=0;i<collection.length;i++){
  collection[i]=collection[i]*3+2;
   j=parseInt(collection[i])+j;
}
return j;
  //在这里写入代码
}

module.exports = hybrid_operation;

