'use strict';

function choose_divisible_integer(collection_a, collection_b) {
var arr=[];
var num=collection_a.length;
var ber=collection_b.length;
for(var i=0;i<num;i++)
{
  for(var w=0;w<ber;w++)
  {
    if(collection_a[i] % collection_b[w] == 0)
      arr.push(collection_a[i]);
  }
}
 return arr; //在这里写入代码
}

module.exports = choose_divisible_integer;
