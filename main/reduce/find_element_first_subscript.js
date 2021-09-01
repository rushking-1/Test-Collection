'use strict';

function calculate_elements_sum(collection, element) {
  var index=0;
  for (var i = 0; i< collection.length; i++) {
    if (collection[i]==element) {
      index=i;
      break;                               // 不加break就是查询该元素在集合中最后出现的下标位置
    }
  }
  return index;
}

module.exports = calculate_elements_sum;

