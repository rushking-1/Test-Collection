'use strict';

function find_first_even(collection) {
  var index=0;
  for (var i = 0; i< collection.length; i++) {
    if (collection[i]%2==0) {
      index=i;
      break;// 不加break就是查询该元素在集合中最后出现的下标位置
    }
  }
  return collection[index];//在这里写入代码
}

module.exports = find_first_even;

